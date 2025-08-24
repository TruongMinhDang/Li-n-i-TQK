import { Home, Info, Leaf, Backpack, Handshake, Mail, BookOpen, Star, Route, FolderKanban, Library, FileText, BarChart2 } from 'lucide-react';
import { ReactNode } from 'react';

interface NavLink {
    name: string;
    href: string;
    icon: ReactNode;
    subLinks?: NavLink[];
}

export const navLinks: NavLink[] = [
  { name: 'Nhà Xanh', href: '/', icon: <Home /> },
  { name: 'Chúng Mình Là', href: '/chung-minh-la', icon: <Info /> },
  {
    name: 'Hành Trình',
    href: '/hanh-trinh',
    icon: <Route />,
    subLinks: [
      { name: 'Làm theo lời Bác', href: '/hanh-trinh/lam-theo-loi-bac', icon: <BookOpen /> },
      { name: 'Xây Dựng Đội Vững mạnh', href: '/hanh-trinh/xay-dung-doi-vung-manh', icon: <Handshake /> },
      { name: 'Cùng tiến bước lên đoàn', href: '/hanh-trinh/cung-tien-buoc-len-doan', icon: <Star /> },
    ]
  },
  {
    name: 'Vườn Ươm',
    href: '/vuon-uom',
    icon: <Leaf />,
    subLinks: [
       { name: 'Mỗi tuần một câu chuyện đẹp', href: '/vuon-uom/cau-chuyen-dep', icon: <BookOpen /> },
       { name: 'Măng non tiêu biểu', href: '/vuon-uom/mang-non-tieu-bieu', icon: <Star /> },
    ]
  },
  {
    name: 'Balo',
    href: '/balo',
    icon: <Backpack />,
    subLinks: [
      { name: 'Chiêu minh hội quán', href: '/balo/chieu-minh-hoi-quan', icon: <Library /> },
      { name: 'Kế hoạch', href: '/balo/ke-hoach', icon: <FolderKanban /> },
      { name: 'Tài liệu', href: '/balo/tai-lieu', icon: <FileText /> },
      { name: 'Kỷ yếu', href: '/balo/ky-yeu', icon: <BookOpen /> },
      { name: 'Infographic', href: '/balo/infographic', icon: <BarChart2 /> },
    ]
  },
  { name: 'Liên hệ', href: '/lien-he', icon: <Mail /> },
];
