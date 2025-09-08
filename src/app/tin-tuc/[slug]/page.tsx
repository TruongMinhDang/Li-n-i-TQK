
import { notFound } from 'next/navigation';
import { newsArticles } from '@/lib/constants';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArticleActions } from '@/components/article-actions';
import { Separator } from '@/components/ui/separator';
import { ArticleTTSPlayer } from '@/components/article-tts-player';
import { AuthorBio } from '@/components/author-bio';

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

const categoryMap: {[key: string]: {name: string, href: string}} = {
  'xay-dung-doi-vung-manh': { name: 'Xây Dựng Đội Vững Mạnh', href: '/hanh-trinh/xay-dung-doi-vung-manh' },
  'lam-theo-loi-bac': { name: 'Làm theo lời Bác', href: '/hanh-trinh/lam-theo-loi-bac' },
  'cung-tien-buoc-len-doan': { name: 'Cùng Tiến Bước Lên Đoàn', href: '/hanh-trinh/cung-tien-buoc-len-doan' },
  'cau-chuyen-dep': { name: 'Mỗi Tuần Một Câu Chuyện Đẹp', href: '/vuon-uom/cau-chuyen-dep' },
  'mang-non-tieu-bieu': { name: 'Măng Non Tiêu Biểu', href: '/vuon-uom/mang-non-tieu-bieu' },
  'su-kien-noi-bat': { name: 'Sự Kiện Nổi Bật', href: '/lich-su-kien' }, 
  'khong-gian-van-hoa-hcm': { name: 'Không Gian Văn Hóa Hồ Chí Minh', href: '/hanh-trinh/khong-gian-van-hoa-hcm' },
};

function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

function parseContent(content: string) {
    return content.split('\n\n').map((paragraph, index) => {
        if (paragraph.startsWith('<blockquote>')) {
             return (
                <blockquote key={index}>
                    {paragraph.replace('<blockquote>', '').replace('</blockquote>', '')}
                </blockquote>
            );
        }
        return <p key={index}>{paragraph}</p>
    });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const sortedArticles = [...newsArticles].sort((a, b) => b.date.getTime() - a.date.getTime());
  const articleIndex = sortedArticles.findIndex((p) => p.slug === params.slug);

  if (articleIndex === -1) {
    notFound();
  }

  const article = sortedArticles[articleIndex];
  const prevArticle = articleIndex < sortedArticles.length - 1 ? sortedArticles[articleIndex + 1] : null;
  const nextArticle = articleIndex > 0 ? sortedArticles[articleIndex - 1] : null;
  
  const relatedArticles = newsArticles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);

  const categoryInfo = categoryMap[article.category] || { name: article.category, href: '#' };
  const readingTime = calculateReadingTime(article.content);
  const parsedContent = parseContent(article.content);
  const fullUrl = `https://ldtqk.website/tin-tuc/${article.slug}`;

  const ttsArticleData = {
      slug: article.slug,
      title: article.title,
      author: article.author,
      content: article.content,
  };

  return (
    <article className="max-w-6xl mx-auto py-8 px-4 md:px-6">
      <header className="max-w-3xl mx-auto text-center mb-8">
        <Link href={categoryInfo.href}>
          <Badge variant="default" className="mb-4">{categoryInfo.name}</Badge>
        </Link>
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mt-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={article.date.toISOString()}>
              {format(article.date, "dd 'tháng' M, yyyy", { locale: vi })}
            </time>
          </div>
           <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readingTime} phút đọc</span>
          </div>
        </div>
      </header>

      <div className="my-8">
          <Image
            src={article.image.src}
            alt={article.title}
            data-ai-hint={article.image.hint}
            width={1600}
            height={900}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            priority
          />
          <figcaption className="text-center text-xs text-muted-foreground mt-2">Nguồn: {article.author}</figcaption>
      </div>

      <div className="grid grid-cols-12 gap-8 mt-12">
        <main className="col-span-12 lg:col-span-8">
            <div className="max-w-3xl mx-auto">
                 {/* Lead Paragraph */}
                <p className="lead text-xl/relaxed md:text-2xl/loose italic text-muted-foreground my-8">{article.description}</p>
                
                {/* TTS Player */}
                <ArticleTTSPlayer article={ttsArticleData} />
                
                {/* Main Content */}
                <div className="article-body">
                    {parsedContent}
                </div>
            </div>
        </main>

        <aside className="col-span-12 lg:col-span-4 lg:sticky top-24 self-start space-y-6">
             <ArticleActions articleUrl={fullUrl} articleSlug={article.slug} />
             <Card>
                <CardHeader>
                    <CardTitle className="text-base">Tác giả</CardTitle>
                </CardHeader>
                <CardContent>
                    <AuthorBio authorName={article.author} />
                </CardContent>
             </Card>
        </aside>
      </div>


      {/* Article Navigation & Related */}
      <div className="max-w-5xl mx-auto">
        {(prevArticle || nextArticle) && (
            <div className="flex flex-col sm:flex-row justify-between gap-8 my-12">
            {prevArticle ? (
                <Link href={`/tin-tuc/${prevArticle.slug}`} className="group flex-1">
                <Card className="p-4 h-full hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Bài viết trước đó</span>
                    </div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{prevArticle.title}</p>
                </Card>
                </Link>
            ) : <div className="flex-1"></div>}
            {nextArticle ? (
                <Link href={`/tin-tuc/${nextArticle.slug}`} className="group flex-1">
                <Card className="p-4 h-full hover:border-primary transition-colors">
                    <div className="flex items-center justify-end gap-2 text-muted-foreground mb-2">
                    <span>Bài viết kế tiếp</span>
                    <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-right line-clamp-2">{nextArticle.title}</p>
                </Card>
                </Link>
            ) : <div className="flex-1"></div>}
            </div>
        )}

        {relatedArticles.length > 0 && (
            <>
            <Separator className="my-8" />
            <div className="my-12">
                <h2 className="text-2xl font-headline font-bold mb-6 text-center">Bài Viết Liên Quan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((related) => (
                        <Link key={related.slug} href={`/tin-tuc/${related.slug}`} className="block group">
                            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                                <CardHeader className="p-0">
                                    <Image 
                                        src={related.image.src}
                                        alt={related.title}
                                        data-ai-hint={related.image.hint}
                                        width={400}
                                        height={250}
                                        className="w-full h-32 object-cover"
                                    />
                                </CardHeader>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                                        {related.title}
                                    </h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
            </>
        )}

        {/* Comments Section */}
        <div className="mt-12">
            <h3 className="text-2xl font-headline font-bold mb-4 text-center">Bình luận</h3>
            <Card className="p-2">
                <div className="fb-comments" data-href={fullUrl} data-width="100%" data-numposts="5"></div>
            </Card>
        </div>
      </div>
    </article>
  );
}
