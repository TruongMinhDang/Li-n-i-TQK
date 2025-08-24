import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function TermsOfUsePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Điều Khoản Sử Dụng
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Cập nhật lần cuối: 24/08/2024
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span>Vui lòng đọc kỹ các điều khoản trước khi sử dụng trang web.</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">1. Chấp nhận Điều khoản</h3>
              <p>
                Bằng việc truy cập và sử dụng website của Liên đội THCS Trần Quang Khải (sau đây gọi là "trang web"), bạn đồng ý tuân thủ và bị ràng buộc bởi các Điều khoản Sử dụng này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng trang web.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">2. Quyền Sở hữu Trí tuệ</h3>
              <p>
                Tất cả nội dung trên trang web này, bao gồm nhưng không giới hạn ở văn bản, hình ảnh, logo, video, và thiết kế, đều là tài sản của Liên đội THCS Trần Quang Khải và được bảo vệ bởi luật sở hữu trí tuệ. Bạn không được phép sao chép, phân phối, hoặc sử dụng lại bất kỳ nội dung nào mà không có sự cho phép bằng văn bản từ chúng tôi.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">3. Hành vi Người dùng</h3>
              <p>
                Bạn đồng ý không sử dụng trang web cho bất kỳ mục đích bất hợp pháp nào hoặc theo cách có thể gây hại, vô hiệu hóa, hoặc làm quá tải trang web. Bạn không được phép đăng tải hoặc truyền bá nội dung không phù hợp, mang tính xúc phạm, hoặc vi phạm thuần phong mỹ tục.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">4. Giới hạn Trách nhiệm</h3>
              <p>
                Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng trang web. Thông tin trên trang web được cung cấp với mục đích tham khảo và có thể thay đổi mà không cần báo trước.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">5. Thay đổi Điều khoản</h3>
              <p>
                Chúng tôi có quyền sửa đổi các Điều khoản Sử dụng này vào bất kỳ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên trang web. Việc bạn tiếp tục sử dụng trang web sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
