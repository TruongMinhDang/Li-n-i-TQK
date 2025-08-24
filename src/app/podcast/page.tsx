import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Headphones } from "lucide-react";
import Image from "next/image";

const episodes = [
  {
    title: "Tập 1: Lời chào từ Nhà Xanh",
    description: "Tập đầu tiên ra mắt, giới thiệu về kênh podcast và những câu chuyện sắp tới.",
    image: { src: "https://placehold.co/600x400.png", hint: "microphone podcast" },
    duration: "15:30",
  },
  {
    title: "Tập 2: Kể chuyện tấm gương đạo đức Bác Hồ",
    description: "Cùng lắng nghe những câu chuyện cảm động và ý nghĩa về Bác.",
    image: { src: "https://placehold.co/600x400.png", hint: "history book" },
    duration: "22:10",
  },
  {
    title: "Tập 3: Kỹ năng mềm cho đội viên",
    description: "Khám phá những kỹ năng cần thiết cho đội viên trong thời đại mới.",
    image: { src: "https://placehold.co/600x400.png", hint: "students teamwork" },
    duration: "18:45",
  },
];

export default function PodcastPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="flex justify-center mb-4">
          <Headphones className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Nhà Xanh Radio
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Kênh podcast chính thức của Liên đội THCS Trần Quang Khải, nơi chia sẻ những câu chuyện, kiến thức và cảm hứng.
        </p>
      </section>

      <section>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {episodes.map((episode) => (
            <Card key={episode.title} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <Image
                  src={episode.image.src}
                  alt={episode.title}
                  data-ai-hint={episode.image.hint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="pt-4 flex-grow">
                <CardTitle className="font-headline text-xl">{episode.title}</CardTitle>
                <CardDescription className="mt-2">{episode.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Thời lượng: {episode.duration}</span>
                <Button variant="ghost" size="icon">
                  <PlayCircle className="h-6 w-6 text-primary" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
