"use client"

import { authors } from "@/lib/constants"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Image from "next/image"

interface AuthorBioProps {
    authorName: string;
}

export function AuthorBio({ authorName }: AuthorBioProps) {
    const author = authors[authorName];

    if (!author) {
        return null;
    }

    return (
        <Card className="bg-secondary/30 mt-8">
            <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                         <AvatarImage src={author.avatar} alt={author.name} />
                         <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider">Về tác giả</p>
                        <h3 className="text-xl font-bold font-headline mt-1">{author.name}</h3>
                        <p className="text-sm font-medium text-muted-foreground">{author.title}</p>
                        <p className="mt-2 text-sm text-foreground/80">{author.bio}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
