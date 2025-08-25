
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Calendar, ChevronRight } from "lucide-react";

const upcomingEvents = [
  {
    date: "19/05",
    title: "Kỷ Niệm 135 Năm Sinh Chủ Tịch Hồ Chí Minh",
  },
  {
    date: "27/05",
    title: "Lễ Bế Giảng & Tri Ân Trưởng Thành Khối 9",
  },
  {
    date: "01/06",
    title: "Vui Tết Thiếu Nhi - Sinh Hoạt Hè",
  },
];

export function EventHighlightSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
      <div className="container px-4 md:px-6">
        <motion.div
          variants={itemVariants}
          className="bg-card shadow-lg rounded-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <div className="inline-block rounded-lg bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold">
                  Sự Kiện Sắp Tới
                </div>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
              >
                Đừng Bỏ Lỡ!
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground"
              >
                Cập nhật những hoạt động sôi nổi và các mốc thời gian quan trọng của Liên đội. Cùng chúng tôi tạo nên những kỷ niệm đáng nhớ!
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button asChild size="lg">
                  <Link href="/lich-su-kien">
                    Xem Toàn Bộ Lịch
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-md p-2 w-16 h-16">
                    <span className="text-2xl font-bold leading-none">{event.date.split('/')[0]}</span>
                    <span className="text-xs font-semibold">Th {event.date.split('/')[1]}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{event.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
