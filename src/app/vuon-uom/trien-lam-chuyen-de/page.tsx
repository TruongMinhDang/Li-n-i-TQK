import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const thematicExhibits = [
  {
    category: "Hoạt Động",
    title: "Ngày hội 'Thiếu nhi vui khỏe'",
    image: { src: "https://placehold.co/800x600.png", hint: "students sports day" }
  },
  {
    category: "Hoạt Động",
    title: "Hội trại 'Nối vòng tay lớn'",
    image: { src: "https://placehold.co/800x600.png", hint: "students camping bonfire" }
  },
  {
    category: "Hoạt Động",
    title: "Chiến dịch 'Mùa hè xanh'",
    image: { src: "https://placehold.co/800x600.png", hint: "volunteers planting trees" }
  },
  {
    category: "Mô Hình",
    title: "Mô hình 'Vườn rau em yêu'",
    image: { src: "https://placehold.co/800x600.png", hint: "school vegetable garden" }
  },
  {
    category: "Mô Hình",
    title: "CLB 'Nhà sử học nhỏ tuổi'",
    image: { src: "https://placehold.co/800x600.png", hint: "students history club" }
  },
  {
    category: "Thành Tích",
    title: "Giải nhất hội thi 'Nghi thức Đội'",
    image: { src: "https://placehold.co/800x600.png", hint: "students parade competition" }
  },
  {
    category: "Thành Tích",
    title: "Vô địch giải bóng đá học đường",
    image: { src: "https://placehold.co/800x600.png", hint: "students soccer trophy" }
  },
];

const categories = ["Tất cả", "Hoạt Động", "Mô Hình", "Thành Tích"];

export default function ThematicExhibitionPage() {
  const getItemsForCategory = (category: string) => {
    if (category === "Tất cả") return thematicExhibits;
    return thematicExhibits.filter(item => item.category === category);
  }

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Triển lãm chuyên đề
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Thư viện hình ảnh các hoạt động, mô hình và thành tích nổi bật của Liên đội.
        </p>
      </section>

      <section>
        <Tabs defaultValue="Tất cả" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getItemsForCategory(category).map((item) => (
                  <Card key={item.title} className="group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-w-4 aspect-h-3">
                         <Image
                          src={item.image.src}
                          alt={item.title}
                          data-ai-hint={item.image.hint}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                         <div className="absolute bottom-0 left-0 p-4">
                           <h3 className="text-white font-bold text-lg drop-shadow-md">{item.title}</h3>
                         </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
}