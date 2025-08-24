import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const plans = [
  {
    title: "Kế hoạch năm học 2024-2025",
    description: "Kế hoạch tổng thể các hoạt động của Liên đội trong năm học.",
    lastUpdated: "30/08/2024",
    fileUrl: "#",
  },
  {
    title: "Kế hoạch tổ chức Trung Thu",
    description: "Kế hoạch chi tiết cho chương trình 'Đêm hội trăng rằm'.",
    lastUpdated: "15/08/2024",
    fileUrl: "#",
  },
  {
    title: "Kế hoạch Đại hội Liên đội",
    description: "Công tác chuẩn bị và tổ chức Đại hội Liên đội nhiệm kỳ mới.",
    lastUpdated: "01/08/2024",
    fileUrl: "#",
  },
];

export default function PlansPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Kế Hoạch Hoạt Động
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Tổng hợp các kế hoạch, chương trình hành động của Liên đội.
        </p>
      </section>

      <section>
        <Card className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên kế hoạch</TableHead>
                <TableHead className="hidden md:table-cell">Mô tả</TableHead>
                <TableHead className="hidden sm:table-cell">Cập nhật</TableHead>
                <TableHead className="text-right">Tải về</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((doc) => (
                <TableRow key={doc.title}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="font-medium">{doc.title}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{doc.description}</TableCell>
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
