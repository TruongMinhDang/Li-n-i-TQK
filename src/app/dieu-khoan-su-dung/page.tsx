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
          Vui lòng đọc kỹ các điều khoản trước khi sử dụng trang web của chúng tôi.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span>Quy định và Điều kiện</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground pt-2">Cập nhật lần cuối: 24/08/2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">1. Chấp nhận Điều khoản</h3>
              <p>
                Bằng việc truy cập và sử dụng website của Liên đội THCS Trần Quang Khải (sau đây gọi là "trang web" hoặc "dịch vụ"), bạn đồng ý tuân thủ và bị ràng buộc bởi các Điều Khoản Sử Dụng này và Chính Sách Bảo Mật của chúng tôi. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng trang web.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">2. Quyền Sở hữu Trí tuệ</h3>
              <p>
                Tất cả nội dung trên trang web này, bao gồm nhưng không giới hạn ở văn bản, đồ họa, hình ảnh, logo, video, biểu tượng, và các tài liệu khác (gọi chung là "Nội dung"), đều là tài sản độc quyền của Liên đội THCS Trần Quang Khải hoặc các bên cấp phép của chúng tôi và được bảo vệ bởi luật sở hữu trí tuệ của Việt Nam và quốc tế. Bạn không được phép sao chép, sửa đổi, phân phối, trưng bày, hoặc sử dụng lại bất kỳ nội dung nào mà không có sự cho phép rõ ràng bằng văn bản từ chúng tôi.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">3. Hành vi Người dùng và Nội dung do Người dùng tạo ra</h3>
              <p>
                Bạn hoàn toàn chịu trách nhiệm về nội dung mà bạn đăng tải hoặc gửi qua các tính năng của trang web (ví dụ: "Gửi lời chúc"). Bạn đồng ý không sử dụng trang web cho bất kỳ mục đích bất hợp pháp nào hoặc theo cách có thể gây hại, vô hiệu hóa, hoặc làm quá tải hệ thống. Các hành vi bị cấm bao gồm:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Đăng tải nội dung sai sự thật, gây hiểu lầm, có tính chất xúc phạm, phỉ báng, đe dọa, hoặc vi phạm thuần phong mỹ tục.</li>
                <li>Mạo danh bất kỳ cá nhân hoặc tổ chức nào.</li>
                <li>Vi phạm quyền riêng tư hoặc quyền sở hữu trí tuệ của người khác.</li>
                <li>Đăng tải virus, mã độc hoặc các tệp tin có hại khác.</li>
              </ul>
              <p>Chúng tôi có quyền (nhưng không có nghĩa vụ) xem xét và xóa bất kỳ nội dung nào do người dùng tạo ra mà chúng tôi cho là vi phạm các điều khoản này.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">4. Tuyên bố từ chối trách nhiệm</h3>
              <p>
                Thông tin trên trang web được cung cấp với mục đích tham khảo và giáo dục. Mặc dù chúng tôi nỗ lực để đảm bảo tính chính xác và cập nhật, chúng tôi không đưa ra bất kỳ bảo đảm nào về tính đầy đủ, chính xác, hoặc độ tin cậy của nội dung. Việc bạn sử dụng thông tin trên trang web là quyết định và rủi ro của riêng bạn.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">5. Giới hạn Trách nhiệm</h3>
              <p>
                Trong phạm vi tối đa được pháp luật cho phép, Liên đội THCS Trần Quang Khải sẽ không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, hoặc do hậu quả nào phát sinh từ việc bạn sử dụng hoặc không thể sử dụng trang web, ngay cả khi chúng tôi đã được thông báo về khả năng xảy ra những thiệt hại đó.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">6. Thay đổi Điều khoản</h3>
              <p>
                Chúng tôi có quyền sửa đổi các Điều khoản Sử Dụng này vào bất kỳ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên trang web. Việc bạn tiếp tục sử dụng trang web sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">7. Luật áp dụng</h3>
              <p>
                Các Điều khoản Sử dụng này sẽ được điều chỉnh và giải thích theo pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
