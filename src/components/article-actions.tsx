"use client";

import { useEffect } from 'react';
import { Button } from './ui/button';
import { Facebook, Twitter, Link as LinkIcon, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ZaloIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 21H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1z" />
        <path d="M12 11.5a4.5 4.5 0 00-4.5 4.5h9a4.5 4.5 0 00-4.5-4.5zM8 8a1 1 0 100-2 1 1 0 000 2z" />
        <path d="M14.5 16H17" />
    </svg>
);


interface ArticleActionsProps {
  articleUrl: string;
}

export function ArticleActions({ articleUrl }: ArticleActionsProps) {
  const { toast } = useToast();

  useEffect(() => {
    // This is to ensure the Facebook plugin re-parses the page when the URL changes on client-side navigation
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [articleUrl]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(articleUrl).then(() => {
      toast({
        title: "Đã sao chép!",
        description: "Liên kết bài viết đã được sao chép vào bộ nhớ tạm.",
      });
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Lỗi",
        description: "Không thể sao chép liên kết.",
        variant: "destructive",
      });
    });
  };

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}`;
  const zaloShareUrl = `https://sp.zalo.me/share_inline?url=${encodeURIComponent(articleUrl)}&is_show_widget=1`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(articleUrl)}`;

  return (
    <div className="space-y-4">
      {/* Share Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <h3 className="text-lg font-semibold">Chia sẻ bài viết:</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild className="group">
            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ lên Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-[#1877F2] transition-colors" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="group">
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ lên Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-[#1DA1F2] transition-colors" />
            </a>
          </Button>
           <Button variant="outline" size="icon" asChild className="group">
            <a href={zaloShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ qua Zalo">
              <ZaloIcon className="h-5 w-5 text-muted-foreground group-hover:text-[#0068FF] transition-colors" />
            </a>
          </Button>
           <Button variant="outline" size="icon" asChild className="group">
            <a href={telegramShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ qua Telegram">
              <Send className="h-5 w-5 text-muted-foreground group-hover:text-[#2AABEE] transition-colors" />
            </a>
          </Button>
          <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Sao chép liên kết" className="group">
            <LinkIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Add this to a global d.ts file or at the top of the file if not already present
declare global {
  interface Window {
    FB: any;
  }
}
