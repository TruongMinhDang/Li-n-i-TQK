import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { getArticles } from "@/actions/posts";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categoryMap: { [key: string]: string } = {
  'xay-dung-doi-vung-manh': 'Xây Dựng Đội Vững Mạnh',
  'lam-theo-loi-bac': 'Làm theo lời Bác',
  'cung-tien-buoc-len-doan': 'Cùng Tiến Bước Lên Đoàn',
  'cau-chuyen-dep': 'Mỗi Tuần Một Câu Chuyện Đẹp',
  'mang-non-tieu-bieu': 'Măng Non Tiêu Biểu',
  'su-kien-noi-bat': 'Sự Kiện Nổi Bật',
  'khong-gian-van-hoa-hcm': 'Không Gian Văn Hóa Hồ Chí Minh',
};

const categoryColorMap: { [key: string]: "default" | "secondary" | "destructive" } = {
    'xay-dung-doi-vung-manh': 'secondary',
    'lam-theo-loi-bac': 'default',
    'cung-tien-buoc-len-doan': 'destructive',
    'cau-chuyen-dep': 'default',
    'mang-non-tieu-bieu': 'secondary',
    'su-kien-noi-bat': 'destructive',
};

export default async function AdminPostsPage() {
  const articles = await getArticles();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Quản Lý Bài Viết</h2>
          <p className="text-muted-foreground">
            Tạo và quản lý các bài viết trên trang Chuyện Nhà Xanh.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/posts/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Tạo bài viết mới
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Danh sách bài viết</CardTitle>
            <CardDescription>Toàn bộ bài viết đã được đăng tải.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tiêu đề</TableHead>
                        <TableHead className="hidden md:table-cell">Chuyên mục</TableHead>
                        <TableHead className="hidden md:table-cell">Tác giả</TableHead>
                        <TableHead className="hidden sm:table-cell">Ngày đăng</TableHead>
                        <TableHead>
                            <span className="sr-only">Hành động</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {articles.map((article) => (
                        <TableRow key={article.slug}>
                            <TableCell className="font-medium">{article.title}</TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Badge variant={categoryColorMap[article.category] || 'default'}>
                                    {categoryMap[article.category] || article.category}
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{article.author}</TableCell>
                            <TableCell className="hidden sm:table-cell">
                                {format(new Date(article.date), "dd/MM/yyyy", { locale: vi })}
                            </TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button aria-haspopup="true" size="icon" variant="ghost">
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                                        <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                                        <DropdownMenuItem>Xóa</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
