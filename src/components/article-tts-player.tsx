
"use client";

import { useState, useRef, useEffect } from 'react';
import { generateArticleAudio, type GenerateArticleAudioInput } from '@/ai/flows/tts';
import { Button } from './ui/button';
import { 
    Loader2, 
    Play, 
    Pause, 
    AlertTriangle, 
    Headphones, 
    Download,
    Volume2,
    VolumeX,
    RotateCcw
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Slider } from './ui/slider';

interface ArticleTTSPlayerProps {
  article: Omit<GenerateArticleAudioInput, 'content'> & { content: string };
}

const CustomAudioPlayer = ({ audioUrl, slug, onStop }: { audioUrl: string; slug: string; onStop: () => void }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(1);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        }

        const setAudioTime = () => setCurrentTime(audio.currentTime);

        audio.addEventListener('loadeddata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);

        audio.play().catch(e => console.error("Autoplay was prevented:", e));

        return () => {
            audio.removeEventListener('loadeddata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
        }
    }, []);
    
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    
     const handleSeek = (value: number[]) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value[0];
            setCurrentTime(value[0]);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="w-full my-8 p-4 border rounded-lg bg-secondary/50 space-y-4">
            <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} controls={false} />
            
            <div className="flex items-center gap-4">
                <Button onClick={togglePlayPause} size="icon" className="rounded-full">
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>

                <div className="flex-grow flex items-center gap-2">
                    <span className="text-xs font-mono">{formatTime(currentTime)}</span>
                    <Slider
                        value={[currentTime]}
                        max={duration || 100}
                        step={1}
                        onValueChange={handleSeek}
                    />
                    <span className="text-xs font-mono">{formatTime(duration)}</span>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                 <div className="flex items-center gap-2 w-1/2 md:w-1/3">
                    <Button onClick={() => setVolume(v => v > 0 ? 0 : 1)} size="icon" variant="ghost">
                        {volume > 0 ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                    </Button>
                    <Slider 
                        value={[volume]}
                        max={1}
                        step={0.1}
                        onValueChange={(value) => setVolume(value[0])}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" onClick={onStop}>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Dừng
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href={audioUrl} download={`${slug}.wav`}>
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Tải về</span>
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};


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
            description: "Trình phát nhạc sẽ tự động bắt đầu.",
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
    return <CustomAudioPlayer audioUrl={audioUrl} slug={article.slug} onStop={() => setAudioUrl(null)} />;
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
