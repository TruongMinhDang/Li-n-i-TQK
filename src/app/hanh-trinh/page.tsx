import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    title: "Chiến dịch Mùa Hè Xanh",
    category: "Tình nguyện",
    date: "Tháng 6, 2024",
    description: "Các đội viên tham gia dọn dẹp vệ sinh môi trường, trồng cây xanh và tuyên truyền bảo vệ môi trường tại địa phương.",
    image: { src: "https://placehold.co/600x400.png", hint: "volunteers planting trees" },
    badgeColor: "bg-success/10 text-success border-success/20",
  },
  {
    title: "Hội trại 'Nối Vòng Tay Lớn'",
    category: "Kỹ năng",
    date: "Tháng 4, 2024",
    description: "Hội trại truyền thống với các hoạt động teambuilding, lửa trại và thi tài năng, giúp gắn kết các đội viên.",
    image: { src: "https://placehold.co/600x400.png", hint: "students campfire" },
    badgeColor: "bg-warning/10 text-warning border-warning/20",
  },
  {
    title: "Ngày hội 'Tiến bước lên Đoàn'",
    category: "Nghi thức",
    date: "Tháng 3, 2024",
    description: "Tổ chức lễ kết nạp Đoàn viên mới và các hoạt động ý nghĩa chào mừng ngày thành lập Đoàn TNCS Hồ Chí Minh.",
    image: { src: "https://placehold.co/600x400.png", hint: "student ceremony" },
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "Cuộc thi 'Sáng tạo Khoa học Kỹ thuật'",
    category: "Học thuật",
    date: "Tháng 1, 2024",
    description: "Sân chơi bổ ích để các đội viên thể hiện tài năng, niềm đam mê nghiên cứu và sáng tạo khoa học.",
    image: { src: "https://placehold.co/600x400.png", hint: "science fair project" },
    badgeColor: "bg-accent/10 text-accent border-accent/20",
  },
];

export default function JourneyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Hành Trình Hoạt Động
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Những dấu ấn đáng nhớ trên chặng đường phát triển của Liên đội.
        </p>
      </section>

      <section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {activities.map((activity) => (
            <Card key={activity.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src={activity.image.src}
                alt={activity.title}
                data-ai-hint={activity.image.hint}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className={activity.badgeColor}>{activity.category}</Badge>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <CardTitle className="font-headline pt-2">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
