"use client";

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { 
    Facebook, 
    Twitter, 
    Link as LinkIcon, 
    Send, 
    Eye, 
    Star 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { getAndIncrementArticleViews, toggleArticleLike } from '@/actions/article-interactions';
import { Skeleton } from './ui/skeleton';

const ZaloIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <title>Zalo</title>
        <path d="M16.63,13.621a2.374,2.374,0,0,1-2.372,2.372H8.163a.151.151,0,0,0-.151.151v.173a.9.9,0,0,0,.9.9h7.456a.45.45,0,0,1,.45.45v2.85a.45.45,0,0,1-.45.45H8.889a3.75,3.75,0,0,1-3.75-3.75V8.885a3.75,3.75,0,0,1,3.75-3.75h6.669a3.75,3.75,0,0,1,3.75,3.75v4.286a2.37,2.37,0,0,1-.9,1.81Zm-2.372-4.5a1.472,1.472,0,1,0-1.472-1.472A1.472,1.472,0,0,0,14.258,9.121Z"/>
    </svg>
);


interface ArticleActionsProps {
  articleUrl: string;
  articleSlug: string;
}

export function ArticleActions({ articleUrl, articleSlug }: ArticleActionsProps) {
  const { toast } = useToast();
  const [stats, setStats] = useState({ views: 0, likes: 0 });
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial stats and liked state
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const fetchedStats = await getAndIncrementArticleViews(articleSlug);
        setStats(fetchedStats);

        const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '{}');
        if (likedArticles[articleSlug]) {
          setIsLiked(true);
        }
      } catch (error) {
        console.error("Failed to fetch article stats:", error);
        // Set to 0 or some default on error
        setStats({ views: 1, likes: 0 });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
    
    // Re-parse Facebook comments plugin
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [articleSlug]);

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

  const handleLike = async () => {
      const newLikedState = !isLiked;
      setIsLiked(newLikedState);
      setStats(prev => ({ ...prev, likes: newLikedState ? prev.likes + 1 : prev.likes - 1 }));

      try {
        // Update localStorage
        const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '{}');
        if (newLikedState) {
            likedArticles[articleSlug] = true;
        } else {
            delete likedArticles[articleSlug];
        }
        localStorage.setItem('liked_articles', JSON.stringify(likedArticles));

        // Update Firestore
        await toggleArticleLike(articleSlug, newLikedState);
      } catch (error) {
         console.error("Failed to toggle like:", error);
         // Revert UI on error
         setIsLiked(!newLikedState);
         setStats(prev => ({ ...prev, likes: !newLikedState ? prev.likes + 1 : prev.likes - 1 }));
         toast({
            title: "Lỗi",
            description: "Không thể lưu lượt thích của bạn. Vui lòng thử lại.",
            variant: "destructive",
         });
      }
  };

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}`;
  const zaloShareUrl = `https://sp.zalo.me/share_inline?url=${encodeURIComponent(articleUrl)}&is_show_widget=1`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(articleUrl)}`;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-lg border bg-secondary/30">
        <div className="flex items-center gap-2">
            {isLoading ? (
                <>
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-16" />
                </>
            ) : (
                <>
                    <Badge variant="secondary" className="py-2 px-3">
                        <Eye className="h-4 w-4 mr-2" />
                        <span className="font-semibold">{stats.views.toLocaleString()}</span>
                        <span className="ml-1 hidden sm:inline">lượt xem</span>
                    </Badge>

                    <Button onClick={handleLike} variant={isLiked ? "default" : "outline"} size="sm" className="h-full">
                        <Star className={cn("h-4 w-4 mr-1.5", isLiked && "fill-current text-yellow-400")} />
                        {stats.likes}
                    </Button>
                </>
            )}
        </div>
        
        {/* Share Section */}
        <div className="flex items-center gap-1">
            <span className="text-sm font-semibold mr-2">Chia sẻ:</span>
            <Button variant="ghost" size="icon" asChild className="group hover:bg-transparent rounded-full h-8 w-8">
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ lên Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-[#1877F2] transition-colors" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="group hover:bg-transparent rounded-full h-8 w-8">
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ lên Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-[#1DA1F2] transition-colors" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="group hover:bg-transparent rounded-full h-8 w-8">
                <a href={zaloShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ qua Zalo">
                <div className="text-muted-foreground group-hover:text-[#0068FF] transition-colors">
                    <ZaloIcon />
                </div>
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="group hover:bg-transparent rounded-full h-8 w-8">
                <a href={telegramShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ qua Telegram">
                <Send className="h-5 w-5 text-muted-foreground group-hover:text-[#2AABEE] transition-colors" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Sao chép liên kết" className="group hover:bg-transparent rounded-full h-8 w-8">
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
