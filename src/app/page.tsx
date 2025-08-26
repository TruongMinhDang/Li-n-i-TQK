
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Gift, Handshake, Rss, Star, Music, Award } from 'lucide-react';
import Image from 'next/image';
import { VideoSection } from '@/components/video-section';
import { JourneySection } from '@/components/journey-section';
import { GardenSection } from '@/components/garden-section';
import { BackpackSection } from '@/components/backpack-section';
import { NewsSection } from '@/components/news-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { StatsSection } from '@/components/stats-section';
import { EventHighlightSection } from '@/components/event-highlight-section';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
            <div className="container px-4 md:px-6">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text mb-4">
                    Liên đội THCS Trần Quang Khải
                </h1>
                <div className="flex flex-col items-center justify-center gap-2">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl font-medium leading-relaxed">
                        <span className="gradient-text-slogan">“Đi Ta Đi Lên Nối Tiếp Bao Anh Hùng</span><Music className="inline-block h-5 w-5 text-destructive" />
                        <span className="gradient-text-slogan">– Tiếng Kèn Vang Vang Giục Giã Thiếu Niên Nhi Đồng</span><Music className="inline-block h-5 w-5 text-destructive" />
                        <span className="gradient-text-slogan"> Tiến Theo Lá Cờ Đội Hồ Chí Minh Quang Vinh....”</span>
                        <Music className="inline-block h-5 w-5 text-destructive" />
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
