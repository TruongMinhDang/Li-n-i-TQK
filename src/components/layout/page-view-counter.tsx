"use client"

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PageViewCounter() {
    const [views, setViews] = useState(105);

    useEffect(() => {
        const interval = setInterval(() => {
            setViews(prevViews => prevViews + Math.floor(Math.random() * 3) + 1);
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-1.5 text-slate-400">
            <Eye className="h-3 w-3" />
            <span>Lượt xem trang: {views}</span>
        </div>
    )
}