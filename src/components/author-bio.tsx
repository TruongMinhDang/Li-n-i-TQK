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
        <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12 border-2 border-background flex-shrink-0">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-base font-semibold text-foreground">{author.name}</p>
                <p className="text-sm text-muted-foreground italic mb-2">{author.title}</p>
                <p className="text-sm text-muted-foreground">{author.bio}</p>
            </div>
        </div>
    )
}
