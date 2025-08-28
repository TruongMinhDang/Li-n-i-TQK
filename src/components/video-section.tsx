
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { VideoPlayer } from "./video-player";

const videoThumbnailUrl = "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/video-thumbnail.jpg?alt=media&token=2409a805-4740-4965-985c-43f9a74c4314";
const videoUrl = "https://drive.google.com/file/d/1hPt1wYMG7fmazyW4r926qE3EnwbTSrVl/preview";

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
  
  const openPlayer = () => setIsPlayerOpen(true);

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
                  <Button asChild size="lg" className="hover:scale-105 transition-transform duration-300">
                      <Link href="/chung-minh-la">Xem Thêm</Link>
                  </Button>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={videoVariants}
                  >
                    <div 
                      onClick={openPlayer}
                      className="p-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group aspect-video overflow-hidden relative"
                    >
                      <Image
                        src={videoThumbnailUrl}
                        alt="Video Giới thiệu Liên Đội Trần Quang Khải"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div 
                         className="absolute inset-0 flex items-center justify-center"
                      >
                        <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
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
