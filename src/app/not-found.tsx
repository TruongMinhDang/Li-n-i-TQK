
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, SearchX } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <div className="max-w-md w-full">
         <Image
            src="https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/404-illustration.png?alt=media&token=e85689e4-c361-4560-a232-a5d625e1136b"
            alt="404 Not Found"
            width={500}
            height={400}
            className="w-full h-auto"
            data-ai-hint="not found error"
        />
        <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text mt-8">
          Ối! Lạc Đường Rồi
        </h1>
        <p className="mx-auto max-w-sm text-muted-foreground md:text-lg mt-4">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. Đừng lo, hãy quay về Nhà Xanh nhé.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2" />
              Quay Về Trang Chủ
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
