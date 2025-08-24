
"use client";

import { motion } from "framer-motion";
import { Cake, Star, Users, ListChecks, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    date: "15/05/2025",
    title: "Kỷ Niệm 84 Năm Ngày Thành Lập Đội TNTP Hồ Chí Minh (15/5/1941 – 15/5/2025)",
    description: "Chào mừng ngày truyền thống vẻ vang của Đội!",
    icon: Cake,
    color: "red",
  },
  {
    date: "19/05/2025",
    title: "Kỷ Niệm 135 Năm Sinh Chủ Tịch Hồ Chí Minh – Hội Thu Heo Đất",
    description: "18g00: Chung Kết Kể Chuyện Bác Hồ",
    icon: Star,
    color: "yellow",
  },
  {
    date: "25/05/2025",
    title: "Họp PHHS Khối 6, 7, 8",
    description: "",
    icon: Users,
    color: "blue",
  },
  {
    date: "26/05/2025",
    title: "Tổng Kết Lớp",
    description: "",
    icon: ListChecks,
    color: "green",
  },
  {
    date: "27/05/2025",
    title: "Bế Giảng & Lễ Tri Ân Trưởng Thành Khối 9",
    description: "",
    icon: GraduationCap,
    color: "purple",
  },
];

const colorClasses = {
  red: {
    border: "border-l-red-400",
    bg: "bg-gradient-to-r from-red-50 to-white",
    iconBg: "bg-red-100",
    iconText: "text-red-500",
    dateText: "text-red-600",
  },
  yellow: {
    border: "border-l-yellow-400",
    bg: "bg-gradient-to-r from-yellow-50 to-white",
    iconBg: "bg-yellow-100",
    iconText: "text-yellow-500",
    dateText: "text-yellow-600",
  },
  blue: {
    border: "border-l-blue-400",
    bg: "bg-gradient-to-r from-blue-50 to-white",
    iconBg: "bg-blue-100",
    iconText: "text-blue-500",
    dateText: "text-blue-600",
  },
  green: {
    border: "border-l-green-400",
    bg: "bg-gradient-to-r from-green-50 to-white",
    iconBg: "bg-green-100",
    iconText: "text-green-500",
    dateText: "text-green-600",
  },
  purple: {
    border: "border-l-purple-400",
    bg: "bg-gradient-to-r from-purple-50 to-white",
    iconBg: "bg-purple-100",
    iconText: "text-purple-500",
    dateText: "text-purple-600",
  },
};

export default function EventsPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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
            duration: 0.5,
            ease: "easeOut",
        },
        },
    };


  return (
    <div className="space-y-12">
      <section className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text"
        >
          Lịch Sự Kiện
        </motion.h1>
      </section>

      <motion.section 
        className="max-w-4xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event, index) => {
          const classes = colorClasses[event.color as keyof typeof colorClasses] || colorClasses.blue;
          const Icon = event.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.2 }}
              className={cn("p-4 rounded-lg flex items-center gap-6 border-l-4", classes.border, classes.bg)}
            >
              <div className={cn("p-3 rounded-lg", classes.iconBg)}>
                <Icon className={cn("h-8 w-8", classes.iconText)} />
              </div>
              <div className="flex-grow">
                <p className={cn("font-bold", classes.dateText)}>{event.date}</p>
                <h3 className="font-semibold text-foreground mt-1">{event.title}</h3>
                {event.description && <p className="text-sm text-muted-foreground mt-1">{event.description}</p>}
              </div>
            </motion.div>
          );
        })}
      </motion.section>
    </div>
  );
}
