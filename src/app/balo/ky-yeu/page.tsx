import { Flipbook } from "@/components/flipbook";
import { Card, CardContent } from "@/components/ui/card";

const yearbooks = [
  {
    title: "Kỷ yếu Liên đội 2023-2024",
    description: "Nhìn lại một năm học với những hoạt động sôi nổi và thành tích đáng tự hào.",
    pages: [
      { src: "https://placehold.co/600x800.png", hint: "yearbook cover" },
      { src: "https://placehold.co/600x800.png", hint: "students group photo" },
      { src: "https://placehold.co/600x800.png", hint: "school event" },
      { src: "https://placehold.co/600x800.png", hint: "sports day" },
      { src: "https://placehold.co/600x800.png", hint: "yearbook back cover" },
    ]
  },
  {
    title: "Kỷ yếu Trại hè 2023",
    description: "Khoảnh khắc đáng nhớ tại hội trại truyền thống 'Nối vòng tay lớn'.",
    pages: [
      { src: "https://placehold.co/600x800.png", hint: "students camping" },
      { src: "https://placehold.co/600x800.png", hint: "campfire students" },
      { src: "https://placehold.co/600x800.png", hint: "team building activities" },
      { src: "https://placehold.co/600x800.png", hint: "tug of war" },
      { src: "https://placehold.co/600x800.png", hint: "end of camp photo" },
    ]
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
          Lật giở từng trang ký ức, lưu giữ những khoảnh khắc đẹp của một thời đội viên.
        </p>
      </section>
      <section className="space-y-16">
        {yearbooks.map((yearbook) => (
          <div key={yearbook.title}>
            <h2 className="text-2xl font-headline font-bold text-center mb-2">{yearbook.title}</h2>
            <p className="text-muted-foreground text-center mb-6">{yearbook.description}</p>
            <Card className="p-4 bg-secondary/30">
              <CardContent className="p-0 flex justify-center">
                <Flipbook pages={yearbook.pages} />
              </CardContent>
            </Card>
          </div>
        ))}
      </section>
    </div>
  );
}
