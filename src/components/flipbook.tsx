"use client";

import React, { useCallback, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageProps {
  src: string;
  hint: string;
}

interface FlipbookProps {
  pages: PageProps[];
}

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode; number: number }>(
  ({ children, number }, ref) => {
    return (
      <div 
        ref={ref} 
        className="bg-background border flex items-center justify-center overflow-hidden"
        data-density="hard"
      >
        <div className="w-full h-full relative">
          {children}
        </div>
         <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/50 px-1.5 py-0.5 rounded">
            {number}
        </div>
      </div>
    );
  }
);
Page.displayName = 'Page';

export function Flipbook({ pages }: FlipbookProps) {
  const book = useRef<any>();
  const [currentPage, setCurrentPage] = React.useState(0);

  const onPage = (e: any) => {
    setCurrentPage(e.data);
  };
  
  const handlePrev = useCallback(() => {
    book.current?.pageFlip().flipPrev();
  }, []);

  const handleNext = useCallback(() => {
    book.current?.pageFlip().flipNext();
  }, []);

  const totalPages = pages.length;

  return (
    <div className="w-full max-w-[calc(80vw)] md:max-w-4xl flex flex-col items-center gap-4">
        <div className="w-full h-auto aspect-[4/3] max-h-[70vh]">
            <HTMLFlipBook
                width={500}
                height={667}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={420}
                maxHeight={1333}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onPage}
                ref={book}
                className="shadow-2xl"
            >
                {pages.map((page, index) => (
                    <Page key={index} number={index + 1}>
                        <Image
                            src={page.src}
                            alt={`Page ${index + 1}`}
                            data-ai-hint={page.hint}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            priority={index < 2}
                        />
                    </Page>
                ))}
            </HTMLFlipBook>
        </div>
         <div className="flex items-center justify-center gap-4">
            <Button 
                onClick={handlePrev} 
                disabled={currentPage === 0}
                variant="outline"
                size="icon"
            >
                <ChevronLeft />
            </Button>
            <p className="text-sm text-muted-foreground font-medium">
                Trang {currentPage + 1} / {totalPages}
            </p>
            <Button 
                onClick={handleNext} 
                disabled={currentPage === totalPages - 1}
                variant="outline"
                size="icon"
            >
                <ChevronRight />
            </Button>
        </div>
    </div>
  );
}
