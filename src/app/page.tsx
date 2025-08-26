
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
        <section className="w-full pt-8 pb-12 text-center">
            <div className="container px-4 md:px-6">
                <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="M19.98 5.91A1 1 0 0 0 19 5h-1.35a7.42 7.42 0 0 0-1.34-3.13 1 1 0 1 0-1.62 1.15A5.5 5.5 0 0 1 15.65 5H9.37A5.5 5.5 0 0 1 10.3 3a1 1 0 1 0-1.62-1.19A7.41 7.41 0 0 0 7.35 5H6a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V7h5a1 1 0 0 0 .7-1.71 3.53 3.53 0 0 0-2.58-1.28L12 16H8a1 1 0 0 0 0 2h5a1 1 0 0 0 .89-.55l.29-.68.12-.29a1 1 0 0 0-.17-1.12L13.29 14H16a5 5 0 0 0 5-5V7h1a1 1 0 0 0 .98-1.09z"/></svg>
                </div>
                <div className="text-xl md:text-2xl font-bold tracking-wide leading-relaxed text-foreground font-headline space-y-2">
                  <p className="typewriter w-max" style={{ animationDuration: '2.5s', animationTimingFunction: 'steps(35, end)' }}>Đi Ta Đi Lên Nối Tiếp Bao Anh Hùng</p>
                  <p className="typewriter w-max" style={{ animationDelay: '2.5s', animationDuration: '3.5s', animationTimingFunction: 'steps(46, end)' }}>Tiếng Kèn Vang Vang Giục Giã Thiếu Niên Nhi Đồng</p>
                  <p className="typewriter w-max" style={{ animationDelay: '6s', animationDuration: '3s', animationTimingFunction: 'steps(40, end)' }}>Tiến Theo Lá Cờ Đội Hồ Chí Minh Quang Vinh....</p>
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
