import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Library, FolderKanban, FileText, BookOpen, BarChart2 } from "lucide-react";
import Image from "next/image";

const subCategories = [
  {
    icon: <Library className="h-8 w-8 text-primary" />,
    title: "Chiêu Minh Hội Quán",
    description: "Nơi giao lưu, học hỏi và chia sẻ kinh nghiệm của các thế hệ chỉ huy Đội.",
    href: "/balo/chieu-minh-hoi-quan",
  },
  {
    icon: <FolderKanban className="h-8 w-8 text-destructive" />,
    title: "Kế Hoạch",
    description: "Tổng hợp các kế hoạch, chương trình hành động của Liên đội.",
    href: "/balo/ke-hoach",
  },
  {
    icon: <FileText className="h-8 w-8 text-warning" />,
    title: "Tài Liệu",
    description: "Kho tài liệu, văn bản và biểu mẫu cần thiết cho hoạt động Đội.",
    href: "/balo/tai-lieu",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-success" />,
    title: "Kỷ Yếu",
    description: "Lưu giữ những khoảnh khắc, những kỷ niệm đẹp của một thời đội viên.",
    href: "/balo/ky-yeu",
  },
   {
    icon: <BarChart2 className="h-8 w-8 text-accent" />,
    title: "Infographic",
    description: "Những thông tin, kiến thức được trình bày một cách trực quan, sinh động.",
    href: "/balo/infographic",
  },
];

export default function BackpackPage() {
  return (
    <div className="space-y-12">
      <section className="relative py-20 md:py-32 rounded-xl overflow-hidden bg-amber-50 dark:bg-amber-950/20">
        <Image 
          src="https://placehold.co/1600x900.png"
          alt="Balo"
          data-ai-hint="books library knowledge"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-10"
        />
        <div className="container relative z-10 text-center">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text-orange mb-4">
              Balo
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Hành trang số với đầy đủ tài liệu, kế hoạch và kiến thức cần thiết cho mỗi đội viên.
            </p>
        </div>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subCategories.map((category) => (
             <Link key={category.title} href={category.href} className="block group">
                <Card className="h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="flex-row items-center gap-4 p-6">
                        <div className="bg-secondary p-4 rounded-full transition-colors duration-300 group-hover:bg-primary/10">
                           {category.icon}
                        </div>
                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0 p-6">
                        <p className="text-muted-foreground">{category.description}</p>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
