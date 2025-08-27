import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export default function HoChiMinhCulturalSpacePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Không Gian Văn Hóa Hồ Chí Minh
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Nơi học tập, lan tỏa tư tưởng, đạo đức và phong cách của Chủ tịch Hồ Chí Minh.
        </p>
      </section>

      <section>
        <Card className="overflow-hidden">
          <CardHeader className="p-0">
             <Image
              src="https://placehold.co/1200x500.png"
              alt="Không Gian Văn Hóa Hồ Chí Minh"
              data-ai-hint="ho chi minh museum"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline">
              <p>
                Không gian văn hóa Hồ Chí Minh tại Liên đội THCS Trần Quang Khải là một dự án trọng điểm, được xây dựng với mục tiêu tạo ra một môi trường giáo dục trực quan, sinh động để các bạn đội viên, thiếu nhi có thể tìm hiểu, học tập và làm theo tư tưởng, đạo đức, phong cách của Bác.
              </p>
              <blockquote>
                Đây không chỉ là nơi trưng bày tư liệu, hình ảnh về cuộc đời và sự nghiệp vĩ đại của Người, mà còn là không gian tổ chức các hoạt động, buổi sinh hoạt chuyên đề, cuộc thi kể chuyện, giúp các em thấm nhuần hơn những bài học quý báu mà Bác đã để lại.
              </blockquote>
              <p>
                Thông qua các hoạt động tại đây, Liên đội mong muốn mỗi đội viên sẽ trở thành một bông hoa đẹp trong vườn hoa nghìn việc tốt, luôn ghi nhớ và thực hiện tốt 5 điều Bác Hồ dạy, xứng đáng là con ngoan, trò giỏi, cháu ngoan Bác Hồ.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}