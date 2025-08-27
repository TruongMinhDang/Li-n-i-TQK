import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const subCategories = [
  {
    icon: <BookOpen className="h-8 w-8 text-success" />,
    title: "Mỗi Tuần Một Câu Chuyện Đẹp",
    description: "Lan tỏa những hành động đẹp, những câu chuyện ý nghĩa và những tấm gương người tốt việc tốt.",
    href: "/vuon-uom/cau-chuyen-dep",
    image: { src: "https://placehold.co/600x400.png", hint: "helping others" },
  },
  {
    icon: <Star className="h-8 w-8 text-warning" />,
    title: "Măng Non Tiêu Biểu",
    description: "Vinh danh những tấm gương đội viên xuất sắc trong học tập, rèn luyện và các hoạt động phong trào.",
    href: "/vuon-uom/mang-non-tieu-bieu",
    image: { src: "https://placehold.co/600x400.png", hint: "students award ceremony" },
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
    title: "Triển lãm chuyên đề",
    description: "Thư viện hình ảnh các hoạt động, mô hình và thành tích nổi bật của Liên đội.",
    href: "/vuon-uom/trien-lam-chuyen-de",
    image: { src: "https://placehold.co/600x400.png", hint: "photo gallery exhibit" },
  },
];

export default function GardenPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Vườn Ươm
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Nơi vinh danh những bông hoa đẹp, những tấm gương sáng và những việc làm tốt của Liên đội.
        </p>
      </section>

      <section>
        <div className="bg-card p-8 rounded-lg shadow-inner">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
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