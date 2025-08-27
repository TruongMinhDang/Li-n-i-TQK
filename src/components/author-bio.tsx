"use client"

import { authors } from "@/lib/constants"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface AuthorBioProps {
    authorName: string;
}

export function AuthorBio({ authorName }: AuthorBioProps) {
    const author = authors[authorName];

    if (!author) {
        return null;
    }

    return (
        <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm font-semibold text-foreground">{author.name}</p>
                <p className="text-xs text-muted-foreground">{author.title}</p>
            </div>
        </div>
    )
}
