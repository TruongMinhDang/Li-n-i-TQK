
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

const heroText = [
  "Đi Ta Đi Lên", "Nối Tiếp Bao Anh Hùng",
  "Tiếng Kèn Vang Vang", "Giục Giã Thiếu Niên Nhi Đồng",
  "Tiến Theo Lá Cờ Đội", "Hồ Chí Minh Quang Vinh...."
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <section className="w-full pt-8 pb-12 text-center">
            <div className="container px-4 md:px-6">
                <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-destructive animate-pop-in"
                      viewBox="0 0 100 125"
                      fill="currentColor"
                      style={{ animationDelay: '0s' }}
                    >
                      <path d="M50 6.2c-12.9 0-23.4 10.5-23.4 23.4s10.5 23.4 23.4 23.4 23.4-10.5 23.4-23.4S62.9 6.2 50 6.2zm0 41.8c-10.2 0-18.4-8.2-18.4-18.4S39.8 11.2 50 11.2s18.4 8.2 18.4 18.4-8.2 18.4-18.4 18.4z" />
                      <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm25.9 83.4l-4.2-2.4c-1-3-2.4-5.8-4.3-8.4l-1.9 3.9c-2.1 4.3-4.9 8.2-8.4 11.4l-3.3 3.1-3.3-3.1c-3.4-3.2-6.2-7.1-8.4-11.4l-1.9-3.9c-1.9 2.6-3.3 5.4-4.3 8.4l-4.2 2.4c-2.4-5.3-3.7-11.1-3.7-17.1V29.6h3.7v36.8c0 9.2 3.1 17.8 8.4 24.3l.8-1.7c.9-1.9 1.9-3.7 3.1-5.4h11.9c1.2 1.7 2.2 3.5 3.1 5.4l.8 1.7c5.3-6.5 8.4-15.1 8.4-24.3V29.6h3.7v36.8c0 6-1.3 11.8-3.7 17z" />
                      <path d="M50 21.2c-4.6 0-8.4 3.8-8.4 8.4s3.8 8.4 8.4 8.4 8.4-3.8 8.4-8.4-3.8-8.4-8.4-8.4z" />
                    </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold tracking-wide leading-relaxed text-foreground font-headline space-x-2">
                  {heroText.map((word, index) => (
                    <span
                      key={index}
                      className="inline-block animate-pop-in"
                      style={{ animationDelay: `${(index + 1) * 0.15}s` }}
                    >
                      {word}
                    </span>
                  ))}
                </h2>
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
