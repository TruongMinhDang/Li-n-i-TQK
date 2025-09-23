
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { useState } from "react";

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save, User as UserIcon, Loader2, Edit, Pencil, Newspaper, History, Mail, UserRound } from "lucide-react";
import { updateUserProfile } from "@/actions/auth";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const profileFormSchema = z.object({
  displayName: z.string().min(2, "Tên hiển thị phải có ít nhất 2 ký tự."),
  photo: z.any().optional(),
});

type ProfileFormData = z.infer<typeof profileFormSchema>;

// Mock data for activity history
const activityHistory = [
    { icon: <Newspaper className="h-4 w-4 text-green-500" />, text: "Đã tạo bài viết mới: 'Lễ Khai Giảng Năm Học Mới'", time: "2 ngày trước" },
    { icon: <Pencil className="h-4 w-4 text-blue-500" />, text: "Đã chỉnh sửa bài viết: 'Hội Trăng Rằm Yêu Thương'", time: "5 ngày trước" },
    { icon: <UserIcon className="h-4 w-4 text-purple-500" />, text: "Đã cập nhật tên hiển thị", time: "1 tuần trước" },
];


export default function ProfilePage() {
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    values: {
        displayName: user?.displayName || '',
        photo: null,
    },
  });

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "Lỗi Tải Lên",
          description: "Kích thước ảnh không được vượt quá 5MB.",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        setPhotoDataUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    const result = await updateUserProfile({
        displayName: data.displayName,
        ...(photoDataUrl && { photoDataUrl: photoDataUrl }),
    });

    if (result.success) {
      toast({
        title: "Cập nhật thành công!",
        description: result.message,
      });
      // A page reload is needed to reflect the updated auth state everywhere
      window.location.reload(); 
    } else {
      toast({
        title: "Cập nhật thất bại",
        description: result.error,
        variant: "destructive",
      });
    }
    setIsEditing(false);
  };

  if (loading || !user) {
    return (
        <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }

  // --- RENDER LOGIC ---

  if (isEditing) {
    // --- EDITING MODE ---
    return (
        <div className="space-y-6">
             <div>
                <h2 className="text-2xl font-bold tracking-tight">Chỉnh Sửa Hồ Sơ</h2>
                <p className="text-muted-foreground">
                Cập nhật thông tin cá nhân của bạn.
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Thông Tin Cá Nhân</CardTitle>
                            <CardDescription>Cập nhật ảnh đại diện và tên hiển thị của bạn.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <FormField
                                control={form.control}
                                name="photo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ảnh đại diện</FormLabel>
                                        <div className="flex items-center gap-6">
                                            <div className="relative group">
                                                <Avatar className="h-24 w-24 border">
                                                    <AvatarImage src={photoPreview || user.photoURL || undefined} alt={user.displayName || 'User'} />
                                                    <AvatarFallback><UserIcon className="h-10 w-10 text-muted-foreground" /></AvatarFallback>
                                                </Avatar>
                                                <label htmlFor="photo-upload" className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer">
                                                    <Camera className="h-8 w-8 text-white" />
                                                </label>
                                                <Input id="photo-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/gif" onChange={handlePhotoChange} />
                                            </div>
                                            <FormDescription>
                                                Nhấn vào ảnh để thay đổi. <br/>
                                                Ảnh nên có định dạng JPG, PNG, hoặc GIF và nhỏ hơn 5MB.
                                            </FormDescription>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="displayName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Tên hiển thị</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Tên của bạn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>
                    
                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>Hủy</Button>
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Đang lưu...</>
                            ) : (
                                <><Save className="mr-2 h-4 w-4" /> Lưu thay đổi</>
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
  }

  // --- VIEW MODE (CV Style) ---
  return (
    <div className="space-y-8">
        <Card className="overflow-hidden">
            <div className="bg-muted h-24" />
            <CardContent className="p-6 text-center -mt-16">
                 <Avatar className="h-32 w-32 border-4 border-background mx-auto shadow-lg">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                    <AvatarFallback><UserIcon className="h-16 w-16 text-muted-foreground" /></AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold mt-4">{user.displayName}</h2>
                <Badge variant="secondary" className="mt-2">Quản trị viên</Badge>
                <div className="mt-6 flex justify-center">
                    <Button onClick={() => setIsEditing(true)}>
                        <Edit className="mr-2 h-4 w-4"/>
                        Chỉnh sửa hồ sơ
                    </Button>
                </div>
            </CardContent>
            <Separator />
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-3">
                    <UserRound className="h-4 w-4 text-primary" />
                    <span>Vai trò: Administrator</span>
                </div>
            </div>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" />
                    Lịch sử hoạt động
                </CardTitle>
                <CardDescription>
                    Các hành động gần đây của bạn trên hệ thống.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {activityHistory.map((activity, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="bg-muted p-2 rounded-full mt-1">
                                {activity.icon}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">{activity.text}</p>
                                <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
  );
}
