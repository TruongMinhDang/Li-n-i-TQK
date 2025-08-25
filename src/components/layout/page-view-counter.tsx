"use client"

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { getAndIncrementViews } from "@/actions/page-views";


export default function PageViewCounter() {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrementViews = async () => {
            try {
                const newViews = await getAndIncrementViews();
                setViews(newViews);
            } catch (error) {
                console.error("Failed to increment page views:", error);
                // In case of error, we can just show 0 or a placeholder
                setViews(0);
            }
        };
        incrementViews();
    }, []);

    return (
        <div className="flex items-center gap-1.5 text-primary/80">
            <Eye className="h-3 w-3" />
            <span>
                Lượt xem trang: {views > 0 ? views.toLocaleString() : "..."}
            </span>
        </div>
    )
}
