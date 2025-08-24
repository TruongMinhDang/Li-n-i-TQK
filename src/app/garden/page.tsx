import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Heart } from "lucide-react";

const outstandingMembers = [
  {
    name: "Nguyễn Văn An",
    class: "Lớp 9A1",
    achievement: "Giải Nhất cuộc thi Sáng tạo Khoa học Kỹ thuật cấp Thành phố.",
    deed: "Thường xuyên giúp đỡ các bạn học yếu trong lớp, là tấm gương về tinh thần tương thân tương ái.",
    avatar: { src: "https://placehold.co/100x100.png", hint: "male student portrait" },
  },
  {
    name: "Trần Thị Bình",
    class: "Lớp 8A2",
    achievement: "Chỉ huy Đội giỏi cấp Quận, đạt nhiều thành tích trong các hoạt động phong trào.",
    deed: "Tích cực tham gia các hoạt động tình nguyện, nhặt được của rơi trả lại người mất.",
    avatar: { src: "https://placehold.co/100x100.png", hint: "female student portrait" },
  },
  {
    name: "Lê Minh Cường",
    class: "Lớp 7A5",
    achievement: "Đạt danh hiệu 'Cháu ngoan Bác Hồ' cấp Thành phố.",
    deed: "Luôn chăm chỉ, lễ phép với thầy cô và là người con hiếu thảo trong gia đình.",
    avatar: { src: "https://placehold.co/100x100.png", hint: "young boy portrait" },
  },
  {
    name: "Phạm Thu Duyên",
    class: "Lớp 6A3",
    achievement: "Kiện tướng Kế hoạch nhỏ, đóng góp vượt chỉ tiêu trong phong trào.",
    deed: "Sáng lập câu lạc bộ 'Sách cho em', quyên góp sách cho các bạn vùng khó khăn.",
    avatar: { src: "https://placehold.co/100x100.png", hint: "young girl portrait" },
  },
];

export default function GardenPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Vườn Ươm Tài Năng
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Nơi vinh danh những bông hoa đẹp và những việc làm tốt của Liên đội.
        </p>
      </section>

      <section>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {outstandingMembers.map((member) => (
            <Card key={member.name} className="hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 border-2 border-primary">
                    <AvatarImage src={member.avatar.src} alt={member.name} data-ai-hint={member.avatar.hint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="font-headline">{member.name}</CardTitle>
                    <CardDescription>{member.class}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Thành tích nổi bật:</span> {member.achievement}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                     <span className="font-semibold text-foreground">Việc làm tốt:</span> {member.deed}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
