import { notFound } from 'next/navigation';
import { newsArticles } from '@/lib/constants';
import Image from 'next/image';
import { Calendar, User, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

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
  'su-kien-noi-bat': { name: 'Sự Kiện Nổi Bật', href: '/lich-su-kien' }, // Example, adjust if needed
};


export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }
  
  const categoryInfo = categoryMap[article.category] || { name: article.category, href: '#' };


  return (
    <article className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
          {article.title}
        </h1>
        <div className="flex justify-center items-center gap-6 mt-4 text-sm text-muted-foreground">
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
             <Tag className="h-4 w-4" />
            <Link href={categoryInfo.href} className="hover:text-primary transition-colors">
                {categoryInfo.name}
            </Link>
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
          {article.content}
      </div>
    </article>
  );
}
