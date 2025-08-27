import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const yearbooks = [
  {
    title: "Kỷ yếu Liên đội 2023-2024",
    description: "Nhìn lại một năm học với những hoạt động sôi nổi và thành tích đáng tự hào.",
    image: { src: "https://placehold.co/600x400.png", hint: "yearbook cover" }
  },
  {
    title: "Kỷ yếu Trại hè 2023",
    description: "Khoảnh khắc đáng nhớ tại hội trại truyền thống 'Nối vòng tay lớn'.",
    image: { src: "https://placehold.co/600x400.png", hint: "students camping" }
  }
];

export default function YearbookPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Kỷ Yếu Liên Đội
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Lưu giữ những khoảnh khắc, những kỷ niệm đẹp của một thời đội viên.
        </p>
      </section>
      <section className="grid md:grid-cols-2 gap-8">
        {yearbooks.map((yearbook) => (
          <Card key={yearbook.title} className="hover:shadow-lg transition-shadow">
             <CardHeader className="p-0">
                <Image
                    src={yearbook.image.src}
                    alt={yearbook.title}
                    data-ai-hint={yearbook.image.hint}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover"
                />
            </CardHeader>
            <CardContent className="p-4 text-center">
              <CardTitle className="font-headline text-lg">{yearbook.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">{yearbook.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
