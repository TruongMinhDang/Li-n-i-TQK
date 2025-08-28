
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
    Download
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Slider } from './ui/slider';

interface ArticleTTSPlayerProps {
  article: Omit<GenerateArticleAudioInput, 'content'> & { content: string };
}

type PlayerStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

export function ArticleTTSPlayer({ article }: ArticleTTSPlayerProps) {
  const [status, setStatus] = useState<PlayerStatus>('idle');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => setDuration(audio.duration);
    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setCurrentTime(audio.duration);
      setStatus('idle');
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioUrl]);

  const handleGenerateAndPlay = async () => {
    if (audioUrl && audioRef.current) {
      audioRef.current.play();
      setStatus('playing');
      return;
    }

    setStatus('loading');
    setError(null);
    try {
      const result = await generateArticleAudio(article);
      setAudioUrl(result.audioUrl);
      if (!result.isFromCache) {
        toast({
          title: "Tạo âm thanh thành công!",
          description: "Âm thanh sẽ tự động phát.",
        });
      }
    } catch (err) {
      console.error("Failed to generate audio:", err);
      const errorMessage = err instanceof Error ? err.message : "Đã xảy ra lỗi không xác định.";
      setError(`Không thể tạo âm thanh. Lỗi: ${errorMessage}`);
      setStatus('error');
      toast({
        variant: 'destructive',
        title: "Lỗi",
        description: "Không thể tạo hoặc tải file âm thanh. Vui lòng thử lại sau.",
      });
    }
  };
  
  useEffect(() => {
    if (audioUrl && status === 'loading' && audioRef.current) {
        audioRef.current.play().then(() => {
            setStatus('playing');
        }).catch(e => {
            console.error("Autoplay was prevented:", e);
            setStatus('paused');
        });
    }
  }, [audioUrl, status]);

  const handlePlayPause = () => {
    if (status === 'playing' && audioRef.current) {
      audioRef.current.pause();
      setStatus('paused');
    } else if ((status === 'paused' || status === 'idle') && audioRef.current) {
      if (audioUrl) {
         audioRef.current.play();
         setStatus('playing');
      } else {
          handleGenerateAndPlay();
      }
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === Infinity) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (error) {
    return (
      <Alert variant="destructive" className="my-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Lỗi</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  const isPlayerActive = status === 'playing' || status === 'paused';

  return (
    <div className="flex items-center gap-2 p-2 my-6 border rounded-lg bg-secondary/50 w-full max-w-sm">
      <audio ref={audioRef} src={audioUrl || ''} preload="metadata" />

      <Button onClick={handlePlayPause} variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0" disabled={status === 'loading'}>
        {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 
         status === 'playing' ? <Pause className="h-4 w-4" /> : 
         <Play className="h-4 w-4" />}
      </Button>

      <div className="flex flex-col flex-grow justify-center gap-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">Nghe đọc bài</span>
          <a 
            href={audioUrl || '#'} 
            download={`${article.slug}.wav`} 
            className={!audioUrl ? 'pointer-events-none opacity-50' : ''}
            aria-disabled={!audioUrl}
            tabIndex={!audioUrl ? -1 : undefined}
          >
            <Download className="h-3 w-3 text-muted-foreground hover:text-foreground" />
          </a>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-xs font-mono tabular-nums text-muted-foreground w-9">{formatTime(currentTime)}</span>
           <Slider
              value={[currentTime]}
              max={duration || 1}
              step={1}
              onValueChange={handleSeek}
              disabled={!isPlayerActive}
              className="flex-grow h-1"
            />
           <span className="text-xs font-mono tabular-nums text-muted-foreground w-9">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
