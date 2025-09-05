
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Handshake, Star, Building2, Calendar, User } from "lucide-react";
import Image from "next/image";
import { newsArticles } from "@/lib/constants";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

const subCategories = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Làm theo lời Bác",
    description: "Những câu chuyện và hoạt động học tập, làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
    href: "/hanh-trinh/lam-theo-loi-bac",
    categorySlug: "lam-theo-loi-bac",
  },
  {
    icon: <Handshake className="h-8 w-8 text-destructive" />,
    title: "Xây Dựng Đội Vững Mạnh",
    description: "Các hoạt động rèn luyện kỹ năng, nghiệp vụ công tác Đội, nâng cao chất lượng đội viên.",
    href: "/hanh-trinh/xay-dung-doi-vung-manh",
    categorySlug: "xay-dung-doi-vung-manh",
  },
  {
    icon: <Star className="h-8 w-8 text-warning" />,
    title: "Cùng Tiến Bước Lên Đoàn",
    description: "Hành trình phấn đấu của các đội viên ưu tú để được đứng vào hàng ngũ của Đoàn TNCS Hồ Chí Minh.",
    href: "/hanh-trinh/cung-tien-buoc-len-doan",
    categorySlug: "cung-tien-buoc-len-doan",
  },
   {
    icon: <Building2 className="h-8 w-8 text-success" />,
    title: "Không Gian Văn Hóa Hồ Chí Minh",
    description: "Nơi học tập, lan tỏa tư tưởng, đạo đức và phong cách của Chủ tịch Hồ Chí Minh.",
    href: "/hanh-trinh/khong-gian-van-hoa-hcm",
    categorySlug: "khong-gian-van-hoa-hcm", // Note: This category might not have articles yet
  },
];

const categoryMap: {[key: string]: string} = {
  'xay-dung-doi-vung-manh': 'Xây Dựng Đội Vững Mạnh',
  'lam-theo-loi-bac': 'Làm theo lời Bác',
  'cung-tien-buoc-len-doan': 'Cùng Tiến Bước Lên Đoàn',
  'su-kien-noi-bat': 'Sự Kiện Nổi Bật',
};

export default function JourneyPage() {
  return (
    <div className="space-y-12">
      <section className="relative py-20 md:py-32 rounded-xl overflow-hidden bg-blue-50 dark:bg-blue-950/20">
        <Image 
          src="https://placehold.co/1600x900.png"
          alt="Hành Trình"
          data-ai-hint="journey path abstract"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-10"
        />
        <div className="container relative z-10 text-center">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text mb-4">
              Hành Trình
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Khám phá các hoạt động, sự kiện và phong trào sôi nổi của Liên đội qua các chuyên mục.
            </p>
        </div>
      </section>

       <section className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <blockquote>
          <p>
            Hành trình của mỗi đội viên tại Liên đội THCS Trần Quang Khải là một chuỗi những trải nghiệm học tập, rèn luyện và trưởng thành. Đó là con đường tiếp thu tri thức, trau dồi đạo đức theo 5 điều Bác Hồ dạy, tham gia các hoạt động tập thể để xây dựng một tổ chức Đội vững mạnh, và không ngừng phấn đấu để trở thành những đoàn viên ưu tú trong tương lai.
          </p>
        </blockquote>
      </section>

      <section className="space-y-16">
        {subCategories.map((category) => {
          const articles = newsArticles
            .filter(a => a.category === category.categorySlug)
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 4);

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

              {articles.length > 0 ? (
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
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground pt-2 border-t">
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
