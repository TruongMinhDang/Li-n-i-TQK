"use client";

import { useState } from 'react';
import { generateArticleAudio, type GenerateArticleAudioInput } from '@/ai/flows/tts';
import { Button } from './ui/button';
import { Loader2, PlayCircle, PauseCircle, AlertTriangle, Headphones, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface ArticleTTSPlayerProps {
  article: Omit<GenerateArticleAudioInput, 'content'> & { content: string };
}

export function ArticleTTSPlayer({ article }: ArticleTTSPlayerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePlay = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateArticleAudio(article);
      setAudioUrl(result.audioUrl);
      if (!result.isFromCache) {
         toast({
            title: "Tạo âm thanh thành công!",
            description: "Bấm nút phát trên trình nghe nhạc để bắt đầu.",
         });
      }
    } catch (err) {
      console.error("Failed to generate audio:", err);
      const errorMessage = err instanceof Error ? err.message : "Đã xảy ra lỗi không xác định.";
      setError(`Không thể tạo âm thanh. Lỗi: ${errorMessage}`);
      toast({
        variant: 'destructive',
        title: "Lỗi",
        description: "Không thể tạo hoặc tải file âm thanh. Vui lòng thử lại sau.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (audioUrl) {
    return (
      <div className="w-full my-8 p-4 border rounded-lg bg-secondary/50">
        <div className="flex items-center gap-4">
            <audio controls autoPlay className="w-full">
              <source src={audioUrl} type="audio/wav" />
              Trình duyệt của bạn không hỗ trợ phát âm thanh.
            </audio>
            <Button variant="outline" size="icon" asChild>
                <a href={audioUrl} download={`${article.slug}.wav`}>
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Tải về</span>
                </a>
            </Button>
        </div>
        <div className="text-center mt-2">
            <Button variant="link" size="sm" onClick={() => setAudioUrl(null)}>Đóng trình phát</Button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="my-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Lỗi</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="my-8">
      <Button onClick={handlePlay} disabled={isLoading} size="lg" className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Đang xử lý...
          </>
        ) : (
          <>
            <Headphones className="mr-2 h-5 w-5" />
            Nghe bài viết này
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Tính năng AI có thể cần một chút thời gian để tạo âm thanh cho lần đầu tiên.
      </p>
    </div>
  );
}
