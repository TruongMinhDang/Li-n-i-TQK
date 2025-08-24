import { School, Facebook, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <School className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Xây dựng và phát triển bởi Liên đội THCS Trần Quang Khải.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" target="_blank" rel="noreferrer">
            <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="mailto:contact@ldtqk.website">
            <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
