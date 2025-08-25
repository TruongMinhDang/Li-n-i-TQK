"use client";

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { 
    Facebook, 
    Twitter, 
    Link as LinkIcon, 
    Send, 
    BarChart2, 
    Star 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';

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
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Simulate fetching initial data
    setViews(Math.floor(Math.random() * 1000) + 50);
    setLikes(Math.floor(Math.random() * 100) + 5);

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

  const handleLike = () => {
      setIsLiked(!isLiked);
      setLikes(prev => isLiked ? prev -1 : prev + 1);
  };

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}`;
  const zaloShareUrl = `https://sp.zalo.me/share_inline?url=${encodeURIComponent(articleUrl)}&is_show_widget=1`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(articleUrl)}`;

  return (
    <div className="space-y-4">
        {/* Post Views */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BarChart2 className="h-4 w-4" />
            <span>Lượt xem: {views.toLocaleString()}</span>
        </div>

        {/* Share Section */}
        <div className="flex items-center gap-4">
            <h3 className="text-sm font-semibold">Chia sẻ:</h3>
            <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" asChild className="group hover:bg-transparent">
                    <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ lên Facebook">
                    <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-[#1877F2] transition-colors" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="group hover:bg-transparent">
                    <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ lên Twitter">
                    <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-[#1DA1F2] transition-colors" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="group hover:bg-transparent">
                    <a href={zaloShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ qua Zalo">
                    <div className="text-muted-foreground group-hover:text-[#0068FF] transition-colors">
                        <ZaloIcon />
                    </div>
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="group hover:bg-transparent">
                    <a href={telegramShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ qua Telegram">
                    <Send className="h-5 w-5 text-muted-foreground group-hover:text-[#2AABEE] transition-colors" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Sao chép liên kết" className="group hover:bg-transparent">
                    <LinkIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Button>
            </div>
        </div>
        
        {/* Like Section */}
        <div className="space-y-2">
             <h3 className="text-sm font-semibold">Thích điều này:</h3>
             <div className="flex items-center gap-4">
                 <Button onClick={handleLike} variant={isLiked ? "default" : "outline"} size="sm">
                    <Star className={cn("h-4 w-4 mr-2", isLiked && "fill-current text-yellow-400")} />
                    {isLiked ? "Đã thích" : "Thích"}
                </Button>
                {likes > 0 && (
                    <div className="flex items-center -space-x-2">
                        {isLiked && (
                             <Avatar className="h-6 w-6 border-2 border-background">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>B</AvatarFallback>
                            </Avatar>
                        )}
                        <span className="pl-4 text-sm text-muted-foreground">
                            {isLiked ? `Bạn và ${likes -1} người khác` : `${likes} người`} thích bài này.
                        </span>
                    </div>
                )}
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
