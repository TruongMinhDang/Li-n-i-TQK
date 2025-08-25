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
            <p className="text-sm text-muted-foreground pt-2">Cập nhật lần cuối: 25/08/2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">1. Phạm vi áp dụng và chấp nhận điều khoản</h3>
              <p><strong>1.1.</strong> Các Điều khoản này điều chỉnh việc truy cập và sử dụng website/dịch vụ trực tuyến của Liên đội THCS Trần Quang Khải (sau đây gọi là “Trang web” hoặc “Dịch vụ”).</p>
              <p><strong>1.2.</strong> Khi truy cập hoặc sử dụng Trang web, bạn (sau đây gọi là “Người dùng”) xác nhận đã đọc, hiểu và đồng ý bị ràng buộc bởi các Điều khoản này và Chính sách bảo mật của chúng tôi. Nếu không đồng ý, vui lòng ngừng sử dụng Trang web.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">2. Đối tượng sử dụng</h3>
              <p><strong>2.1.</strong> Trang web phục vụ mục đích thông tin, giáo dục và kết nối hoạt động Đội trong phạm vi nhà trường.</p>
              <p><strong>2.2.</strong> Đối với Người dùng là học sinh chưa đủ 18 tuổi, việc cung cấp thông tin cá nhân, hình ảnh hoặc tương tác trên Trang web cần có sự đồng ý của cha mẹ/người giám hộ theo quy định pháp luật hiện hành.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">3. Quyền sở hữu trí tuệ</h3>
              <p><strong>3.1.</strong> Toàn bộ nội dung trên Trang web (bao gồm nhưng không giới hạn: văn bản, đồ họa, logo, hình ảnh, video, biểu tượng, bố cục và các tài liệu khác, sau đây gọi chung là “Nội dung”) thuộc quyền sở hữu của Liên đội THCS Trần Quang Khải hoặc bên cấp phép; được bảo hộ theo pháp luật Việt Nam và điều ước quốc tế có liên quan.</p>
              <p><strong>3.2.</strong> Nghiêm cấm mọi hành vi sao chép, sửa đổi, phân phối, công bố, trưng bày hoặc khai thác Nội dung vì mục đích thương mại hoặc ngoài phạm vi cho phép mà không có chấp thuận bằng văn bản của chúng tôi.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">4. Nội dung do Người dùng tạo và giấy phép sử dụng</h3>
              <p><strong>4.1.</strong> Người dùng chịu trách nhiệm về tính hợp pháp, chính xác và bản quyền đối với mọi thông tin, hình ảnh, bài viết, bình luận hoặc dữ liệu gửi/đăng lên Trang web (gọi chung là “Nội dung do Người dùng tạo”).</p>
              <p><strong>4.2.</strong> Khi gửi Nội dung do Người dùng tạo, bạn trao cho chúng tôi một giấy phép không độc quyền, có thể chuyển giao, miễn tiền bản quyền, trên phạm vi toàn cầu để lưu trữ, hiển thị, tái hiện trên Trang web phục vụ hoạt động giáo dục—phi lợi nhuận của Liên đội.</p>
              <p><strong>4.3.</strong> Chúng tôi có quyền (nhưng không nghĩa vụ) xem xét, biên tập, từ chối hoặc gỡ bỏ Nội dung do Người dùng tạo nếu cho rằng vi phạm Điều khoản hoặc pháp luật.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">5. Hành vi bị cấm</h3>
              <p>Người dùng cam kết không thực hiện các hành vi sau:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>a) Đăng tải thông tin sai sự thật, gây hiểu lầm, xúc phạm danh dự, phỉ báng, đe dọa, kích động thù hằn, vi phạm thuần phong mỹ tục;</li>
                <li>b) Mạo danh cá nhân/tổ chức; xâm phạm quyền riêng tư, quyền hình ảnh, bí mật đời sống, dữ liệu cá nhân hoặc quyền sở hữu trí tuệ của bên thứ ba;</li>
                <li>c) Phát tán mã độc, virus, script gây gián đoạn Dịch vụ; can thiệp trái phép vào hệ thống;</li>
                <li>d) Thu thập, khai thác trái phép dữ liệu từ Trang web;</li>
                <li>đ) Bất kỳ hành vi nào vi phạm pháp luật hiện hành.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">6. Bảo vệ dữ liệu cá nhân và quyền riêng tư</h3>
              <p><strong>6.1.</strong> Việc thu thập, sử dụng, lưu trữ và chia sẻ dữ liệu cá nhân (nếu có) được thực hiện theo Chính sách bảo mật công bố trên Trang web.</p>
              <p><strong>6.2.</strong> Hình ảnh, video, thông tin nhận diện học sinh chỉ được đăng tải khi đáp ứng điều kiện pháp luật và hướng dẫn của nhà trường; phụ huynh/người giám hộ có quyền đề nghị chỉnh sửa hoặc gỡ bỏ nội dung liên quan đến con em mình theo quy trình liên hệ tại Mục 14.</p>
              <p><strong>6.3.</strong> Chúng tôi có thể sử dụng cookie/technologies tương tự để cải thiện trải nghiệm; Người dùng có thể điều chỉnh trong phần cài đặt trình duyệt.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">7. Liên kết và dịch vụ của bên thứ ba</h3>
              <p>Trang web có thể chứa liên kết tới website/dịch vụ của bên thứ ba. Các liên kết này chỉ nhằm mục đích tham khảo; chúng tôi không kiểm soát và không chịu trách nhiệm đối với nội dung, chính sách hoặc hành vi của bên thứ ba.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">8. Tính sẵn sàng của Dịch vụ</h3>
              <p><strong>8.1.</strong> Chúng tôi nỗ lực duy trì Dịch vụ an toàn, ổn định; tuy nhiên có thể tạm ngưng, hạn chế hoặc thay đổi (toàn bộ hoặc một phần) để bảo trì, cập nhật, theo yêu cầu quản lý hoặc vì sự kiện bất khả kháng.</p>
              <p><strong>8.2.</strong> Chúng tôi không bảo đảm Dịch vụ luôn không gián đoạn, không lỗi, hoặc tương thích với mọi thiết bị/trình duyệt.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">9. Tuyên bố miễn trừ</h3>
              <p>Thông tin trên Trang web được cung cấp vì mục đích giáo dục và tham khảo. Dù nỗ lực bảo đảm tính chính xác và cập nhật, chúng tôi không đưa ra bảo đảm về tính đầy đủ, chính xác, kịp thời của Nội dung; Người dùng tự chịu rủi ro khi sử dụng.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">10. Giới hạn trách nhiệm</h3>
              <p>Trong phạm vi tối đa luật cho phép, Liên đội THCS Trần Quang Khải và các cá nhân liên quan không chịu trách nhiệm đối với mọi thiệt hại trực tiếp/gián tiếp/phát sinh do hoặc liên quan đến việc sử dụng hoặc không thể sử dụng Trang web, kể cả khi đã được khuyến cáo về khả năng xảy ra thiệt hại.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">11. Bồi thường</h3>
              <p>Người dùng đồng ý tự chịu trách nhiệm và bồi thường cho chúng tôi khỏi mọi khiếu nại, yêu cầu, thiệt hại, chi phí (kể cả phí luật sư hợp lý) phát sinh từ việc bạn vi phạm Điều khoản hoặc quyền lợi hợp pháp của bên thứ ba.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">12. Tạm ngừng và chấm dứt</h3>
              <p>Chúng tôi có thể tạm ngừng hoặc chấm dứt quyền truy cập của Người dùng nếu phát hiện hoặc có cơ sở hợp lý cho rằng có hành vi vi phạm Điều khoản/Chính sách hoặc pháp luật; đồng thời có thể phối hợp cơ quan có thẩm quyền khi cần thiết.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">13. Sửa đổi Điều khoản</h3>
              <p>Chúng tôi có quyền sửa đổi các Điều khoản này bất kỳ lúc nào. Phiên bản cập nhật có hiệu lực kể từ thời điểm đăng tải trên Trang web, và việc bạn tiếp tục sử dụng sau thời điểm đó đồng nghĩa chấp nhận Điều khoản sửa đổi.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">14. Luật áp dụng và giải quyết tranh chấp</h3>
              <p><strong>14.1.</strong> Điều khoản này được điều chỉnh bởi pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.</p>
              <p><strong>14.2.</strong> Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng. Trường hợp không đạt được thỏa thuận trong vòng 30 ngày kể từ khi phát sinh tranh chấp, mỗi bên có quyền đưa vụ việc ra Tòa án có thẩm quyền tại nơi đặt trụ sở của Liên đội THCS Trần Quang Khải.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-foreground">15. Liên hệ</h3>
              <p>Mọi thắc mắc, yêu cầu về quyền riêng tư, dữ liệu cá nhân hoặc đề nghị gỡ/chỉnh sửa nội dung, vui lòng liên hệ:</p>
              <ul className="list-none space-y-1 pl-2">
                <li><strong>Đơn vị phụ trách:</strong> Liên đội THCS Trần Quang Khải</li>
                <li><strong>Địa chỉ:</strong> [Địa chỉ nhà trường]</li>
                <li><strong>Email:</strong> [Email liên hệ chính thức]</li>
                <li><strong>Điện thoại:</strong> [Số điện thoại]</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
