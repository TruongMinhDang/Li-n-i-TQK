
"use client";

import { motion } from "framer-motion";
import { Cake, Star, Users, ListChecks, GraduationCap, Calendar as CalendarIcon, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { events as allEvents, type Event } from "@/lib/constants";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

const iconMap: { [key: string]: React.ElementType } = {
  default: CalendarIcon,
  birthday: Cake,
  celebration: Star,
  meeting: Users,
  summary: ListChecks,
  graduation: GraduationCap,
};

const colorClasses: { [key: string]: any } = {
  red: {
    border: "border-l-red-400",
    bg: "bg-gradient-to-r from-red-50 to-white dark:from-red-950/20 dark:to-transparent",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconText: "text-red-500",
    dateText: "text-red-600 dark:text-red-400",
  },
  yellow: {
    border: "border-l-yellow-400",
    bg: "bg-gradient-to-r from-yellow-50 to-white dark:from-yellow-950/20 dark:to-transparent",
    iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
    iconText: "text-yellow-500",
    dateText: "text-yellow-600 dark:text-yellow-400",
  },
  blue: {
    border: "border-l-blue-400",
    bg: "bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/20 dark:to-transparent",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconText: "text-blue-500",
    dateText: "text-blue-600 dark:text-blue-400",
  },
  green: {
    border: "border-l-green-400",
    bg: "bg-gradient-to-r from-green-50 to-white dark:from-green-950/20 dark:to-transparent",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconText: "text-green-500",
    dateText: "text-green-600 dark:text-green-400",
  },
  purple: {
    border: "border-l-purple-400",
    bg: "bg-gradient-to-r from-purple-50 to-white dark:from-purple-950/20 dark:to-transparent",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconText: "text-purple-500",
    dateText: "text-purple-600 dark:text-purple-400",
  },
};

export default function EventsPage() {
    // GMT+7
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));
    now.setHours(0, 0, 0, 0); // Start of the day

    const upcomingEvents = allEvents
        .filter(event => event.date >= now)
        .sort((a, b) => a.date.getTime() - b.date.getTime());

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
         <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4"
        >
            Cập nhật những hoạt động và sự kiện mới nhất. Các sự kiện đã qua sẽ được tự động ẩn đi.
        </motion.p>
      </section>

      <motion.section 
        className="max-w-4xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => {
                const classes = colorClasses[event.color] || colorClasses.blue;
                const Icon = iconMap[event.icon] || iconMap.default;
                const formattedDate = format(event.date, "dd/MM/yyyy", { locale: vi });

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
                        <p className={cn("font-bold", classes.dateText)}>{formattedDate}</p>
                        <h3 className="font-semibold text-foreground mt-1">{event.title}</h3>
                        {event.description && <p className="text-sm text-muted-foreground mt-1">{event.description}</p>}
                    </div>
                    </motion.div>
                );
            })
        ) : (
             <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg"
             >
                <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4"/>
                <h3 className="text-xl font-semibold text-foreground">Chưa có sự kiện mới</h3>
                <p className="text-muted-foreground mt-2">
                    Lịch sự kiện cho thời gian tới đang được cập nhật. Vui lòng quay lại sau!
                </p>
             </motion.div>
        )}
      </motion.section>
    </div>
  );
}
