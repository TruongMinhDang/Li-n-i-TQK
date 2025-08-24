import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MeetingHallPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Chiêu Minh Hội Quán
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Nơi giao lưu, học hỏi và chia sẻ kinh nghiệm của các thế hệ chỉ huy Đội.
        </p>
      </section>
       <section className="flex justify-center">
         <Card className="w-full max-w-4xl">
          <CardHeader>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Chiêu Minh Hội Quán"
              data-ai-hint="students meeting discussion"
              width={800}
              height={400}
              className="rounded-t-lg object-cover"
            />
            <CardTitle className="pt-4 font-headline text-2xl">Gặp gỡ và chia sẻ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Chiêu Minh Hội Quán là mô hình sinh hoạt độc đáo, tạo không gian mở để các bạn trong Ban chỉ huy Liên - Chi đội gặp gỡ, trao đổi kinh nghiệm, và cùng nhau tháo gỡ những khó khăn trong công tác Đội.
            </p>
            <p>
              Đây cũng là nơi các anh chị cựu chỉ huy Đội quay về, truyền lửa và tiếp thêm động lực cho thế hệ đàn em, giữ cho ngọn lửa nhiệt huyết của Đội luôn rực cháy.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
