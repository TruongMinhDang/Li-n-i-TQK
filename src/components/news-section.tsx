
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { newsArticles } from "@/lib/constants";
import { format } from "date-fns";
import { vi } from 'date-fns/locale';
import { ChevronRight } from "lucide-react";

export function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const sortedArticles = [...newsArticles].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 6); // Show latest 6

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
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
        >
          Chuyện Nhà Xanh
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4"
        >
          Cập nhật những tin tức, hoạt động và câu chuyện mới nhất từ ngôi nhà chung Trần Quang Khải.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {sortedArticles.map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Link href={`/tin-tuc/${article.slug}`} className="block group h-full">
                       <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                        <CardHeader className="p-0">
                            <div className="overflow-hidden">
                                <Image
                                    src={article.image.src}
                                    alt={article.title}
                                    data-ai-hint={article.image.hint}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-grow text-left">
                            <p className="text-xs text-primary font-semibold mb-2">{format(article.date, "dd 'tháng' M, yyyy", { locale: vi })}</p>
                            <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors line-clamp-2">{article.title}</CardTitle>
                            <CardDescription className="mt-2 text-sm line-clamp-3">{article.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-12">
          <Button asChild size="lg" className="group">
            <Link href="/tin-tuc">
              Xem Tất Cả Tin Tức
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
