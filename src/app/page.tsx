
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

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
            <div className="container px-4 md:px-6">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text mb-4">
                    Liên đội THCS Trần Quang Khải
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
                    Đi Ta Đi Lên Nối Tiếp Bao Anh Hùng– Tiếng Kèn Vang Vang Giục Giã Thiếu Niên Nhi Đồng Tiến Theo Lá Cờ Đội Hồ Chí Minh Quang Vinh....
                </p>
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
