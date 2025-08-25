"use client"

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { getAndIncrementViews } from "@/actions/page-views";


export default function PageViewCounter() {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrementViews = async () => {
            try {
                // We don't want to block rendering for this, so we'll do it async
                const newViews = await getAndIncrementViews();
                setViews(newViews);
            } catch (error) {
                console.error("Failed to increment page views:", error);
            }
        };

        // We only want to run this on the client after the page is visible
        incrementViews();
    }, []);

    if (views === 0) {
        return (
            <div className="flex items-center gap-1.5 text-primary/80">
                <Eye className="h-3 w-3" />
                <span>Lượt xem trang: ...</span>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-1.5 text-primary/80">
            <Eye className="h-3 w-3" />
            <span>Lượt xem trang: {views.toLocaleString()}</span>
        </div>
    )
}
