"use client";

import * as React from "react";
import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Library, CalendarCheck, Calendar, Trophy, Award, Flag, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: <Users className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary" />,
    value: 1300,
    title: "Đội Viên",
    description: "Năng động, tự tin & đoàn kết",
    color: "primary",
  },
  {
    icon: <Library className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary" />,
    value: 32,
    title: "Chi Đội",
    description: "Toàn trường vững mạnh",
    color: "primary",
  },
  {
    icon: <CalendarCheck className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary" />,
    value: 30,
    title: "Hoạt Động/Năm",
    description: "Đa dạng, phong phú & hấp dẫn",
    color: "primary",
  },
   {
    icon: <Flag className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary" />,
    value: 2,
    title: "Cờ Thi Đua Xuất Sắc",
    description: "Vinh danh tại cụm thi đua",
    color: "primary",
  },
  {
    icon: <Trophy className="h-10 w-10 text-warning transition-colors duration-300 group-hover:text-warning" />,
    value: 12,
    title: "Năm Liên Đội Mạnh Liên Tục",
    description: "Nỗ lực duy trì kết quả ổn định",
    color: "warning",
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary" />,
    value: 14,
    title: "Năm Hoạt Động",
    description: "Gìn giữ và phát huy truyền thống",
    color: "primary",
  },
  {
    icon: <Award className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary" />,
    value: 2,
    title: "Bằng Khen Thành Đoàn",
    description: "Ghi nhận đóng góp cấp Thành phố",
    color: "primary",
  },
   {
    icon: <Star className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary" />,
    value: 1,
    title: "Bằng Khen TW",
    description: "Khẳng định nỗ lực toàn diện",
    color: "primary",
  },
];

const cardColorVariants: { [key: string]: string } = {
  primary: "hover:border-primary",
  warning: "hover:border-warning border-warning",
};

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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
      <div className="container px-4 md:px-6">
        <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Những Con Số Biết Nói
            </h2>
        </motion.div>
        
        <motion.div 
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
            {stats.map((stat, index) => (
                <motion.div 
                    key={stat.title} 
                    variants={itemVariants}
                    className={cn(
                       (index === 3 || index === 4) && "lg:col-start-2 lg:col-end-4"
                    )}
                >
                    <Card className={cn(
                        "text-center h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border-transparent border-2 group",
                        cardColorVariants[stat.color] || "hover:border-primary"
                    )}>
                        <CardHeader className="items-center">
                            {React.cloneElement(stat.icon, { 
                                className: cn(
                                    stat.icon.props.className, 
                                    "text-muted-foreground", // Default color
                                    `group-hover:text-${stat.color}`
                                )
                            })}
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="text-5xl font-bold text-foreground">
                                {isInView && <CountUp end={stat.value} duration={2.5} separator="." />}
                            </div>
                            <CardTitle className="text-xl font-headline">{stat.title}</CardTitle>
                            <p className="text-muted-foreground text-sm">{stat.description}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
