import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
    {
        question: "Làm thế nào để tham gia vào các hoạt động của Liên đội?",
        answer: "Bạn có thể theo dõi trang 'Lịch sự kiện' trên website để cập nhật các hoạt động sắp diễn ra. Ngoài ra, hãy liên hệ với giáo viên Tổng phụ trách Đội hoặc Ban chỉ huy Chi đội của bạn để biết thêm chi tiết và đăng ký tham gia."
    },
    {
        question: "Liên đội có những câu lạc bộ nào?",
        answer: "Hiện tại, Liên đội đang có các CLB như CLB Học thuật, CLB Văn nghệ, CLB Thể thao và CLB Sáng tạo. Chúng tôi luôn khuyến khích các bạn đội viên đề xuất và thành lập thêm nhiều CLB mới phù hợp với sở thích và năng khiếu của mình."
    },
    {
        question: "Tiêu chuẩn để trở thành đội viên ưu tú là gì?",
        answer: "Để trở thành đội viên ưu tú, bạn cần có thành tích học tập tốt, đạo đức tốt, tích cực tham gia các phong trào của Đội và của trường, và là một tấm gương sáng cho các đội viên khác noi theo."
    },
     {
        question: "Trang 'Balo' chứa những thông tin gì?",
        answer: "Trang 'Balo' là kho tài nguyên số của Liên đội, nơi cung cấp các tài liệu học tập, văn bản hướng dẫn của Đội, các biểu mẫu cần thiết, kế hoạch hoạt động và cả những kỷ yếu, infographic để các bạn tham khảo và sử dụng."
    }
]

export default function FaqPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Hỏi Đáp Thường Gặp (FAQ)
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Những câu hỏi bạn quan tâm về hoạt động của Liên đội.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                 <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                        <div className="flex items-center gap-3">
                           <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                           <span>{item.question}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pl-10">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </section>
    </div>
  );
}
