"use client";

import { useEffect } from 'react';
import { Button } from './ui/button';
import { Facebook, Twitter, Link as LinkIcon, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ZaloIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <title>Zalo</title>
        <path d="M16.63,13.621a2.374,2.374,0,0,1-2.372,2.372H8.163a.151.151,0,0,0-.151.151v.173a.9.9,0,0,0,.9.9h7.456a.45.45,0,0,1,.45.45v2.85a.45.45,0,0,1-.45.45H8.889a3.75,3.75,0,0,1-3.75-3.75V8.885a3.75,3.75,0,0,1,3.75-3.75h6.669a3.75,3.75,0,0,1,3.75,3.75v4.286a2.37,2.37,0,0,1-.9,1.81Zm-2.372-4.5a1.472,1.472,0,1,0-1.472-1.472A1.472,1.472,0,0,0,14.258,9.121Z"/>
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
              <div className="text-muted-foreground group-hover:text-[#0068FF] transition-colors">
                <ZaloIcon />
              </div>
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
  );
}

// Add this to a global d.ts file or at the top of the file if not already present
declare global {
  interface Window {
    FB: any;
  }
}
