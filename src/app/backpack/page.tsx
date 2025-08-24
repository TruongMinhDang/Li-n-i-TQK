import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const documents = [
  {
    title: "Điều lệ Đội TNTP Hồ Chí Minh",
    category: "Quy định",
    lastUpdated: "10/05/2024",
    fileUrl: "#",
  },
  {
    title: "Sổ tay Nghi thức Đội",
    category: "Hướng dẫn",
    lastUpdated: "01/04/2024",
    fileUrl: "#",
  },
  {
    title: "Mẫu báo cáo tổng kết năm học",
    category: "Biểu mẫu",
    lastUpdated: "15/03/2024",
    fileUrl: "#",
  },
  {
    title: "Hướng dẫn tổ chức Đại hội Chi đội",
    category: "Hướng dẫn",
    lastUpdated: "20/02/2024",
    fileUrl: "#",
  },
  {
    title: "Kế hoạch hoạt động tháng 9",
    category: "Kế hoạch",
    lastUpdated: "01/09/2023",
    fileUrl: "#",
  },
];

export default function BackpackPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Hành Trang Đội Viên
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Kho tài liệu, văn bản và biểu mẫu cần thiết cho hoạt động Đội.
        </p>
      </section>

      <section>
        <Card className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên tài liệu</TableHead>
                <TableHead className="hidden md:table-cell">Phân loại</TableHead>
                <TableHead className="hidden sm:table-cell">Cập nhật lần cuối</TableHead>
                <TableHead className="text-right">Tải về</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.title}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="font-medium">{doc.title}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{doc.category}</TableCell>
                  <TableCell className="hidden sm:table-cell">{doc.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={doc.fileUrl} download>
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Tải về</span>
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}
