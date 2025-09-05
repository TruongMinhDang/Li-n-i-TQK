import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Star, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { newsArticles } from "@/lib/constants";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar } from "lucide-react";


const subCategories = [
  {
    icon: <BookOpen className="h-8 w-8 text-success" />,
    title: "Mỗi Tuần Một Câu Chuyện Đẹp",
    description: "Lan tỏa những hành động đẹp, những câu chuyện ý nghĩa và những tấm gương người tốt việc tốt.",
    href: "/vuon-uom/cau-chuyen-dep",
    categorySlug: "cau-chuyen-dep",
  },
  {
    icon: <Star className="h-8 w-8 text-warning" />,
    title: "Măng Non Tiêu Biểu",
    description: "Vinh danh những tấm gương đội viên xuất sắc trong học tập, rèn luyện và các hoạt động phong trào.",
    href: "/vuon-uom/mang-non-tieu-bieu",
    categorySlug: "mang-non-tieu-bieu",
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
    title: "Triển lãm chuyên đề",
    description: "Thư viện hình ảnh các hoạt động, mô hình và thành tích nổi bật của Liên đội.",
    href: "/vuon-uom/trien-lam-chuyen-de",
    categorySlug: "trien-lam-chuyen-de",
  },
];

export default function GardenPage() {
  return (
    <div className="space-y-12">
      <section className="relative py-20 md:py-32 rounded-xl overflow-hidden bg-green-50 dark:bg-green-950/20">
        <Image 
          src="https://placehold.co/1600x900.png"
          alt="Vườn Ươm"
          data-ai-hint="garden leaves nature"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-10"
        />
        <div className="container relative z-10 text-center">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text-green mb-4">
              Vườn Ươm
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Nơi vinh danh những bông hoa đẹp, những tấm gương sáng và những việc làm tốt của Liên đội.
            </p>
        </div>
      </section>

      <section className="space-y-16">
        {subCategories.map((category) => {
          const articles = newsArticles
            .filter(a => a.category === category.categorySlug)
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 4);

          // "Triển lãm chuyên đề" is a gallery, not an article list, so we skip rendering articles for it.
          const isGallery = category.categorySlug === 'trien-lam-chuyen-de';

          return (
            <div key={category.href} className="space-y-6">
              <div className="text-center">
                <Link href={category.href}>
                  <h2 className="text-3xl font-headline font-bold tracking-tight inline-block group transition-all duration-300">
                    <span className="gradient-text-orange group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-destructive group-hover:to-warning">
                        {category.title}
                    </span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-destructive mx-auto"></span>
                  </h2>
                </Link>
                <p className="text-muted-foreground mt-2">{category.description}</p>
              </div>

              {isGallery ? (
                 <Card className="text-center py-8 bg-secondary/50">
                    <CardContent>
                      <p className="text-muted-foreground">Chuyên mục này là một thư viện hình ảnh. Hãy bấm vào tiêu đề để khám phá nhé!</p>
                    </CardContent>
                 </Card>
              ) : articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {articles.map(article => (
                    <Link key={article.slug} href={`/tin-tuc/${article.slug}`} className="block group">
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <CardHeader className="p-0">
                          <Image
                            src={article.image.src}
                            alt={article.title}
                            data-ai-hint={article.image.hint}
                            width={400}
                            height={250}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </CardHeader>
                        <CardContent className="p-4 flex flex-col flex-grow">
                          <CardTitle className="font-headline text-base group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                            {article.title}
                          </CardTitle>
                           <CardDescription className="mt-2 text-sm line-clamp-2 flex-grow">
                            {article.description}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground pt-4 border-t">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              <time dateTime={article.date.toISOString()}>
                                {format(article.date, "dd/MM/yyyy", { locale: vi })}
                              </time>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                 <Card className="text-center py-8">
                    <CardContent>
                      <p className="text-muted-foreground">Chưa có bài viết cho chuyên mục này. Quay lại sau nhé!</p>
                    </CardContent>
                 </Card>
              )}
            </div>
          )
        })}
      </section>
    </div>
  );
}
