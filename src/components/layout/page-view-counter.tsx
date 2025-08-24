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
                // Optionally, fetch the current views without incrementing on failure
                // const currentViews = await getViews(); 
                // setViews(currentViews);
            }
        };

        incrementViews();
    }, []);

    if (views === 0) {
        return (
            <div className="flex items-center gap-1.5 text-slate-400">
                <Eye className="h-3 w-3" />
                <span>Lượt xem trang: ...</span>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-1.5 text-slate-400">
            <Eye className="h-3 w-3" />
            <span>Lượt xem trang: {views}</span>
        </div>
    )
}
