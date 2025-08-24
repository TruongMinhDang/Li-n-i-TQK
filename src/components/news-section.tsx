
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";

const articles = [
  {
    title: "Lễ Khai Giảng Năm Học Mới",
    description: "Hòa chung không khí rộn ràng của cả nước, trường THCS Trần Quang Khải long trọng tổ chức Lễ Khai giảng năm học 2024-2025.",
    image: { src: "https://placehold.co/600x400.png", hint: "school opening ceremony" },
    href: "/lich-su-kien"
  },
  {
    title: "Hội Trăng Rằm Yêu Thương",
    description: "Chương trình Trung thu với nhiều hoạt động ý nghĩa đã mang đến cho các em đội viên một đêm hội đáng nhớ.",
    image: { src: "https://placehold.co/600x400.png", hint: "mid-autumn festival children" },
    href: "/lich-su-kien"
  },
  {
    title: "Đại Hội Liên Đội Nhiệm Kỳ Mới",
    description: "Đại hội đã diễn ra thành công tốt đẹp, bầu ra Ban chỉ huy Liên đội mới đầy nhiệt huyết và sáng tạo.",
    image: { src: "https://placehold.co/600x400.png", hint: "student council meeting" },
    href: "/hanh-trinh/xay-dung-doi-vung-manh"
  },
  {
    title: "Tấm Lòng Vàng 'Kế Hoạch Nhỏ'",
    description: "Phong trào thu gom giấy vụn đã nhận được sự hưởng ứng nhiệt tình, gây quỹ giúp đỡ nhiều bạn học sinh khó khăn.",
    image: { src: "https://placehold.co/600x400.png", hint: "recycling program kids" },
    href: "/hanh-trinh/lam-theo-loi-bac"
  },
  {
    title: "Ra Mắt Kênh Podcast 'Nhà Xanh Radio'",
    description: "Kênh phát thanh của Liên đội đã chính thức lên sóng, hứa hẹn mang đến nhiều nội dung hấp dẫn.",
    image: { src: "https://placehold.co/600x400.png", hint: "podcast microphone studio" },
    href: "/podcast"
  },
  {
    title: "Tuyên Dương 'Măng Non Tiêu Biểu'",
    description: "Vinh danh những tấm gương đội viên xuất sắc trong học tập và rèn luyện, tạo động lực phấn đấu cho toàn Liên đội.",
    image: { src: "https://placehold.co/600x400.png", hint: "student award ceremony" },
    href: "/vuon-uom/mang-non-tieu-bieu"
  },
  {
    title: "Hoạt Động Đền Ơn Đáp Nghĩa",
    description: "Liên đội đã tổ chức thăm và tặng quà các gia đình chính sách, thể hiện đạo lý 'Uống nước nhớ nguồn'.",
    image: { src: "https://placehold.co/600x400.png", hint: "students visiting veterans" },
    href: "/vuon-uom/cau-chuyen-dep"
  }
];

export function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
              {articles.map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Link href={article.href} className="block group h-full">
                       <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
                            <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">{article.title}</CardTitle>
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
      </div>
    </motion.section>
  );
}
