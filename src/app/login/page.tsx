
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from "lucide-react";
import { loginUser } from "@/actions/auth";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Vui lòng nhập địa chỉ email hợp lệ." }),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự." }),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormData) => {
    const result = await loginUser(data);
    if (result.success) {
      toast({
        title: "Đăng nhập thành công!",
        description: "Chào mừng quản trị viên quay trở lại.",
      });
      router.push("/admin/dashboard");
    } else {
      toast({
        title: "Đăng nhập thất bại",
        description: result.error || "Email hoặc mật khẩu không đúng.",
        variant: "destructive",
      });
    }
  };

  // If user is already logged in, redirect to dashboard
  if (user) {
    router.push('/admin/dashboard');
    return null; // Render nothing while redirecting
  }

  return (
    <div className="flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">Đăng Nhập Quản Trị</CardTitle>
                <CardDescription>Chỉ dành cho quản trị viên của trang web.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="admin@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                            <LogIn className="mr-2" />
                            {form.formState.isSubmitting ? "Đang xử lý..." : "Đăng Nhập"}
                        </Button>
                    </form>
                 </Form>
            </CardContent>
        </Card>
    </div>
  );
}
