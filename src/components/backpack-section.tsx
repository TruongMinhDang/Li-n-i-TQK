"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { navLinks } from "@/lib/constants";

const backpackLinks = navLinks.find(link => link.href === '/balo')?.subLinks || [];

export function BackpackSection() {
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
          Balo Hành Trang Số
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4"
        >
          Tất cả tài liệu, kế hoạch, và kiến thức cần thiết được gói gọn trong chiếc balo số, sẵn sàng đồng hành cùng đội viên trên mọi chặng đường.
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {backpackLinks.map((item) => (
            <motion.div 
                key={item.href} 
                variants={itemVariants}
                className="lg:last-of-type:col-start-2"
            >
              <Link href={item.href || '#'} className="block group h-full">
                <Card className="h-full flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <CardHeader className="flex-row items-center gap-4">
                        <div className="bg-secondary p-4 rounded-full">
                           {item.icon}
                        </div>
                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow text-left">
                        {/* The description for these items is on the /balo page itself, so we'll leave this empty or add a generic one */}
                        <p className="text-muted-foreground">Truy cập để xem các tài liệu và thông tin chi tiết.</p>
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
