
import Image from "next/image";
import { podcasts } from "@/lib/constants";
import { Rss, Mic, Headset } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EpisodeCard = ({ episode }: { episode: (typeof podcasts)[0] }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200 border-b">
      <Image
        src={episode.image.src}
        alt={episode.title}
        data-ai-hint={episode.image.hint}
        width={100}
        height={100}
        className="rounded-md w-24 h-24 object-cover"
      />
      <div className="flex-1 space-y-2">
        <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Tập {episode.episodeNumber}</p>
            <h3 className="font-semibold text-foreground line-clamp-2">{episode.title}</h3>
            <p className="text-sm text-muted-foreground">{episode.releaseDate}</p>
        </div>
        <audio controls className="w-full h-10" src={episode.audioSrc}>
            Your browser does not support the audio element.
        </audio>
        <Button variant="link" size="sm" className="px-0">Xem chi tiết</Button>
      </div>
    </div>
  );
};


export default function PodcastPage() {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      {/* Left Column: Podcast Info */}
      <aside className="md:col-span-1 space-y-6 md:sticky md:top-24 h-fit">
        <div className="p-4 border rounded-lg shadow-sm">
            <Image
                src="https://placehold.co/600x600.png"
                alt="Nhà Xanh Radio"
                data-ai-hint="podcast cover art"
                width={600}
                height={600}
                className="rounded-lg w-full"
            />
        </div>
        <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
                <Mic className="h-5 w-5 text-primary" />
                <h1 className="text-2xl font-headline font-bold">Nhà Xanh Radio</h1>
            </div>
            <p className="text-muted-foreground">
                Kênh podcast chính thức của Liên đội THCS Trần Quang Khải, nơi chia sẻ những câu chuyện, kiến thức và cảm hứng.
            </p>
        </div>
        <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Theo dõi trên</h3>
            <div className="flex flex-col gap-2">
                <Button variant="outline" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Rss className="mr-2" />
                        <span>Apple Podcasts</span>
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                     <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Headset className="mr-2" />
                        <span>Spotify</span>
                    </Link>
                </Button>
            </div>
        </div>
      </aside>

      {/* Right Column: Episodes List */}
      <main className="md:col-span-2">
        <div className="space-y-4">
            {podcasts.map((episode) => (
                <EpisodeCard key={episode.title} episode={episode} />
            ))}
        </div>
      </main>
    </div>
  );
}
