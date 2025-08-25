import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { newsArticles } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function BuildingStrongTeamPage() {
  const categoryArticles = newsArticles.filter(
    (article) => article.category === "xay-dung-doi-vung-manh"
  );

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Xây Dựng Đội Vững Mạnh
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Các hoạt động rèn luyện kỹ năng, nghiệp vụ công tác Đội, nâng cao chất lượng đội viên.
        </p>
      </section>
      <section className="flex justify-center">
         <Card className="w-full max-w-4xl">
          <CardHeader>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Xây dựng đội vững mạnh"
              data-ai-hint="students team building"
              width={800}
              height={400}
              className="rounded-t-lg object-cover"
            />
            <CardTitle className="pt-4 font-headline text-2xl">Tập huấn Ban chỉ huy Liên - Chi đội</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Hoạt động tập huấn cho đội ngũ Ban chỉ huy Liên - Chi đội là hoạt động thường niên, có vai trò quan trọng trong việc bồi dưỡng, trang bị kiến thức, kỹ năng, nghiệp vụ công tác Đội.
            </p>
            <p>
              Qua các buổi tập huấn, các em được học về điều lệ Đội, nghi thức Đội, kỹ năng tổ chức trò chơi, sinh hoạt tập thể, góp phần xây dựng tổ chức Đội ngày càng vững mạnh.
            </p>
          </CardContent>
        </Card>
      </section>

        {categoryArticles.length > 0 && (
            <section className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-headline font-bold text-center mb-8">Bài viết liên quan</h2>
                <div className="grid gap-6">
                    {categoryArticles.map((article) => (
                        <Link key={article.slug} href={`/tin-tuc/${article.slug}`} className="block group">
                            <Card className="flex flex-col md:flex-row items-center hover:bg-secondary/50 transition-colors">
                                <div className="p-4">
                                  <FileText className="h-8 w-8 text-primary"/>
                                </div>
                                <div className="flex-1 p-4">
                                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">{article.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.description}</p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        )}
    </div>
  );
}
