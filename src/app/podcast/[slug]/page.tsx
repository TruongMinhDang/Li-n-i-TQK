import { notFound } from "next/navigation";
import Image from "next/image";
import { podcasts } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// ----- BẮT ĐẦU SỬA ĐỔI (LẦN 2) -----

// Tâu bệ hạ, chúng ta định nghĩa một kiểu (type) rõ ràng cho props của trang
// để tránh xung đột với kiểu 'PageProps' chung của hệ thống.
type PodcastPageProps = {
  params: {
    slug: string;
  }
};

// 1. Hàm generateStaticParams (giữ nguyên như cũ)
export async function generateStaticParams() {
  const paths = podcasts.map((podcast) => ({
    slug: podcast.slug,
  }));
  return paths;
}

// 2. Hàm lấy dữ liệu (giữ nguyên như cũ)
async function getPodcastData(slug: string) {
    const podcast = podcasts.find((p) => p.slug === slug);
    
    if (!podcast) {
        notFound(); 
    }
    return podcast;
}

// 3. THAY ĐỔI COMPONENT CHÍNH
// Sử dụng kiểu 'PodcastPageProps' đã định nghĩa ở trên
export default async function PodcastDetailPage({ params }: PodcastPageProps) {

    // 4. Gọi hàm lấy dữ liệu (giữ nguyên như cũ)
    const podcast = await getPodcastData(params.slug);

// ----- KẾT THÚC SỬA ĐỔI (LẦN 2) -----

    // Phần JSX (giao diện) của bệ hạ giữ nguyên
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <Button variant="ghost" asChild>
                    <Link href="/podcast" className="text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Quay lại danh sách
                    </Link>
                </Button>
            </div>

            <Card className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                         <Image
                            src={podcast.image.src}
                            alt={podcast.title}
                            data-ai-hint={podcast.image.hint}
                            width={400}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col">
                        <Badge className="w-fit mb-2">Tập {podcast.episodeNumber}</Badge>
                        <h1 className="text-3xl font-headline font-bold text-foreground">{podcast.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 mb-4">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                <span>{podcast.releaseDate}</span>
                            </div>
                             <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                <span>{podcast.duration}</span>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <audio controls className="w-full" src={podcast.audioSrc}>
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </div>
                 <CardContent className="p-6 pt-0">
                    <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
                        <h2 className="font-headline text-xl">Nội dung tập này</h2>
                        <p>{podcast.description}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}