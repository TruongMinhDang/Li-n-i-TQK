import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

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
             <p className="text-sm text-muted-foreground pt-2">Cập nhật lần cuối: 24/08/2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">1. Giới thiệu</h3>
              <p>
                Chính sách Bảo mật này giải thích cách Liên đội THCS Trần Quang Khải ("chúng tôi") thu thập, sử dụng, và bảo vệ thông tin của bạn khi bạn truy cập và sử dụng website của chúng tôi (ldtqk.website). Bằng việc sử dụng trang web, bạn đồng ý với việc thu thập và sử dụng thông tin theo chính sách này.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">2. Thông tin chúng tôi thu thập</h3>
              <p>Chúng tôi thu thập các loại thông tin sau:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Thông tin do bạn cung cấp:</strong> Khi bạn sử dụng các tính năng tương tác như "Gửi lời chúc", chúng tôi sẽ thu thập các thông tin bạn nhập vào, bao gồm tên, tên người nhận, và nội dung lời chúc.
                </li>
                <li>
                  <strong>Dữ liệu sử dụng tự động:</strong> Chúng tôi sử dụng các dịch vụ như Firebase Analytics để thu thập thông tin ẩn danh về hoạt động của bạn trên trang web. Dữ liệu này bao gồm số lượt truy cập, các trang đã xem, thời gian truy cập, loại trình duyệt, và địa chỉ IP đã được ẩn danh. Mục đích là để phân tích và cải thiện trải nghiệm người dùng.
                </li>
              </ul>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">3. Mục đích sử dụng thông tin</h3>
              <p>
                Thông tin của bạn được sử dụng cho các mục đích sau:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Vận hành và duy trì hoạt động của trang web.</li>
                <li>Cá nhân hóa và hiển thị nội dung bạn tạo ra (ví dụ: lời chúc).</li>
                <li>Phân tích lưu lượng truy cập để cải thiện cấu trúc và nội dung trang web.</li>
                <li>Ngăn chặn các hoạt động lạm dụng, đảm bảo an ninh và an toàn cho hệ thống.</li>
                <li>Trả lời các yêu cầu và thắc mắc của bạn khi bạn liên hệ với chúng tôi.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">4. Chia sẻ thông tin</h3>
              <p>
                Chúng tôi cam kết không bán, trao đổi, hoặc chuyển giao thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục đích thương mại. Thông tin của bạn chỉ được chia sẻ trong các trường hợp sau:
              </p>
               <ul className="list-disc pl-6 space-y-1">
                <li>Khi có sự đồng ý của bạn.</li>
                <li>Cho các nhà cung cấp dịch vụ thứ ba (như Google Firebase) để họ cung cấp các dịch vụ cần thiết cho hoạt động của trang web, và họ cũng bị ràng buộc bởi các quy định bảo mật tương tự.</li>
                <li>Khi được yêu cầu bởi pháp luật hoặc để bảo vệ quyền lợi hợp pháp của chúng tôi.</li>
              </ul>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">5. An ninh và Bảo mật thông tin</h3>
              <p>
                Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức hợp lý (bao gồm mã hóa, kiểm soát truy cập) để bảo vệ thông tin của bạn khỏi sự truy cập, thay đổi, tiết lộ hoặc phá hủy trái phép. Tuy nhiên, không có phương thức truyền tải qua Internet hoặc lưu trữ điện tử nào là an toàn 100%, vì vậy chúng tôi không thể đảm bảo an toàn tuyệt đối.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">6. Quyền của bạn</h3>
              <p>
                Đối với thông tin cá nhân của mình, bạn có quyền yêu cầu truy cập, sửa đổi hoặc xóa dữ liệu. Nếu bạn muốn thực hiện các quyền này, vui lòng liên hệ với chúng tôi.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">7. Thay đổi Chính sách</h3>
               <p>
                Chúng tôi có thể cập nhật Chính sách Bảo mật này vào bất kỳ lúc nào. Mọi thay đổi sẽ có hiệu lực ngay khi được đăng tải trên trang này. Chúng tôi khuyến khích bạn thường xuyên xem lại trang này để cập nhật thông tin.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">8. Liên hệ</h3>
              <p>
                Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:contact@ldtqk.website" className="text-primary hover:underline">contact@ldtqk.website</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
