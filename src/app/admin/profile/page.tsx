
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save, User as UserIcon, Loader2 } from "lucide-react";
import { updateUserProfile } from "@/actions/auth";

const profileFormSchema = z.object({
  email: z.string().email(),
  displayName: z.string().min(2, "Tên hiển thị phải có ít nhất 2 ký tự."),
  photo: z.any().optional(),
});

type ProfileFormData = z.infer<typeof profileFormSchema>;

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    values: {
        email: user?.email || '',
        displayName: user?.displayName || '',
        photo: null,
    },
  });

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
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
  };

  if (loading || !user) {
    return (
        <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Hồ Sơ Của Bạn</h2>
        <p className="text-muted-foreground">
          Quản lý thông tin tài khoản và tùy chọn của bạn.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                        <div className="relative group">
                            <Avatar className="h-24 w-24 border">
                                <AvatarImage src={photoPreview || user.photoURL || undefined} alt={user.displayName || 'User'} />
                                <AvatarFallback><UserIcon /></AvatarFallback>
                            </Avatar>
                             <label htmlFor="photo-upload" className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer">
                                <Camera className="h-8 w-8 text-white" />
                            </label>
                            <Input id="photo-upload" type="file" className="hidden" accept="image/*" onChange={handlePhotoChange} />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
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
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mt-4">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled />
                                    </FormControl>
                                    <FormDescription>
                                        Email không thể thay đổi.
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <div className="flex justify-end">
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
