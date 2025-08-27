import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Settings, CheckCircle, Info } from "lucide-react";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Chính Sách Cookie
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Tìm hiểu cách chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Cookie className="h-6 w-6 text-primary" />
              <span>Cookie là gì và tại sao chúng tôi sử dụng?</span>
            </CardTitle>
             <p className="text-sm text-muted-foreground pt-2">Cập nhật lần cuối: 25/08/2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground flex items-center gap-2"><Info className="h-5 w-5" />1. Giới thiệu về Cookie</h3>
              <p>Cookie là các tệp văn bản nhỏ được lưu trữ trên trình duyệt hoặc thiết bị của bạn khi bạn truy cập một trang web. Chúng được sử dụng rộng rãi để giúp các trang web hoạt động hiệu quả hơn, cũng như để cung cấp thông tin cho chủ sở hữu trang web.</p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground flex items-center gap-2"><CheckCircle className="h-5 w-5" />2. Cách chúng tôi sử dụng Cookie</h3>
               <p>Trang web của Liên đội THCS Trần Quang Khải sử dụng cookie cho các mục đích sau:</p>
               <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Cookie cần thiết:</strong> Những cookie này rất quan trọng để bạn có thể di chuyển trên trang web và sử dụng các tính năng của nó. Ví dụ: cookie giúp ghi nhớ trạng thái đăng nhập hoặc các mục bạn đã chọn.
                  </li>
                  <li>
                    <strong>Cookie hiệu suất và phân tích:</strong> Chúng tôi sử dụng các công cụ như Firebase Analytics để thu thập thông tin ẩn danh về cách khách truy cập sử dụng trang web của chúng tôi. Dữ liệu này (ví dụ: số lượt xem trang, thời gian trên trang) giúp chúng tôi hiểu và cải thiện cách trang web hoạt động. Chúng tôi không thu thập dữ liệu cá nhân có thể nhận dạng bạn.
                  </li>
                   <li>
                    <strong>Cookie chức năng:</strong> Những cookie này cho phép trang web ghi nhớ các lựa chọn bạn đã thực hiện (chẳng hạn như tùy chọn giao diện sáng/tối) để cung cấp các tính năng nâng cao và cá nhân hóa hơn.
                  </li>
               </ul>
                <p className="pt-2">Chúng tôi **không** sử dụng cookie quảng cáo hoặc theo dõi của bên thứ ba cho mục đích thương mại.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2"><Settings className="h-5 w-5" />3. Cách quản lý Cookie</h3>
                <p>Bạn hoàn toàn có quyền kiểm soát cookie. Hầu hết các trình duyệt web cho phép bạn xem, quản lý, xóa và chặn cookie thông qua cài đặt của trình duyệt.</p>
                 <p>Tuy nhiên, xin lưu ý rằng nếu bạn xóa hoặc chặn cookie, một số tính năng của trang web có thể không hoạt động như mong đợi. Để biết thêm thông tin chi tiết về cách quản lý cookie, bạn có thể tham khảo hướng dẫn của trình duyệt mình đang sử dụng.</p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">4. Thay đổi chính sách</h3>
              <p>Chúng tôi có thể cập nhật Chính sách Cookie này theo thời gian. Mọi thay đổi sẽ được đăng trên trang này. Việc bạn tiếp tục sử dụng Trang web sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.</p>
               <p>Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua trang <Link href="/lien-he" className="text-primary hover:underline">Liên hệ</Link>.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
