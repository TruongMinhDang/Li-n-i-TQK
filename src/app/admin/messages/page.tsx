import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminMessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Hộp Thư Tin Nhắn</h2>
        <p className="text-muted-foreground">
          Đây là nơi bạn sẽ xem các tin nhắn được gửi từ trang Liên hệ.
        </p>
      </div>

       <Card>
            <CardHeader>
                <CardTitle>Sắp ra mắt!</CardTitle>
            </CardHeader>
            <CardDescription className="p-6 pt-0">
                Chức năng xem tin nhắn đang được xây dựng và sẽ sớm được cập nhật.
            </CardDescription>
       </Card>
    </div>
  )
}
