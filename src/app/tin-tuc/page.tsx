import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getArticles } from "@/actions/posts";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar, User } from "lucide-react";

export default async function AllNewsPage() {
  const articles = await getArticles();

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Chuyện Nhà Xanh
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Cập nhật những tin tức, hoạt động và câu chuyện mới nhất từ ngôi nhà chung Trần Quang Khải.
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link key={article.slug} href={`/tin-tuc/${article.slug}`} className="block group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image
                  src={article.image.src}
                  alt={article.title}
                  data-ai-hint={article.image.hint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col flex-grow">
                <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm line-clamp-3 flex-grow">
                  {article.description}
                </CardDescription>
                <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <time dateTime={article.date.toISOString()}>
                      {format(new Date(article.date), "dd/MM/yyyy", { locale: vi })}
                    </time>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
