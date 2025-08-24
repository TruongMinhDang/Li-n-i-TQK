import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AdvancingToTheUnionPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Cùng Tiến Bước Lên Đoàn
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Hành trình phấn đấu của các đội viên ưu tú để được đứng vào hàng ngũ của Đoàn TNCS Hồ Chí Minh.
        </p>
      </section>
      <section className="flex justify-center">
         <Card className="w-full max-w-4xl">
          <CardHeader>
            <Image
              src="https://placehold.co/800x400.png"
              alt="Lễ kết nạp Đoàn viên"
              data-ai-hint="youth union ceremony"
              width={800}
              height={400}
              className="rounded-t-lg object-cover"
            />
            <CardTitle className="pt-4 font-headline text-2xl">Lễ kết nạp Đoàn viên mới</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Được đứng vào hàng ngũ của Đoàn là một vinh dự lớn, là kết quả của một quá trình rèn luyện, phấn đấu không ngừng.
            </p>
            <p>
              Buổi lễ kết nạp Đoàn viên mới của Liên đội THCS Trần Quang Khải luôn được tổ chức trang trọng, ý nghĩa, trở thành một kỷ niệm khó phai trong lòng mỗi đội viên ưu tú khi được chính thức trở thành đoàn viên Đoàn TNCS Hồ Chí Minh.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
