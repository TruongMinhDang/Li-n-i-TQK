import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, ThumbsUp, ThumbsDown, MessageCircleHeart } from "lucide-react";
import Link from "next/link";

export default function CodeOfConductPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Văn Hóa Ứng Xử
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Cùng nhau xây dựng một môi trường trực tuyến văn minh, tôn trọng và an toàn.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Handshake className="h-6 w-6 text-primary" />
              <span>Quy Tắc Cộng Đồng Nhà Xanh</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground pt-2">Cập nhật lần cuối: 25/08/2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                <MessageCircleHeart className="h-5 w-5 text-success" />
                Mục Tiêu Của Chúng Ta
              </h3>
              <p>Website Liên đội THCS Trần Quang Khải được tạo ra để trở thành một không gian số an toàn, lành mạnh và mang tính giáo dục. Chúng tôi mong muốn mọi thành viên khi tham gia (bình luận, gửi lời chúc, tương tác...) đều đóng góp vào việc xây dựng một cộng đồng trực tuyến tích cực, nơi mọi người cảm thấy được tôn trọng và chào đón.</p>
            </div>
            
            <div className="space-y-4">
               <h3 className="font-semibold text-lg text-foreground">Những điều chúng tôi khuyến khích:</h3>
               <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
                    <ThumbsUp className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-300">Hãy là một người bạn tốt</h4>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li><strong>Tôn trọng:</strong> Đối xử với mọi người bằng sự tôn trọng, ngay cả khi bạn không đồng ý với họ. Các cuộc thảo luận văn minh là nền tảng của một cộng đồng mạnh mẽ.</li>
                            <li><strong>Thân thiện và tích cực:</strong> Sử dụng ngôn ngữ mang tính xây dựng, động viên và chia sẻ những điều tốt đẹp.</li>
                            <li><strong>Giúp đỡ:</strong> Nếu thấy ai đó đặt câu hỏi mà bạn biết câu trả lời, hãy chia sẻ kiến thức của mình một cách lịch sự.</li>
                            <li><strong>Báo cáo có trách nhiệm:</strong> Nếu bạn thấy nội dung vi phạm, hãy sử dụng các công cụ báo cáo hoặc liên hệ với chúng tôi thay vì tham gia vào các cuộc tranh cãi.</li>
                        </ul>
                    </div>
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="font-semibold text-lg text-foreground">Những hành vi không được chấp nhận:</h3>
               <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
                    <ThumbsDown className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-300">Những điều cần tránh</h4>
                         <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li><strong>Ngôn từ gây thù ghét và bắt nạt:</strong> Nghiêm cấm mọi hình thức tấn công cá nhân, xúc phạm, miệt thị, đe dọa hoặc các bình luận phân biệt đối xử dựa trên chủng tộc, tôn giáo, giới tính, ngoại hình...</li>
                            <li><strong>Thông tin sai lệch:</strong> Không đăng tải tin giả, thông tin chưa được kiểm chứng gây hoang mang hoặc ảnh hưởng tiêu cực đến người khác và nhà trường.</li>
                             <li><strong>Spam và quảng cáo:</strong> Không đăng tải các nội dung lặp đi lặp lại, các liên kết quảng cáo không liên quan.</li>
                            <li><strong>Nội dung không phù hợp:</strong> Không đăng tải nội dung bạo lực, khiêu dâm, hoặc bất hợp pháp theo quy định của pháp luật Việt Nam.</li>
                             <li><strong>Xâm phạm quyền riêng tư:</strong> Không đăng tải thông tin cá nhân của người khác (số điện thoại, địa chỉ, email...) mà không có sự cho phép của họ.</li>
                        </ul>
                    </div>
               </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">Hậu quả của việc vi phạm</h3>
              <p>Tùy thuộc vào mức độ nghiêm trọng, các hành vi vi phạm có thể dẫn đến việc nội dung bị xóa, tài khoản bị cảnh cáo hoặc cấm tương tác vĩnh viễn trên các nền tảng của Liên đội. Chúng tôi có toàn quyền thực hiện các hành động cần thiết để bảo vệ sự an toàn và văn minh của cộng đồng.</p>
               <p>Bằng việc tham gia vào website, bạn đồng ý tuân thủ các quy tắc này. Cảm ơn bạn đã chung tay xây dựng một "Nhà Xanh" trực tuyến thật tuyệt vời!</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
