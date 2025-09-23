
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";
import Link from "next/link";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
import { UserPlus } from "lucide-react";
import { registerUser } from "@/actions/auth";
import { auth } from "@/lib/firebase";
import { Separator } from "@/components/ui/separator";

const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.519-3.317-11.28-7.962l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C44.902,35.126,48,29.932,48,24C48,22.659,47.862,21.35,47.611,20.083z"></path>
    </svg>
);

const registerFormSchema = z.object({
  email: z.string().email({ message: "Vui lòng nhập địa chỉ email hợp lệ." }),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự." }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { toast } = useToast();
  
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleRegisterSuccess = () => {
    toast({
      title: "Đăng ký thành công!",
      description: "Chào mừng bạn đến với Nhà Xanh. Tự động chuyển đến trang chủ.",
    });
    router.push("/");
    router.refresh();
  };

  const onSubmit = async (data: RegisterFormData) => {
    const result = await registerUser(data);
    if (result.success) {
      handleRegisterSuccess();
    } else {
      toast({
        title: "Đăng ký thất bại",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
          await signInWithPopup(auth, provider);
          handleRegisterSuccess();
      } catch (error: any) {
          toast({
              title: "Đăng ký Google thất bại",
              description: "Đã có lỗi xảy ra. Vui lòng thử lại.",
              variant: "destructive",
          });
      }
  };

  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading, router]);
  
  if (loading || user) {
     return <div className="flex h-64 items-center justify-center"><UserPlus className="h-12 w-12 animate-spin text-primary" /></div>;
  }


  return (
    <div className="flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">Tạo Tài Khoản</CardTitle>
                <CardDescription>Tham gia cộng đồng Nhà Xanh ngay hôm nay!</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="email@example.com" {...field} />
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
                            <UserPlus className="mr-2" />
                            {form.formState.isSubmitting ? "Đang tạo..." : "Tạo Tài Khoản"}
                        </Button>
                    </form>
                 </Form>
                 <div className="relative my-6">
                    <Separator />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-2 text-sm text-muted-foreground">HOẶC</span>
                </div>
                 <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
                    <GoogleIcon />
                    Tiếp tục với Google
                 </Button>
                 <p className="mt-6 text-center text-sm text-muted-foreground">
                    Đã có tài khoản?{" "}
                    <Link href="/login" className="font-semibold text-primary hover:underline">
                        Đăng nhập
                    </Link>
                </p>
            </CardContent>
        </Card>
    </div>
  );
}
