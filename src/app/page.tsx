
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Gift, Handshake, Rss, Star, Music } from 'lucide-react';
import Image from 'next/image';
import { VideoSection } from '@/components/video-section';
import { JourneySection } from '@/components/journey-section';
import { GardenSection } from '@/components/garden-section';
import { BackpackSection } from '@/components/backpack-section';
import { NewsSection } from '@/components/news-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { StatsSection } from '@/components/stats-section';
import { EventHighlightSection } from '@/components/event-highlight-section';

const DodoBirdIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M6.5,8.5c0,1.4-0.5,2.7-1.3,3.7c-0.2,0.3-0.3,0.6-0.2,0.9c0.1,0.3,0.4,0.5,0.7,0.6c0.1,0,0.2,0,0.3,0c0.3,0,0.6-0.1,0.8-0.4 c1.2-1.4,2-3.1,2-5c0-1.2-0.4-2.4-1.2-3.3C7.1,4.2,6.5,4,5.8,4C4.6,4,3.5,4.9,3.5,6.1c0,0.8,0.4,1.6,1.1,2.1C5,8.3,5.1,8.4,5.1,8.5 c0,0,0,0,0,0C5.1,8.5,6.5,8.5,6.5,8.5z" />
        <path d="M15.4,18.4c-0.1,0-0.2,0-0.3-0.1c-1.8-0.8-3.4-2-4.7-3.6c-0.8-1-1.3-2.1-1.6-3.3c-0.1-0.4,0.1-0.8,0.5-1 c0.4-0.1,0.8,0.1,1,0.5c0.2,0.9,0.6,1.8,1.2,2.6c1.1,1.4,2.5,2.4,4.1,3.1c0.4,0.2,0.6,0.6,0.4,1C16,18.2,15.7,18.4,15.4,18.4z" />
        <path d="M19.1,10.6c-0.9,0-1.8-0.2-2.6-0.6c-0.4-0.2-0.5-0.6-0.3-1c0.2-0.4,0.6-0.5,1-0.3c1.3,0.6,2.8,0.6,4.2,0 c0.4-0.2,0.8-0.1,1,0.3c0.2,0.4,0.1,0.8-0.3,1C21,10.3,20,10.6,19.1,10.6z" />
        <path d="M18.3,20c-0.1,0-0.3,0-0.4-0.1c-0.9-0.5-1.7-1.1-2.4-1.9c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0 c0.6,0.6,1.2,1.2,2,1.6c0.4,0.2,0.5,0.7,0.3,1C18.8,19.8,18.5,20,18.3,20z" />
        <path d="M14.4,21.8c-1.3,0-2.6-0.5-3.6-1.5c-1-1-1.5-2.3-1.5-3.6c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8c0,1,0.4,1.9,1.1,2.6 c0.7,0.7,1.6,1.1,2.6,1.1c0.4,0,0.8,0.3,0.8,0.8C15.2,21.5,14.8,21.8,14.4,21.8z" />
    </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
            <div className="container px-4 md:px-6">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text mb-4">
                    Liên đội THCS Trần Quang Khải
                </h1>
                <div className="flex flex-col items-center justify-center gap-2">
                    <DodoBirdIcon className="h-8 w-8 text-yellow-400" />
                    <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl font-medium leading-relaxed gradient-text-slogan">
                        “Đi Ta Đi Lên Nối Tiếp Bao Anh Hùng<Music className="inline-block h-5 w-5" />
                        – Tiếng Kèn Vang Vang Giục Giã Thiếu Niên Nhi Đồng<Music className="inline-block h-5 w-5" />
                        Tiến Theo Lá Cờ Đội Hồ Chí Minh Quang Vinh....”
                        <Music className="inline-block h-5 w-5" />
                    </p>
                </div>
            </div>
        </section>

      <VideoSection />

      <JourneySection />

      <GardenSection />

      <BackpackSection />

      <NewsSection />
      
      <TestimonialsSection />

      <StatsSection />

      <EventHighlightSection />
    </div>
  );
}
