"use client";

import { useEffect } from 'react';
import { Button } from './ui/button';
import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

  return (
    <div className="space-y-8">
      {/* Share Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <h3 className="text-lg font-semibold">Chia sẻ bài viết:</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-[#1877F2]" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-[#1DA1F2]" />
            </a>
          </Button>
          <Button variant="outline" size="icon" onClick={copyToClipboard}>
            <LinkIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Comments Section */}
      <div>
        <h3 className="text-2xl font-headline font-bold mb-4 text-center">Bình luận</h3>
        <div className="fb-comments" data-href={articleUrl} data-width="100%" data-numposts="5"></div>
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
