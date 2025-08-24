import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function FollowingUnclesWordsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Làm theo lời Bác
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Những câu chuyện và hoạt động học tập, làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.
        </p>
      </section>
      <section className="flex justify-center">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Học tập và làm theo lời Bác"
              data-ai-hint="students studying history"
              width={800}
              height={400}
              className="rounded-t-lg object-cover"
            />
            <CardTitle className="pt-4 font-headline text-2xl">Phong trào "Kế hoạch nhỏ"</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Thực hiện lời dạy của Bác “Tuổi nhỏ làm việc nhỏ, tùy theo sức của mình”, phong trào “Kế hoạch nhỏ” đã trở thành một hoạt động quen thuộc, mang đậm dấu ấn của tổ chức Đội.
            </p>
            <p>
              Liên đội THCS Trần Quang Khải đã tổ chức nhiều đợt thu gom giấy vụn, phế liệu, vừa góp phần bảo vệ môi trường, vừa gây quỹ để giúp đỡ các bạn đội viên có hoàn cảnh khó khăn, vươn lên trong học tập.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
