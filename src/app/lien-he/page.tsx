
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from '@/actions/contact';


const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Địa chỉ",
      value: "94/3 Nguyễn Thế Truyện, Phường Tân Sơn Nhì, TP. Hồ Chí Minh",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Điện thoại",
      value: "(+84) 123 456 789",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "contact@ldtqk.website",
    },
];

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự." }),
  email: z.string().email({ message: "Vui lòng nhập địa chỉ email hợp lệ." }),
  subject: z.string().min(5, { message: "Chủ đề phải có ít nhất 5 ký tự." }),
  message: z.string().min(10, { message: "Nội dung phải có ít nhất 10 ký tự." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitContactForm(data);

    if (result.success) {
      toast({
        title: "Gửi thành công!",
        description: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.",
      });
      form.reset();
    } else {
       toast({
        title: "Lỗi",
        description: result.error || "Không thể gửi tin nhắn của bạn. Vui lòng thử lại.",
        variant: "destructive",
      });
    }
  };
  
  return (
      <Card>
          <CardHeader>
              <CardTitle className="font-headline text-2xl">Gửi Tin Nhắn Cho Chúng Tôi</CardTitle>
              <CardDescription>Có câu hỏi hoặc góp ý? Đừng ngần ngại cho chúng tôi biết.</CardDescription>
          </CardHeader>
          <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Họ và Tên</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tên của bạn" {...field} disabled={form.formState.isSubmitting} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email của bạn" {...field} disabled={form.formState.isSubmitting}/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Chủ đề</FormLabel>
                            <FormControl>
                                <Input placeholder="Về vấn đề bạn quan tâm" {...field} disabled={form.formState.isSubmitting}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nội dung</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Viết nội dung của bạn ở đây..." className="min-h-[100px]" {...field} disabled={form.formState.isSubmitting}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                        <Send />
                        {form.formState.isSubmitting ? 'Đang gửi...' : 'Gửi Đi'}
                    </Button>
                </form>
              </Form>
          </CardContent>
      </Card>
  )
}


export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Liên Hệ
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
        </p>
      </section>

      <section>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
                {contactInfo.map((info) => (
                    <Card key={info.title} className="bg-transparent border-0 shadow-none">
                        <CardHeader className="p-0">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    {info.icon}
                                </div>
                                <div>
                                    <CardTitle className="font-headline text-xl">{info.title}</CardTitle>
                                    <p className="text-muted-foreground">{info.value}</p>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
                 <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.227076150244!2d106.6346723147498!3d10.79383639230948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295f19523c9b%3A0x8615b39414417a82!2zOTQgTmd1eeG7hW4gVGjhur8gVHJ1eeG7h24sIFBow7ogVHJ1bmcsIFTDom4gUGjDuiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1678886363023!5m2!1svi!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bản đồ vị trí Liên đội"
                    ></iframe>
                </div>
            </div>
           
            <div>
              <ContactForm />
            </div>
        </div>
      </section>
    </div>
  );
}
