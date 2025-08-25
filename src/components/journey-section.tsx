
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
    image: { src: "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/ket-nap-doan.png?alt=media&token=0b6754a6-e3d6-4448-932f-a95e7c37b775", hint: "students helping each other" },
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
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.name}
                      data-ai-hint={item.image.hint}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                   <CardContent className="flex-grow">
                    <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Khám Phá</Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
