import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function AdminPostsPage() {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
             <div>
                <h2 className="text-2xl font-bold tracking-tight">Quản Lý Bài Viết</h2>
                <p className="text-muted-foreground">
                Tạo và quản lý các bài viết trên trang Chuyện Nhà Xanh.
                </p>
            </div>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Tạo bài viết mới
            </Button>
        </div>
     

       <Card>
            <CardHeader>
                <CardTitle>Sắp ra mắt!</CardTitle>
            </CardHeader>
            <CardDescription className="p-6 pt-0">
                Chức năng tạo và quản lý bài viết đang được xây dựng và sẽ sớm được cập nhật.
            </CardDescription>
       </Card>
    </div>
  )
}
