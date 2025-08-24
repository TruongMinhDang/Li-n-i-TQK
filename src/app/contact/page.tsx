import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Địa chỉ",
      value: "123 Đường ABC, Phường XYZ, Quận 1, Thành phố Hồ Chí Minh",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Điện thoại",
      value: "(+84) 123 456 789",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "contact@ldtqk.website",
    },
];

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Liên Hệ
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
                {contactInfo.map((info) => (
                    <Card key={info.title} className="bg-transparent border-0 shadow-none">
                        <CardHeader className="p-0">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    {info.icon}
                                </div>
                                <div>
                                    <CardTitle className="font-headline text-xl">{info.title}</CardTitle>
                                    <p className="text-muted-foreground">{info.value}</p>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                    src="https://placehold.co/800x600.png"
                    data-ai-hint="city map"
                    alt="Bản đồ"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </section>
    </div>
  );
}
