
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, FileUp, Loader2, Save } from "lucide-react";
import Link from "next/link";
import { authors } from "@/lib/constants";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createPost } from "@/actions/posts";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";


const categoryMap: { [key: string]: string } = {
  'xay-dung-doi-vung-manh': 'Xây Dựng Đội Vững Mạnh',
  'lam-theo-loi-bac': 'Làm theo lời Bác',
  'cung-tien-buoc-len-doan': 'Cùng Tiến Bước Lên Đoàn',
  'cau-chuyen-dep': 'Mỗi Tuần Một Câu Chuyện Đẹp',
  'mang-non-tieu-bieu': 'Măng Non Tiêu Biểu',
  'su-kien-noi-bat': 'Sự Kiện Nổi Bật',
  'khong-gian-van-hoa-hcm': 'Không Gian Văn Hóa Hồ Chí Minh',
};

const postFormSchema = z.object({
  title: z.string().min(10, { message: "Tiêu đề phải có ít nhất 10 ký tự." }),
  slug: z.string().min(3, { message: "Slug phải có ít nhất 3 ký tự." }).regex(/^[a-z0-9-]+$/, { message: "Slug chỉ được chứa chữ thường, số và dấu gạch ngang." }),
  author: z.string({ required_error: "Vui lòng chọn tác giả." }),
  category: z.string({ required_error: "Vui lòng chọn chuyên mục." }),
  date: z.date({ required_error: "Vui lòng chọn ngày đăng." }),
  description: z.string().min(20, { message: "Mô tả phải có ít nhất 20 ký tự." }),
  content: z.string().min(50, { message: "Nội dung phải có ít nhất 50 ký tự." }),
  image: z.any().optional(),
});

type PostFormData = z.infer<typeof postFormSchema>;

export default function NewPostPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  const form = useForm<PostFormData>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      content: "",
      date: new Date(),
    },
  });
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "Lỗi Tải Lên",
          description: "Kích thước ảnh không được vượt quá 5MB.",
          variant: "destructive",
        });
        form.setValue('image', null);
        setImagePreview(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        form.setValue('image', {
          dataUrl: reader.result as string,
          fileName: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: PostFormData) => {
    const result = await createPost(data);

    if (result.success) {
      toast({
        title: "Tạo bài viết thành công!",
        description: `Bài viết "${data.title}" đã được đăng.`,
      });
      router.push("/admin/posts");
    } else {
      toast({
        title: "Tạo bài viết thất bại",
        description: result.error,
        variant: "destructive",
      });
    }
  };
  
   const { isSubmitting } = form.formState;

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Tạo Bài Viết Mới</h2>
              <p className="text-muted-foreground">
                Điền các thông tin dưới đây để đăng một bài viết mới.
              </p>
            </div>
            <div className="flex gap-2">
                <Button type="button" variant="outline" asChild disabled={isSubmitting}>
                    <Link href="/admin/posts">Hủy</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    {isSubmitting ? 'Đang lưu...' : 'Lưu bài viết'}
                </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Nội dung chính</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tiêu đề bài viết</FormLabel>
                        <FormControl>
                          <Input placeholder="Ví dụ: Lễ Khai Giảng Năm Học Mới..." {...field} disabled={isSubmitting}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mô tả ngắn (lead)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Một đoạn mô tả ngắn gọn, hấp dẫn xuất hiện ở đầu bài viết và danh sách tin tức." {...field} disabled={isSubmitting}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nội dung chi tiết</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Soạn thảo nội dung đầy đủ của bài viết tại đây. Bạn có thể xuống dòng để tạo đoạn mới." className="min-h-[300px]" {...field} disabled={isSubmitting}/>
                        </FormControl>
                         <FormDescription>
                            Để tạo một đoạn trích dẫn (blockquote), hãy bắt đầu dòng với `<blockquote>` và kết thúc với `</blockquote>`.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1 space-y-6">
               <Card>
                    <CardHeader>
                        <CardTitle>Thuộc tính bài viết</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Slug (đường dẫn)</FormLabel>
                                <FormControl>
                                    <Input placeholder="vi-du-bai-viet-moi" {...field} disabled={isSubmitting}/>
                                </FormControl>
                                <FormDescription>Đây là phần sẽ xuất hiện trên URL. Chỉ dùng chữ thường, số và gạch ngang.</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                <FormLabel>Ngày đăng</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                        disabled={isSubmitting}
                                        >
                                        {field.value ? (
                                            format(field.value, "PPP", { locale: vi })
                                        ) : (
                                            <span>Chọn một ngày</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chuyên mục & Tác giả</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Chuyên mục</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Chọn một chuyên mục" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {Object.entries(categoryMap).map(([slug, name]) => (
                                    <SelectItem key={slug} value={slug}>{name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tác giả</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                                <SelectTrigger>
                                <SelectValue placeholder="Chọn một tác giả" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {Object.values(authors).map((author) => (
                                <SelectItem key={author.name} value={author.name}>{author.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                    <CardTitle>Ảnh đại diện</CardTitle>
                </CardHeader>
                <CardContent>
                     {imagePreview && (
                        <div className="mb-4">
                            <Image src={imagePreview} alt="Xem trước ảnh" width={400} height={250} className="rounded-md w-full h-auto object-cover" />
                        </div>
                    )}
                     <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <FileUp className="w-8 h-8 mb-2 text-muted-foreground" />
                                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Nhấn để tải lên</span> hoặc kéo thả</p>
                                                <p className="text-xs text-muted-foreground">PNG, JPG, GIF (tối đa 5MB)</p>
                                            </div>
                                            <Input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} accept="image/png, image/jpeg, image/gif" disabled={isSubmitting} />
                                        </label>
                                    </div> 
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
              </Card>

            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
