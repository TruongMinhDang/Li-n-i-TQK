"use client"

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { getAndIncrementViews } from "@/actions/page-views";

export default function PageViewCounter() {
    const [views, setViews] = useState<number | null>(null);

    useEffect(() => {
        // This function will only run on the client side
        const incrementAndFetchViews = async () => {
            try {
                // To avoid double-counting on fast refreshes in dev, we check a session flag.
                if (!sessionStorage.getItem('view_incremented')) {
                    const newViews = await getAndIncrementViews();
                    setViews(newViews);
                    sessionStorage.setItem('view_incremented', 'true');
                } else {
                    // If already incremented in this session, just fetch the current value
                    const currentViews = await getAndIncrementViews();
                    setViews(currentViews);
                }
            } catch (error) {
                console.error("Failed to get/increment page views:", error);
                setViews(0); // Show a fallback value on error
            }
        };

        incrementAndFetchViews();
    }, []);

    return (
        <div className="flex items-center gap-1.5 text-primary/80">
            <Eye className="h-3 w-3" />
            <span>
                Lượt xem trang: {views !== null ? views.toLocaleString() : "..."}
            </span>
        </div>
    );
}
