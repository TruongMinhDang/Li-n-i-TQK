import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const infographics = [
  {
    title: "6 Bài học lý luận chính trị",
    image: { src: "https://placehold.co/600x800.png", hint: "political infographic" }
  },
  {
    title: "Nghi thức Đội TNTP Hồ Chí Minh",
    image: { src: "https://placehold.co/600x800.png", hint: "rules infographic" }
  },
   {
    title: "Phòng chống rác thải nhựa",
    image: { src: "https://placehold.co/600x800.png", hint: "environment infographic" }
  },
   {
    title: "An toàn trên không gian mạng",
    image: { src: "https://placehold.co/600x800.png", hint: "cybersecurity infographic" }
  }
];

export default function InfographicPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Infographic
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Những thông tin, kiến thức được trình bày một cách trực quan, sinh động.
        </p>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {infographics.map((info) => (
          <Card key={info.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-2">
               <Image
                src={info.image.src}
                alt={info.title}
                data-ai-hint={info.image.hint}
                width={600}
                height={800}
                className="rounded-lg object-cover"
              />
            </CardHeader>
            <CardContent className="pt-2 text-center">
              <CardTitle className="font-headline text-lg">{info.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
