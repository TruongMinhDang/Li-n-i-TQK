import { notFound } from 'next/navigation';
import { newsArticles } from '@/lib/constants';
import Image from 'next/image';
import { Calendar, User, Tag, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

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
};

function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

function parseContent(content: string) {
    // Simple parser: assumes paragraphs are separated by double newlines.
    // A more complex parser could handle markdown or other formats.
    return content.split('\n\n').map((paragraph, index) => {
        if (paragraph.startsWith('<blockquote>')) {
             return (
                <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                    {paragraph.replace('<blockquote>', '').replace('</blockquote>', '')}
                </blockquote>
            );
        }
        return <p key={index}>{paragraph}</p>
    });
}


export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }
  
  const categoryInfo = categoryMap[article.category] || { name: article.category, href: '#' };
  const readingTime = calculateReadingTime(article.content);
  const parsedContent = parseContent(article.content);

  return (
    <article className="max-w-4xl mx-auto py-8">
      <div className="space-y-4 mb-8">
        <Link href={categoryInfo.href}>
          <Badge variant="default">{categoryInfo.name}</Badge>
        </Link>
        <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
      </div>

      <Card className="overflow-hidden shadow-lg mb-8">
        <Image
          src={article.image.src}
          alt={article.title}
          data-ai-hint={article.image.hint}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </Card>
      
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:leading-relaxed prose-a:text-primary hover:prose-a:underline">
          <p className="lead text-xl italic text-muted-foreground border-l-4 border-primary/50 pl-4">{article.description}</p>
          {parsedContent}
      </div>
    </article>
  );
}
