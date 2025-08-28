"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PlayCircle } from "lucide-react";
import { VideoPlayer } from "./video-player";

const videoThumbnailUrl = "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/video-thumbnail.jpg?alt=media&token=8e9e1c3a-3c7b-4b1e-8e8e-8e9e1c3a3c7b";
const videoUrl = "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/Intro-LDTQK.mp4?alt=media&token=16c4f346-6819-455a-b286-a5d625d99f0e";

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

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
    <>
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
                  <div className="flex items-center gap-4">
                     <Button onClick={() => setIsPlayerOpen(true)} size="lg" className="hover:scale-105 transition-transform duration-300">
                        <PlayCircle className="mr-2"/>
                        Xem Video
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/chung-minh-la">Xem Thêm</Link>
                    </Button>
                  </div>
                  </motion.div>
                  <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={videoVariants}
                  onClick={() => setIsPlayerOpen(true)}
                  className="cursor-pointer group"
                  >
                      <div className="aspect-video overflow-hidden rounded-xl shadow-lg relative">
                          <Image
                              src={videoThumbnailUrl}
                              alt="Video giới thiệu Liên Đội Trần Quang Khải"
                              data-ai-hint="school students"
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <PlayCircle className="h-20 w-20 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                          </div>
                      </div>
                  </motion.div>
              </div>
        </div>
      </section>
      <VideoPlayer 
        isOpen={isPlayerOpen} 
        onClose={() => setIsPlayerOpen(false)} 
        videoUrl={videoUrl}
      />
    </>
  );
}
