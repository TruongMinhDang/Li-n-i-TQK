
"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { FileText, Search } from 'lucide-react';

interface SearchableContent {
  title: string;
  description: string;
  url: string;
  keywords: string;
}

const contentIndex: SearchableContent[] = [
  // Main pages
  { title: 'Nhà Xanh', description: 'Trang chủ của Liên đội THCS Trần Quang Khải.', url: '/', keywords: 'trang chủ nhà xanh' },
  { title: 'Chúng Mình Là', description: 'Tìm hiểu về lịch sử, sứ mệnh và tầm nhìn của Liên đội.', url: '/chung-minh-la', keywords: 'giới thiệu về chúng tôi lịch sử' },
  { title: 'Liên hệ', description: 'Thông tin liên hệ của Liên đội.', url: '/lien-he', keywords: 'địa chỉ email điện thoại' },
  { title: 'Gửi lời chúc', description: 'Gửi những lời chúc tốt đẹp đến bạn bè và thầy cô.', url: '/gui-loi-chuc', keywords: 'lời chúc' },
  { title: 'Lịch sự kiện', description: 'Theo dõi các hoạt động sắp tới của Liên đội.', url: '/lich-su-kien', keywords: 'sự kiện lịch' },

  // Hành Trình
  { title: 'Hành Trình', description: 'Khám phá các hoạt động, sự kiện và phong trào sôi nổi của Liên đội.', url: '/hanh-trinh', keywords: 'hoạt động phong trào' },
  { title: 'Làm theo lời Bác', description: 'Những câu chuyện và hoạt động học tập, làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.', url: '/hanh-trinh/lam-theo-loi-bac', keywords: 'bác hồ kế hoạch nhỏ' },
  { title: 'Xây Dựng Đội Vững Mạnh', description: 'Các hoạt động rèn luyện kỹ năng, nghiệp vụ công tác Đội.', url: '/hanh-trinh/xay-dung-doi-vung-manh', keywords: 'tập huấn chỉ huy đội' },
  { title: 'Cùng Tiến Bước Lên Đoàn', description: 'Hành trình phấn đấu của các đội viên ưu tú để được đứng vào hàng ngũ Đoàn.', url: '/hanh-trinh/cung-tien-buoc-len-doan', keywords: 'kết nạp đoàn viên' },
  
  // Vườn Ươm
  { title: 'Vườn Ươm', description: 'Nơi vinh danh những bông hoa đẹp, những tấm gương sáng.', url: '/vuon-uom', keywords: 'khen thưởng gương tốt' },
  { title: 'Mỗi Tuần Một Câu Chuyện Đẹp', description: 'Lan tỏa những hành động đẹp, những câu chuyện ý nghĩa.', url: '/vuon-uom/cau-chuyen-dep', keywords: 'người tốt việc tốt nhặt của rơi' },
  { title: 'Măng Non Tiêu Biểu', description: 'Vinh danh những tấm gương đội viên xuất sắc trong học tập và rèn luyện.', url: '/vuon-uom/mang-non-tieu-bieu', keywords: 'học sinh giỏi cháu ngoan bác hồ' },

  // Balo
  { title: 'Balo', description: 'Hành trang số với đầy đủ tài liệu, kế hoạch và kiến thức.', url: '/balo', keywords: 'tài liệu' },
  { title: 'Chiêu Minh Hội Quán', description: 'Nơi giao lưu, học hỏi và chia sẻ kinh nghiệm của các thế hệ chỉ huy Đội.', url: '/balo/chieu-minh-hoi-quan', keywords: 'chỉ huy đội giao lưu' },
  { title: 'Kế Hoạch', description: 'Tổng hợp các kế hoạch, chương trình hành động của Liên đội.', url: '/balo/ke-hoach', keywords: 'kế hoạch năm học' },
  { title: 'Tài Liệu', description: 'Kho tài liệu, văn bản và biểu mẫu cần thiết cho hoạt động Đội.', url: '/balo/tai-lieu', keywords: 'điều lệ đội biểu mẫu' },
  { title: 'Kỷ Yếu', description: 'Lưu giữ những khoảnh khắc, những kỷ niệm đẹp.', url: '/balo/ky-yeu', keywords: 'kỷ yếu trại hè' },
  { title: 'Infographic', description: 'Thông tin, kiến thức được trình bày một cách trực quan.', url: '/balo/infographic', keywords: 'infographic an toàn mạng' },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchableContent[]>([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filteredResults = contentIndex.filter(item => 
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.description.toLowerCase().includes(lowerCaseQuery) ||
        item.keywords.toLowerCase().includes(lowerCaseQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Kết Quả Tìm Kiếm
        </h1>
        {query && (
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                Tìm thấy {results.length} kết quả cho từ khóa: <span className="font-semibold text-primary">"{query}"</span>
            </p>
        )}
      </section>

      <section>
        {results.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <Link key={item.url} href={item.url} className="block group">
                 <Card className="h-full hover:shadow-lg hover:border-primary transition-all">
                   <CardHeader>
                     <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                       <FileText className="h-5 w-5"/>
                       {item.title}
                     </CardTitle>
                   </CardHeader>
                   <CardContent>
                     <CardDescription>{item.description}</CardDescription>
                   </CardContent>
                 </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardHeader>
                <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle className="mt-4">Không tìm thấy kết quả</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {query ? "Hãy thử một từ khóa khác." : "Hãy nhập từ khóa vào ô tìm kiếm để bắt đầu."}
                </CardDescription>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
