"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { navLinks } from "@/lib/constants";
import { Button } from "./ui/button";

const gardenLinks = navLinks.find(link => link.href === '/vuon-uom')?.subLinks || [];

const gardenItems = [
  { 
    ...gardenLinks[0],
    image: { src: "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/6-1024x1024.png?alt=media&token=74118beb-f33a-4401-9fa9-0178365ccf48", hint: "students helping elderly" },
    description: "Gieo từng việc nhỏ mỗi ngày,\nThành cây trái ngọt phủ đầy yêu thương.\nMột lời chào, ánh mắt thương,\nCũng như hoa nở bên đường dặm xa.\nGhi vào nhật ký chúng ta,\nLòng tốt kết lại như là sao rơi.\nVườn Đội lặng lẽ sáng ngời,\nTừ bao nghĩa cử giữa đời nhỏ xinh."
  },
  { 
    ...gardenLinks[1], 
    image: { src: "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/ChatGPT-Image-17_14_46-14-thg-5-2025.png?alt=media&token=5e96983b-c5b4-4e86-8c93-b9b757aeb492", hint: "student receiving award" },
    description: "Yêu quê, yêu nước sắt son,\nThương người như thể cội nguồn tổ tông.\nHọc chăm – rèn luyện thật lòng,\nChữ hay – nết thảo, chí hồng thẳng ngay.\nGiữ cho sạch sẽ mỗi ngày,\nSân trường rợp nắng, bàn tay dịu dàng.\nThật thà, dũng cảm vững vàng,\nKhiêm cung đứng giữa muôn vàn gió sương.\nÁo trắng khăn đỏ tinh hương,\nXứng danh cháu Bác, soi đường Đội ta."
  },
];

export function GardenSection() {
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
          Vườn Ươm Tài Năng
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4"
        >
          Nơi ghi lại từng hành động đẹp – những trang nhật ký của lòng tốt, viết nên bằng việc làm nhỏ bé nhưng đầy ý nghĩa.
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 mt-12"
        >
          {gardenItems.map((item) => (
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
                    <Button className="w-full">Xem Chi Tiết</Button>
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
