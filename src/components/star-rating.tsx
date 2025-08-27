
"use client";

import { useState, useEffect, useMemo } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { submitArticleRating } from '@/actions/article-interactions';
import { useToast } from '@/hooks/use-toast';

interface StarRatingProps {
  articleSlug: string;
  initialAverageRating: number;
  initialRatingCount: number;
  onRatingSubmitted: (newAverage: number, newCount: number) => void;
}

export function StarRating({
  articleSlug,
  initialAverageRating,
  initialRatingCount,
  onRatingSubmitted,
}: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [averageRating, setAverageRating] = useState(initialAverageRating);
  const [ratingCount, setRatingCount] = useState(initialRatingCount);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasRated, setHasRated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const ratedArticles = JSON.parse(localStorage.getItem('rated_articles') || '{}');
    if (ratedArticles[articleSlug]) {
      setHasRated(true);
      setRating(ratedArticles[articleSlug]);
    }
  }, [articleSlug]);

  const handleRatingSubmit = async (newRating: number) => {
    if (hasRated || isSubmitting) return;
    
    setIsSubmitting(true);
    setRating(newRating);
    
    const result = await submitArticleRating(articleSlug, newRating);

    if (result.success && result.averageRating !== undefined && result.ratingCount !== undefined) {
      setAverageRating(result.averageRating);
      setRatingCount(result.ratingCount);
      setHasRated(true);

      const ratedArticles = JSON.parse(localStorage.getItem('rated_articles') || '{}');
      ratedArticles[articleSlug] = newRating;
      localStorage.setItem('rated_articles', JSON.stringify(ratedArticles));
      
      onRatingSubmitted(result.averageRating, result.ratingCount);

      toast({
        title: "Cảm ơn bạn đã đánh giá!",
        description: `Bạn đã đánh giá bài viết này ${newRating} sao.`,
      });
    } else {
      setRating(0); // Reset rating on failure
      toast({
        variant: 'destructive',
        title: "Lỗi",
        description: result.error || "Không thể gửi đánh giá của bạn. Vui lòng thử lại.",
      });
    }
    setIsSubmitting(false);
  };

  const displayRating = useMemo(() => {
      if (hasRated) return rating;
      return hoverRating > 0 ? hoverRating : rating;
  }, [hasRated, hoverRating, rating]);
  
  const displayAverage = useMemo(() => hasRated ? averageRating : initialAverageRating, [hasRated, averageRating, initialAverageRating]);
  const displayCount = useMemo(() => hasRated ? ratingCount : initialRatingCount, [hasRated, ratingCount, initialRatingCount]);


  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="flex items-center"
        onMouseLeave={() => !hasRated && setHoverRating(0)}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              'h-6 w-6 cursor-pointer transition-colors duration-200',
              hasRated ? 'text-yellow-400' : 'text-gray-400',
              displayRating >= star ? 'fill-yellow-400 text-yellow-400' : 'fill-transparent',
              !hasRated && 'hover:text-yellow-400 hover:fill-yellow-400'
            )}
            onMouseEnter={() => !hasRated && setHoverRating(star)}
            onClick={() => handleRatingSubmit(star)}
          />
        ))}
      </div>
       <div className="text-xs text-muted-foreground flex items-center gap-1">
        {isSubmitting ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <>
            <span>{displayAverage.toFixed(1)}/5</span>
            <span>({displayCount.toLocaleString()} lượt)</span>
          </>
        )}
      </div>
    </div>
  );
}
