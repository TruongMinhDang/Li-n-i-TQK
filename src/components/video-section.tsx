
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32">
        <div className="bg-secondary/30 rounded-lg p-8">
            <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariants}
                className="space-y-4"
                >
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    Chúng Mình Là...
                </h2>
                <p className="text-muted-foreground md:text-lg">
                    Liên Đội THCS Trần Quang Khải là tổ chức Đội Thiếu Niên Tiền Phong Hồ Chí Minh tại trường THCS Trần Quang Khải, quận Tân Phú. Được thành lập vào ngày 05/12/2011, Liên Đội hoạt động theo nguyên tắc tự nguyện, tự quản, dưới sự hướng dẫn của Hội Đồng Đội quận Tân Phú. 
                    <Link href="/hanh-trinh" className="font-semibold text-primary hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-amber-500 hover:bg-clip-text ml-1 transition-colors duration-300">
                        Khám phá các hoạt động và thành tích nổi bật của chúng tôi.
                    </Link>
                </p>
                <Button asChild size="lg" className="hover:scale-105 transition-transform duration-300">
                    <Link href="/chung-minh-la">Xem Thêm</Link>
                </Button>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={videoVariants}
                >
                  <div className="animated-gradient-frame p-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <iframe
                        className="w-full h-full"
                        src="https://drive.google.com/file/d/1hPt1wYMG7fmazyW4r926qE3EnwbTSrVl/preview"
                        title="Giới thiệu Liên Đội Trần Quang Khải"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
            </div>
      </div>
    </section>
  );
}
