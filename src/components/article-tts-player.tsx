
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
    RotateCcw,
    StopCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Slider } from './ui/slider';
import { cn } from '@/lib/utils';
import { Card } from './ui/card';

interface ArticleTTSPlayerProps {
  article: Omit<GenerateArticleAudioInput, 'content'> & { content: string };
}

type PlayerStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'stopped' | 'error';

export function ArticleTTSPlayer({ article }: ArticleTTSPlayerProps) {
  const [status, setStatus] = useState<PlayerStatus>('idle');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(1);
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
      setStatus('stopped');
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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleGenerateAndPlay = async () => {
    if (audioUrl) {
      audioRef.current?.play();
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
          description: "Trình phát nhạc sẽ tự động bắt đầu.",
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
      if(audioUrl && status === 'loading'){
          const audio = audioRef.current;
          if(audio){
              audio.play().then(() => {
                  setStatus('playing');
              }).catch(e => {
                  console.error("Autoplay was prevented:", e);
                  setStatus('paused');
              });
          }
      }
  }, [audioUrl, status]);


  const handlePlay = () => {
    if (status === 'idle' || status === 'stopped') {
      handleGenerateAndPlay();
    } else if (status === 'paused') {
      audioRef.current?.play();
      setStatus('playing');
    }
  };
  
  const handlePause = () => {
      if (status === 'playing') {
          audioRef.current?.pause();
          setStatus('paused');
      }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setStatus('stopped');
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

  const isPlayerActive = status === 'playing' || status === 'paused' || status === 'loading';

  return (
    <Card className="w-full my-8 p-4 rounded-lg bg-secondary/30 shadow-lg space-y-4">
      <audio ref={audioRef} src={audioUrl || ''} controls={false} preload="metadata" />

      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        {status === 'playing' ? (
             <Button onClick={handlePause} size="icon" className="rounded-full flex-shrink-0 bg-primary/80 hover:bg-primary h-12 w-12">
                 <Pause className="h-6 w-6 fill-current" />
             </Button>
        ) : (
            <Button onClick={handlePlay} size="icon" className="rounded-full flex-shrink-0 bg-primary/80 hover:bg-primary h-12 w-12" disabled={status === 'loading'}>
                {status === 'loading' ? <Loader2 className="h-6 w-6 animate-spin" /> : <Play className="h-6 w-6 fill-current" />}
            </Button>
        )}

        {/* Title and Scrubber */}
        <div className="flex-grow space-y-2">
            <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-semibold text-foreground truncate">Nghe bài viết</p>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs font-mono tabular-nums text-muted-foreground">{formatTime(currentTime)}</span>
                <Slider
                    value={[currentTime]}
                    max={duration || 1}
                    step={1}
                    onValueChange={handleSeek}
                    disabled={!isPlayerActive}
                    className="flex-grow"
                />
                <span className="text-xs font-mono tabular-nums text-muted-foreground">{formatTime(duration)}</span>
            </div>
        </div>

         {/* Stop Button */}
        <Button onClick={handleStop} size="icon" variant="ghost" className="rounded-full flex-shrink-0" disabled={!isPlayerActive}>
            <StopCircle className="h-6 w-6" />
        </Button>
      </div>

       {/* Volume and Download Controls */}
       <div className="flex items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 w-full max-w-[120px]">
                <Button onClick={() => setVolume(v => v > 0 ? 0 : 1)} size="icon" variant="ghost" className="rounded-full h-8 w-8">
                    {volume > 0 ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                </Button>
                <Slider
                    value={[volume]}
                    max={1}
                    step={0.1}
                    onValueChange={(value) => setVolume(value[0])}
                    className="flex-grow"
                />
            </div>
            <Button variant="ghost" size="icon" asChild className="rounded-full h-8 w-8" disabled={!audioUrl}>
                <a href={audioUrl || '#'} download={`${article.slug}.wav`}>
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Tải về</span>
                </a>
            </Button>
       </div>

    </Card>
  );
}
