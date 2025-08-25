
"use client";

import { Megaphone } from "lucide-react";
import { announcements } from "@/lib/constants";
import Link from "next/link";

export function AnnouncementTicker() {
    if (!announcements || announcements.length === 0) {
        return null;
    }

    const tickerContent = announcements.map(item => item.text).join(" ••• ");

    return (
        <div className="bg-primary/10 border-b border-primary/20">
            <div className="container mx-auto flex items-center h-10 overflow-hidden">
                <div className="flex-shrink-0 flex items-center pr-4">
                    <Megaphone className="h-5 w-5 text-primary" />
                    <span className="ml-2 font-semibold text-sm text-primary uppercase tracking-wider">Thông báo</span>
                </div>
                <div className="flex-grow relative h-full flex items-center">
                    <div className="absolute inset-0 flex items-center">
                        <p className="whitespace-nowrap text-sm font-medium text-foreground animate-scroll-left">
                            <Link href={announcements[0].href}>
                                <span className="hover:underline cursor-pointer">{tickerContent}</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
