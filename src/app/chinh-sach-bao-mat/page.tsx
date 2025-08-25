import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Chính Sách Bảo Mật
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Chúng tôi cam kết bảo vệ sự riêng tư và dữ liệu của bạn.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Lock className="h-6 w-6 text-primary" />
              <span>Cam kết của chúng tôi về quyền riêng tư</span>
            </CardTitle>
             <p className="text-sm text-muted-foreground pt-2">Cập nhật lần cuối: 25/08/2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">1. Giới thiệu</h3>
              <p><strong>1.1.</strong> Chính sách này giải thích cách Liên đội THCS Trần Quang Khải (“chúng tôi”) thu thập, sử dụng, chia sẻ và bảo vệ thông tin khi bạn truy cập/điều hướng website ldtqk.website và các tên miền/phần mềm liên quan (“Trang web”).</p>
              <p><strong>1.2.</strong> Bằng việc sử dụng Trang web, bạn xác nhận đã đọc, hiểu và đồng ý với Chính sách này và <Link href="/dieu-khoan-su-dung" className="text-primary hover:underline">Điều khoản sử dụng</Link>. Nếu không đồng ý, vui lòng ngừng sử dụng Trang web.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">2. Phạm vi áp dụng và định nghĩa</h3>
              <p><strong>2.1.</strong> Chính sách áp dụng cho người dùng là học sinh, phụ huynh, giáo viên, khách truy cập và mọi cá nhân gửi thông tin qua Trang web (“Người dùng”).</p>
              <p><strong>2.2.</strong> “Dữ liệu cá nhân” là thông tin gắn liền với một cá nhân hoặc có thể xác định một cá nhân (ví dụ: họ tên, hình ảnh, địa chỉ email), bao gồm cả dữ liệu kỹ thuật/nhật ký khi truy cập.</p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">3. Căn cứ và mục đích xử lý dữ liệu</h3>
              <p><strong>3.1.</strong> Chúng tôi xử lý dữ liệu dựa trên một hoặc nhiều căn cứ hợp pháp sau: (i) sự đồng ý của bạn/đại diện hợp pháp; (ii) thực hiện chức năng, nhiệm vụ giáo dục và vận hành Trang web; (iii) lợi ích hợp pháp để đảm bảo an toàn, ngăn chặn lạm dụng; (iv) tuân thủ nghĩa vụ pháp lý.</p>
               <p><strong>3.2.</strong> Mục đích sử dụng dữ liệu:</p>
               <ul className="list-disc pl-6 space-y-1">
                  <li>a) Vận hành, duy trì tính sẵn sàng của Trang web;</li>
                  <li>b) Hiển thị/cá nhân hóa nội dung bạn tạo (ví dụ: “Gửi lời chúc”);</li>
                  <li>c) Phân tích lưu lượng để cải thiện trải nghiệm;</li>
                  <li>d) Phòng chống gian lận, bảo mật hệ thống;</li>
                  <li>đ) Phản hồi yêu cầu, hỗ trợ liên hệ.</li>
               </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">4. Loại dữ liệu chúng tôi thu thập</h3>
               <p><strong>4.1.</strong> Bạn cung cấp trực tiếp: họ tên, tên người nhận, nội dung lời chúc, thông tin liên hệ (nếu có), phản hồi/kiến nghị.</p>
               <p><strong>4.2.</strong> Dữ liệu kỹ thuật và sử dụng tự động: số lượt truy cập, trang đã xem, thời gian truy cập, loại trình duyệt, hệ điều hành, thông số thiết bị, địa chỉ IP được ẩn danh, cookie/mã định danh thiết bị.</p>
               <p><strong>4.3.</strong> Chúng tôi không chủ ý thu thập dữ liệu nhạy cảm (tình trạng sức khỏe, tôn giáo, sinh trắc học…). Nếu bạn vô tình gửi, bạn đồng ý để chúng tôi xóa hoặc ẩn danh nội dung đó.</p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">5. Trẻ vị thành niên</h3>
              <p><strong>5.1.</strong> Đối với Người dùng chưa đủ 18 tuổi, việc cung cấp dữ liệu cá nhân và đăng nội dung (hình ảnh, lời chúc…) cần có sự đồng ý của cha mẹ/người giám hộ theo quy định.</p>
              <p><strong>5.2.</strong> Phụ huynh/người giám hộ có thể yêu cầu chỉnh sửa/gỡ bỏ nội dung liên quan đến con em theo Mục 11 và 14.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">6. Công cụ phân tích và cookie</h3>
                <p><strong>6.1.</strong> Chúng tôi sử dụng Firebase Analytics (Google) hoặc công cụ tương đương để thu thập dữ liệu ẩn danh/đã khử định danh về hành vi truy cập; nhà cung cấp bị ràng buộc bởi nghĩa vụ bảo mật tương tự và không được phép sử dụng dữ liệu cho mục đích riêng.</p>
                <p><strong>6.2.</strong> Trang web có thể dùng cookie và công nghệ tương tự để ghi nhận tùy chọn, thống kê truy cập. Bạn có thể chặn cookie trong cài đặt trình duyệt, nhưng một số tính năng có thể hoạt động hạn chế.</p>
                <p><strong>6.3.</strong> Chúng tôi không sử dụng cookie quảng cáo hay theo dõi liên miền phục vụ thương mại.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">7. Chia sẻ và công bố dữ liệu</h3>
                <p>Chúng tôi không bán hoặc trao đổi dữ liệu cá nhân. Dữ liệu chỉ được chia sẻ:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>a) Khi có sự đồng ý của bạn/đại diện hợp pháp;</li>
                    <li>b) Với nhà cung cấp dịch vụ (ví dụ: Google Firebase, nhà cung cấp hạ tầng lưu trữ) để vận hành Trang web; các bên này chỉ xử lý theo chỉ dẫn của chúng tôi và cam kết bảo mật;</li>
                    <li>c) Theo yêu cầu pháp luật hoặc để bảo vệ quyền, lợi ích hợp pháp, an toàn của học sinh/nhà trường/cộng đồng.</li>
                </ul>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">8. Lưu trữ, ẩn danh và thời hạn giữ dữ liệu</h3>
                <p><strong>8.1.</strong> Dữ liệu được lưu trữ an toàn tại [tên nhà cung cấp hạ tầng] với biện pháp bảo mật kỹ thuật và tổ chức phù hợp (mã hóa, phân quyền truy cập, sao lưu).</p>
                <p><strong>8.2.</strong> Thời hạn giữ:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Nội dung “lời chúc” và siêu dữ liệu liên quan: tối đa 24 tháng kể từ thời điểm đăng, trừ khi bạn/giám hộ yêu cầu gỡ sớm.</li>
                    <li>Nhật ký hệ thống và dữ liệu phân tích: tối đa 12 tháng ở dạng ẩn danh/khử định danh.</li>
                </ul>
                <p><strong>8.3.</strong> Khi hết thời hạn, chúng tôi sẽ xóa hoặc ẩn danh dữ liệu theo quy trình nội bộ, trừ trường hợp cần lưu giữ lâu hơn để đáp ứng yêu cầu pháp luật hoặc bảo vệ quyền lợi hợp pháp.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">9. Chuyển dữ liệu ra ngoài lãnh thổ (nếu có)</h3>
                <p><strong>9.1.</strong> Do đặc thù dịch vụ đám mây, dữ liệu kỹ thuật/ẩn danh có thể được xử lý trên máy chủ đặt ngoài Việt Nam bởi nhà cung cấp dịch vụ nêu tại Mục 7.</p>
                <p><strong>9.2.</strong> Chúng tôi áp dụng biện pháp bảo vệ phù hợp (mã hóa, hạn chế truy cập, điều khoản bảo mật hợp đồng) và không chuyển dữ liệu xác định danh tính ra nước ngoài trừ khi có căn cứ hợp pháp và/hoặc sự đồng ý rõ ràng.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">10. Biện pháp an ninh</h3>
                <p>Áp dụng kiểm soát truy cập theo vai trò, mã hóa khi truyền/luu trữ (khi khả dụng), tường lửa, chống mã độc, ghi nhận nhật ký, đánh giá định kỳ. Tuy nhiên, không phương thức nào an toàn tuyệt đối; chúng tôi không thể bảo đảm an toàn tuyệt đối trước mọi rủi ro.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">11. Quyền của bạn đối với dữ liệu cá nhân</h3>
                <p>Bạn (hoặc phụ huynh/người giám hộ đối với người chưa đủ tuổi) có thể:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>a) Yêu cầu thông tin về việc xử lý dữ liệu;</li>
                    <li>b) Truy cập, chỉnh sửa, cập nhật dữ liệu;</li>
                    <li>c) Rút lại sự đồng ý, yêu cầu hạn chế xử lý hoặc xóa dữ liệu khi không còn mục đích hợp pháp;</li>
                    <li>d) Khiếu nại hoặc yêu cầu giải quyết tranh chấp liên quan đến việc xử lý dữ liệu.</li>
                </ul>
                <p className="pt-2">Cách thực hiện: gửi yêu cầu theo Mục 14, nêu rõ yêu cầu và thông tin xác minh danh tính. Chúng tôi sẽ phản hồi trong vòng 15 ngày làm việc (trừ trường hợp pháp luật quy định khác).</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">12. Trách nhiệm của bạn</h3>
                <p>Cung cấp thông tin đúng, đủ, cập nhật; không đăng tải nội dung xâm phạm quyền riêng tư/người thứ ba; bảo mật thông tin đăng nhập (nếu có); hợp tác khi chúng tôi xác minh yêu cầu gỡ/xóa.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">13. Liên kết bên thứ ba</h3>
                <p>Trang web có thể dẫn đến website/dịch vụ của bên thứ ba. Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung, chính sách riêng tư của các bên đó. Bạn nên đọc chính sách bảo mật riêng của họ.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">14. Kênh liên hệ và khiếu nại</h3>
                <ul className="list-none space-y-1 pl-2">
                    <li><strong>Đơn vị phụ trách:</strong> Liên đội THCS Trần Quang Khải</li>
                    <li><strong>Địa chỉ:</strong> 94/3 Nguyễn Thế Truyện, Phường Tân Sơn Nhì, TP. Hồ Chí Minh</li>
                    <li><strong>Email:</strong> contact@ldtqk.website (hoặc [email chính thức])</li>
                    <li><strong>Điện thoại:</strong> (+84) 123 456 789</li>
                    <li><strong>Đầu mối tiếp nhận yêu cầu dữ liệu cá nhân:</strong> [họ tên/chức danh] – [email/điện thoại]</li>
                </ul>
                 <p className="pt-2">Chúng tôi tiếp nhận, phân loại và xử lý yêu cầu theo quy trình nội bộ; trường hợp phức tạp có thể cần thêm thời gian theo quy định pháp luật.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">15. Sửa đổi Chính sách</h3>
                <p>Chúng tôi có thể cập nhật Chính sách này bất kỳ lúc nào; phiên bản mới có hiệu lực kể từ thời điểm đăng tải trên Trang web. Việc bạn tiếp tục sử dụng Trang web sau thời điểm đó đồng nghĩa chấp nhận bản cập nhật.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

    