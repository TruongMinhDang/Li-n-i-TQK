import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Handshake, Star, Building2 } from "lucide-react";
import Image from "next/image";

const subCategories = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Làm theo lời Bác",
    description: "Những câu chuyện và hoạt động học tập, làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
    href: "/hanh-trinh/lam-theo-loi-bac",
    image: { src: "https://placehold.co/600x400.png", hint: "students studying history" },
  },
  {
    icon: <Handshake className="h-8 w-8 text-destructive" />,
    title: "Xây Dựng Đội Vững Mạnh",
    description: "Các hoạt động rèn luyện kỹ năng, nghiệp vụ công tác Đội, nâng cao chất lượng đội viên.",
    href: "/hanh-trinh/xay-dung-doi-vung-manh",
    image: { src: "https://placehold.co/600x400.png", hint: "students team building" },
  },
  {
    icon: <Star className="h-8 w-8 text-warning" />,
    title: "Cùng Tiến Bước Lên Đoàn",
    description: "Hành trình phấn đấu của các đội viên ưu tú để được đứng vào hàng ngũ của Đoàn TNCS Hồ Chí Minh.",
    href: "/hanh-trinh/cung-tien-buoc-len-doan",
    image: { src: "https://placehold.co/600x400.png", hint: "youth union ceremony" },
  },
   {
    icon: <Building2 className="h-8 w-8 text-success" />,
    title: "Không Gian Văn Hóa Hồ Chí Minh",
    description: "Nơi học tập, lan tỏa tư tưởng, đạo đức và phong cách của Chủ tịch Hồ Chí Minh.",
    href: "/hanh-trinh/khong-gian-van-hoa-hcm",
    image: { src: "https://placehold.co/600x400.png", hint: "ho chi minh museum" },
  },
];

export default function JourneyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Hành Trình
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Khám phá các hoạt động, sự kiện và phong trào sôi nổi của Liên đội qua các chuyên mục.
        </p>
      </section>

      <section>
        <div className="bg-card p-8 rounded-lg shadow-inner">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {subCategories.map((category) => (
              <Link key={category.title} href={category.href} className="block group">
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className="relative">
                          <Image
                              src={category.image.src}
                              alt={category.title}
                              data-ai-hint={category.image.hint}
                              width={600}
                              height={400}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                           <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                      <CardHeader>
                          <div className="flex items-center gap-4">
                              <div className="bg-secondary p-3 rounded-full">
                                  {category.icon}
                              </div>
                              <CardTitle className="font-headline pt-2 text-xl group-hover:text-primary transition-colors">{category.title}</CardTitle>
                          </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{category.description}</p>
                      </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}