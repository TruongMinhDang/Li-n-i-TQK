
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "./ui/carousel";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container px-4 md:px-6 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
        >
          Lời Chứng Thực
        </motion.h2>
        
        <motion.div variants={itemVariants} className="mt-12 max-w-3xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-background shadow-lg rounded-lg overflow-hidden border-l-4 border-emerald-500">
                      <CardContent className="p-8 text-left relative">
                        <Quote className="absolute top-4 left-4 h-12 w-12 text-emerald-100" />
                        <p className="relative z-10 text-muted-foreground text-base md:text-lg italic leading-relaxed ml-4 pl-12 border-l border-emerald-200">
                          {item.quote}
                        </p>
                        <div className="text-right mt-6">
                           <p className="font-semibold text-foreground font-headline text-lg">{item.author}</p>
                           <p className="text-sm text-muted-foreground">{item.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
                <Button onClick={scrollPrev} variant="outline" size="icon" className="rounded-full h-10 w-10">
                    <ChevronLeft className="h-5 w-5"/>
                    <span className="sr-only">Trước</span>
                </Button>
                <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => api?.scrollTo(i)}
                            className={cn(
                                "h-2 w-2 rounded-full bg-primary transition-all",
                                current - 1 === i ? "w-4 opacity-100" : "opacity-30"
                            )}
                        />
                    ))}
                </div>
                <Button onClick={scrollNext} variant="outline" size="icon" className="rounded-full h-10 w-10">
                    <ChevronRight className="h-5 w-5"/>
                    <span className="sr-only">Sau</span>
                </Button>
            </div>
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
}
