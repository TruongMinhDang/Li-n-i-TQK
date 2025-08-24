import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Gift, Handshake, Rss, Star } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Chúng Mình Là",
    description: "Tìm hiểu về lịch sử, sứ mệnh và tầm nhìn của Liên đội THCS Trần Quang Khải.",
    href: "/chung-minh-la",
  },
  {
    icon: <Rss className="h-8 w-8 text-destructive" />,
    title: "Hành Trình",
    description: "Khám phá các hoạt động, sự kiện và phong trào sôi nổi của chúng tôi.",
    href: "/hanh-trinh",
  },
  {
    icon: <Star className="h-8 w-8 text-warning" />,
    title: "Vườn Ươm",
    description: "Vinh danh những tấm gương đội viên tiêu biểu và các việc làm ý nghĩa.",
    href: "/vuon-uom",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-success" />,
    title: "Balo",
    description: "Kho tàng tài liệu, biểu mẫu và kiến thức dành cho đội viên.",
    href: "/balo",
  },
  {
    icon: <Calendar className="h-8 w-8 text-warning" />,
    title: "Lịch sự kiện",
    description: "Đừng bỏ lỡ bất kỳ sự kiện quan trọng nào của Liên đội.",
    href: "/lich-su-kien",
  },
  {
    icon: <Gift className="h-8 w-8 text-accent" />,
    title: "Gửi lời chúc",
    description: "Gửi những lời chúc tốt đẹp và ý nghĩa đến bạn bè và thầy cô.",
    href: "/gui-loi-chuc",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <section className="w-full pt-8 pb-12 text-center">
            <div className="container px-4 md:px-6">
                <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-amber-500 animate-jump" viewBox="0 0 24 24" fill="currentColor"><path d="M19.98 5.91A1 1 0 0 0 19 5h-1.35a7.42 7.42 0 0 0-1.34-3.13 1 1 0 1 0-1.62 1.15A5.5 5.5 0 0 1 15.65 5H9.37A5.5 5.5 0 0 1 10.3 3a1 1 0 1 0-1.62-1.19A7.41 7.41 0 0 0 7.35 5H6a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V7h5a1 1 0 0 0 .7-1.71 3.53 3.53 0 0 0-2.58-1.28L12 16H8a1 1 0 0 0 0 2h5a1 1 0 0 0 .89-.55l.29-.68.12-.29a1 1 0 0 0-.17-1.12L13.29 14H16a5 5 0 0 0 5-5V7h1a1 1 0 0 0 .98-1.09z"/></svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-wide leading-relaxed animated-hero-text">
                  “Đi Ta Đi Lên Nối Tiếp Bao Anh Hùng – Tiếng Kèn Vang Vang Giục Giã Thiếu Niên Nhi Đồng Tiến Theo Lá Cờ Đội Hồ Chí Minh Quang Vinh....”
                </h2>
            </div>
        </section>

      <section className="w-full py-12 md:py-16 lg:py-20 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text mb-4">
            Liên đội THCS Trần Quang Khải
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
            Nơi chắp cánh ước mơ, rèn luyện đội viên ưu tú.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/hanh-trinh">Khám phá hoạt động</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/lien-he">Liên hệ</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {feature.icon}
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={feature.href}>Xem chi tiết</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full pb-12 md:pb-24 lg:pb-32 bg-white/50 dark:bg-black/10 rounded-lg">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Điểm nhấn</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline gradient-text">Một góc sân trường</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sân trường không chỉ là nơi học tập, mà còn là nơi diễn ra vô vàn hoạt động ngoại khóa, là không gian để chúng em vui chơi, kết bạn và tạo nên những kỷ niệm đẹp đẽ của tuổi học trò.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Sân trường"
              data-ai-hint="school playground"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
