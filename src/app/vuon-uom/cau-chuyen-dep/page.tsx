import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function BeautifulStoryPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Mỗi Tuần Một Câu Chuyện Đẹp
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Lan tỏa những hành động đẹp, những câu chuyện ý nghĩa và những tấm gương người tốt việc tốt.
        </p>
      </section>
      <section className="flex justify-center">
         <Card className="w-full max-w-4xl">
          <CardHeader>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Câu chuyện đẹp"
              data-ai-hint="helping others"
              width={800}
              height={400}
              className="rounded-t-lg object-cover"
            />
            <CardTitle className="pt-4 font-headline text-2xl">Nhặt được của rơi, trả người đánh mất</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Trên đường đi học về, em Nguyễn Văn An, học sinh lớp 8A1 đã nhặt được một chiếc ví chứa nhiều giấy tờ quan trọng và một số tiền lớn.
            </p>
            <p>
              Không một chút do dự, An đã nhanh chóng mang chiếc ví đến đồn công an gần nhất để trình báo và nhờ các chú công an tìm người trả lại. Hành động của An là một tấm gương sáng về đức tính thật thà, trung thực, xứng đáng để các bạn đội viên khác noi theo.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
