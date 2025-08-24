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
          Chúng tôi cam kết bảo vệ sự riêng tư của bạn.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              <span>Cam kết của chúng tôi về quyền riêng tư</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">1. Thu thập thông tin</h3>
              <p>
                Chúng tôi thu thập thông tin khi bạn tương tác với trang web, chẳng hạn như khi bạn gửi lời chúc hoặc liên hệ. Thông tin được thu thập có thể bao gồm tên và nội dung bạn cung cấp. Ngoài ra, chúng tôi sử dụng Firebase Analytics để thu thập dữ liệu ẩn danh về lượt truy cập trang nhằm cải thiện trải nghiệm người dùng.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">2. Sử dụng thông tin</h3>
              <p>
                Thông tin chúng tôi thu thập được sử dụng để:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cung cấp và cá nhân hóa các tính năng trên trang web.</li>
                <li>Phản hồi các yêu cầu và thắc mắc của bạn.</li>
                <li>Phân tích và cải thiện chất lượng của trang web.</li>
                <li>Đảm bảo an ninh và an toàn cho hệ thống.</li>
              </ul>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">3. Chia sẻ thông tin</h3>
              <p>
                Chúng tôi cam kết không bán, trao đổi, hoặc chuyển giao thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào mà không có sự đồng ý của bạn, trừ các trường hợp được yêu cầu bởi pháp luật.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">4. Bảo mật thông tin</h3>
              <p>
                Chúng tôi áp dụng các biện pháp bảo mật thích hợp để bảo vệ thông tin của bạn khỏi sự truy cập, thay đổi, hoặc phá hủy trái phép.
              </p>
            </div>
             <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">5. Liên hệ</h3>
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
