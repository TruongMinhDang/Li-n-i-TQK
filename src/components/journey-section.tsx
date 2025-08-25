
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { navLinks } from "@/lib/constants";
import { Button } from "./ui/button";

const journeyLinks = navLinks.find(link => link.href === '/hanh-trinh')?.subLinks || [];

const journeyItems = [
  { 
    ...journeyLinks[0],
    image: { src: "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/ChatGPT-Image-16_51_02-10-thg-5-2025.png?alt=media&token=95a695f2-17f5-4f52-a77b-6f6b405db004", hint: "ho chi minh with children" },
    description: "Năm điều Bác dạy khắc ghi\nChăm ngoan học giỏi, việc gì cũng xong.\nYêu nhà, yêu nước, đồng lòng\nĐội viên nhỏ tuổi mà lòng sắt son."
  },
  { 
    ...journeyLinks[1], 
    image: { src: "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/5-dieu-Bac-Ho-day-1024x1019.png?alt=media&token=18f73fee-fd4b-4aca-9b99-717201209b1d", hint: "students charity donation" },
    description: "Nghi thức vững, chi đội bền\nSao vàng rực rỡ dưới nền khăn tươi.\nCùng nhau kết sức, chung lời\nTruyền thống Đội vững đời đời sáng danh."
  },
  { 
    ...journeyLinks[2], 
    image: { src: "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/ChatGPT-Image-17_10_17-10-thg-5-2025.png?alt=media&token=7db2279e-1d26-44f3-8d59-37be9cf0d51d", hint: "youth union ceremony" },
    description: "Rèn thân, luyện chí mỗi ngày\nXứng vai cháu Bác – dựng xây mai này.\nTự hào đứng giữa hàng bay\nCờ hồng Đoàn gọi – vút ngay đường trường."
  },
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          Hành Trình Rèn Luyện & Trưởng Thành
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4"
        >
          Cuốn nhật ký ghi dấu những hoạt động rèn luyện, trưởng thành và cống hiến của đội viên Liên Đội Trần Quang Khải. Từ học tập, sinh hoạt Đội, đến những việc làm nhỏ vì cộng đồng – tất cả tạo nên một hành trình giàu ý nghĩa và tự hào.
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {journeyItems.map((item) => (
            <motion.div key={item.href} variants={itemVariants}>
              <Link href={item.href || '#'} className="block group h-full">
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 bg-secondary/30">
                  <CardHeader className="h-64 flex items-center justify-center">
                     <div className="bg-background p-2 pb-4 shadow-md rounded-md transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src={item.image.src}
                            alt={item.name}
                            data-ai-hint={item.image.hint}
                            width={300}
                            height={200}
                            className="w-full h-48 object-contain rounded-sm"
                        />
                     </div>
                  </CardHeader>
                  <CardContent className="flex-grow bg-card rounded-b-lg p-6 text-center">
                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                      {item.name}
                    </CardTitle>
                    <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed mt-4">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
