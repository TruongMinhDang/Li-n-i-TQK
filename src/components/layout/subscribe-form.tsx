"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { subscribeToNewsletter } from "@/actions/subscribe";

const formSchema = z.object({
  email: z.string().email({
    message: "Vui lòng nhập một địa chỉ email hợp lệ.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function SubscribeForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const result = await subscribeToNewsletter(data.email);
      if (result.success) {
        toast({
          title: "Đăng ký thành công!",
          description: "Cảm ơn bạn đã tham gia. Chúng tôi sẽ sớm gửi cho bạn những thông tin mới nhất.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Lỗi",
          description: result.error || "Đã xảy ra lỗi. Vui lòng thử lại.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể kết nối đến máy chủ. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-white">Đăng ký nhận bản tin</h4>
      <p className="text-xs text-slate-400">Nhận những thông tin và hoạt động mới nhất từ chúng tôi.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <div className="relative">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                     <Input 
                        placeholder="Email của bạn" 
                        {...field} 
                        className="bg-slate-700 border-slate-600 text-slate-200 placeholder:text-slate-400 pl-9"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            variant="default"
            size="default"
            disabled={form.formState.isSubmitting}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            {form.formState.isSubmitting ? "Đang gửi..." : "Đăng Ký"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
