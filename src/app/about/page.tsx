import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, History, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Về Chúng Tôi
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Hành trình xây dựng và phát triển của Liên đội THCS Trần Quang Khải.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-headline font-bold mb-4">Lịch sử hình thành</h2>
          <p className="text-muted-foreground leading-relaxed">
            Liên đội THCS Trần Quang Khải được thành lập với mục tiêu tạo ra một môi trường học tập và rèn luyện năng động, sáng tạo cho các đội viên. Trải qua nhiều năm, chúng tôi tự hào đã trở thành một trong những liên đội vững mạnh, đi đầu trong các phong trào của thành phố, góp phần đào tạo nên nhiều thế hệ học sinh ưu tú, có ích cho xã hội.
          </p>
        </div>
        <Image
          src="https://placehold.co/600x400.png"
          alt="Lịch sử hình thành"
          data-ai-hint="old school building"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="grid md:grid-cols-3 gap-8 text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
              <History className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline mt-4">Sứ mệnh</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Tạo dựng môi trường giáo dục toàn diện, giúp đội viên phát triển cả về tri thức, kỹ năng và nhân cách.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline mt-4">Tầm nhìn</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Trở thành một liên đội kiểu mẫu, nơi mỗi đội viên đều được truyền cảm hứng để vươn tới ước mơ và hoài bão.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline mt-4">Giá trị cốt lõi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Đoàn kết - Sáng tạo - Trách nhiệm - Yêu thương.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
