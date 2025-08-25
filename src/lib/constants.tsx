
import { Home, Info, Leaf, Backpack, Handshake, Mail, BookOpen, Star, Route, FolderKanban, Library, FileText, BarChart2, Calendar } from 'lucide-react';
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
  { name: 'Lịch Sự Kiện', href: '/lich-su-kien', icon: <Calendar /> },
  { name: 'Liên hệ', href: '/lien-he', icon: <Mail /> },
];


export const announcements = [
    { text: "Chào mừng kỷ niệm 84 năm ngày thành lập Đội TNTP Hồ Chí Minh (15/5/1941 – 15/5/2025)!", href: "/lich-su-kien" },
    { text: "Đại hội Liên đội nhiệm kỳ 2024-2025 đã diễn ra thành công tốt đẹp.", href: "/tin-tuc/dai-hoi-lien-doi-thanh-cong-tot-dep" },
    { text: "Theo dõi kênh Podcast 'Nhà Xanh Radio' để cập nhật những câu chuyện thú vị nhé!", href: "/podcast" },
];

export interface NewsArticle {
  slug: string;
  category: string;
  date: Date;
  author: string;
  title: string;
  description: string;
  image: { src: string; hint: string };
  content: ReactNode;
}

const createNewsDate = (year: number, month: number, day: number) => new Date(year, month - 1, day);

export const newsArticles: NewsArticle[] = [
  {
    slug: "lien-doi-manh-cap-quan-2024",
    category: "xay-dung-doi-vung-manh",
    date: createNewsDate(2024, 5, 28),
    author: "Ban Truyền Thông",
    title: "LIÊN ĐỘI THCS TRẦN QUANG KHẢI VINH DỰ NHẬN DANH HIỆU “LIÊN ĐỘI MẠNH” CẤP QUẬN",
    description: "Trong Hội nghị Tổng kết công tác Đội và phong trào thiếu nhi năm học 2023-2024, Liên đội THCS Trần Quang Khải đã xuất sắc được trao tặng danh hiệu 'Liên đội mạnh' cấp Quận.",
    image: { src: "https://placehold.co/600x400.png", hint: "student award ceremony" },
    content: (
        <div className="space-y-4">
            <p>Sáng ngày 28/5/2024, tại Hội nghị Tổng kết công tác Đội và phong trào thiếu nhi năm học 2023-2024 do Hội đồng Đội quận Tân Phú tổ chức, Liên đội THCS Trần Quang Khải đã vinh dự được công nhận và trao tặng danh hiệu “Liên đội mạnh” cấp Quận.</p>
            <p>Đây là thành quả xứng đáng cho những nỗ lực không ngừng nghỉ của tập thể đội viên, các anh chị phụ trách Chi đội và Ban chỉ huy Liên đội trong suốt một năm học vừa qua. Dưới sự chỉ đạo sát sao của Ban Giám hiệu nhà trường và Hội đồng Đội các cấp, Liên đội đã tổ chức thành công nhiều hoạt động, phong trào thi đua sôi nổi, ý nghĩa, thu hút đông đảo đội viên tham gia.</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Thành tích này không chỉ là niềm tự hào của toàn Liên đội, mà còn là động lực to lớn để chúng tôi tiếp tục phấn đấu, rèn luyện, giữ vững và phát huy hơn nữa những thành quả đã đạt được trong những năm học tiếp theo." - Thầy Trương Minh Đăng, Tổng phụ trách Đội chia sẻ.
            </blockquote>
            <p>Các hoạt động nổi bật trong năm học bao gồm phong trào “Nghìn việc tốt”, “Kế hoạch nhỏ”, các hoạt động đền ơn đáp nghĩa, chương trình “Thắp sáng ước mơ thiếu nhi Việt Nam”, các hội thi Nghi thức Đội, văn nghệ, thể thao… đã góp phần giáo dục toàn diện cho đội viên về đạo đức, trí tuệ, thể chất và kỹ năng sống.</p>
            <p>Danh hiệu “Liên đội mạnh” cấp Quận một lần nữa khẳng định vị thế và chất lượng công tác Đội của trường THCS Trần Quang Khải, là nguồn cổ vũ to lớn để Liên đội tiếp tục là một trong những lá cờ đầu trong công tác Đội và phong trào thiếu nhi của quận Tân Phú.</p>
        </div>
    ),
  },
  {
    slug: "le-khai-giang-nam-hoc-moi",
    category: "su-kien-noi-bat",
    date: createNewsDate(2024, 9, 5),
    author: "Ban Biên Tập",
    title: "Lễ Khai Giảng Năm Học Mới",
    description: "Hòa chung không khí rộn ràng của cả nước, trường THCS Trần Quang Khải long trọng tổ chức Lễ Khai giảng năm học 2024-2025.",
    image: { src: "https://placehold.co/600x400.png", hint: "school opening ceremony" },
    content: <p>Nội dung chi tiết về Lễ Khai Giảng.</p>
  },
  {
    slug: "hoi-trang-ram-yeu-thuong",
    category: "su-kien-noi-bat",
    date: createNewsDate(2024, 9, 15),
    author: "CLB Tình Nguyện",
    title: "Hội Trăng Rằm Yêu Thương",
    description: "Chương trình Trung thu với nhiều hoạt động ý nghĩa đã mang đến cho các em đội viên một đêm hội đáng nhớ.",
    image: { src: "https://placehold.co/600x400.png", hint: "mid-autumn festival children" },
    content: <p>Nội dung chi tiết về Hội Trăng Rằm.</p>
  },
  {
    slug: "dai-hoi-lien-doi-thanh-cong-tot-dep",
    category: "xay-dung-doi-vung-manh",
    date: createNewsDate(2024, 10, 10),
    author: "Ban Chỉ Huy Liên Đội",
    title: "Đại Hội Liên Đội Nhiệm Kỳ Mới",
    description: "Đại hội đã diễn ra thành công tốt đẹp, bầu ra Ban chỉ huy Liên đội mới đầy nhiệt huyết và sáng tạo.",
    image: { src: "https://placehold.co/600x400.png", hint: "student council meeting" },
    content: <p>Nội dung chi tiết về Đại Hội Liên Đội.</p>
  },
];


export const testimonials = [
  {
    quote: "Với tâm huyết xây dựng ‘Nhà Xanh’ Trần Quang Khải thành một mái nhà chung ấm áp, nơi ươm mầm những tài năng và nhân cách đẹp, tôi và ban chỉ huy Liên Đội luôn nỗ lực đổi mới, sáng tạo trong từng hoạt động của Liên Đội. Chúng tôi tin rằng, từ những việc làm nhỏ bé hôm nay, các em sẽ hình thành nên những giá trị lớn lao, góp phần xây dựng một cộng đồng tốt đẹp hơn. Trang thông tin này là một bước tiến để Liên Đội đến gần hơn với đội viên, phụ huynh và cộng đồng, lan tỏa những giá trị tích cực mà chúng ta đang cùng nhau vun đắp.",
    author: "Trương Minh Đăng",
    title: "Giáo viên Tổng Phụ Trách Đội",
    color: "success",
  },
  {
    quote: "Tôi vô cùng tự hào khi được đồng hành cùng Liên Đội Trần Quang Khải—một môi trường giáo dục tuyệt vời, nơi các đội viên không chỉ được học tập mà còn phát triển toàn diện về kỹ năng, phẩm chất và tinh thần đồng đội. Tôi đã tận mắt chứng kiến sự trưởng thành, lòng nhân ái và những nỗ lực không ngừng nghỉ của các em. Mỗi hoạt động, mỗi thành quả đều là kết tinh của sự kiên trì, lòng đam mê và tinh thần đoàn kết. Liên Đội không chỉ là nơi ươm mầm tài năng mà còn là nơi hun đúc những giá trị sống cao đẹp. Những trang sử rực rỡ mà các em đã viết nên là minh chứng cho sức mạnh của sự đồng lòng và khát vọng vươn lên. Tôi tin tưởng rằng, với nền tảng vững chắc này, các em sẽ tiếp tục tỏa sáng và góp phần tích cực vào sự phát triển của cộng đồng.",
    author: "Phan Võ Thanh Tú",
    title: "Cộng Tác Viên",
    color: "destructive",
  },
  {
    quote: "Liên đội Trần Quang Khải không chỉ là nơi mỗi đội viên được tạo điều kiện phát triển toàn diện mà còn là môi trường lý tưởng để gắn bó, sẻ chia mọi buồn vui, cùng nhau vượt qua thử thách và hướng đến những mục tiêu chung. Bằng ý chí kiên cường, tinh thần trách nhiệm cao và lòng nhân ái vị tha, các em thiếu nhi đang cùng nhau viết nên những sắc màu truyền thống và dấu ấn đáng tự hào. Mỗi thành quả hôm nay là kết quả của sự nỗ lực bền bỉ, âm thầm mà vô cùng đáng trân trọng của cả tập thể Liên đội.",
    author: "Nguyễn Lê Khánh Tâm",
    title: "Liên Đội Trưởng Khóa XIII",
    color: "primary",
  },
];

export interface Event {
  date: Date;
  title: string;
  description: string;
  icon: 'birthday' | 'celebration' | 'meeting' | 'summary' | 'graduation' | 'default';
  color: 'red' | 'yellow' | 'blue' | 'green' | 'purple';
}

// Helper to create date objects in GMT+7 timezone
function createDate(year: number, month: number, day: number): Date {
    // Month is 0-indexed in JavaScript Date
    return new Date(Date.UTC(year, month - 1, day, 0, 0, 0) - 7 * 60 * 60 * 1000);
}

export const events: Event[] = [
  {
    date: createDate(2025, 5, 15),
    title: "Kỷ Niệm 84 Năm Ngày Thành Lập Đội TNTP Hồ Chí Minh (15/5/1941 – 15/5/2025)",
    description: "Chào mừng ngày truyền thống vẻ vang của Đội!",
    icon: "birthday",
    color: "red",
  },
  {
    date: createDate(2025, 5, 19),
    title: "Kỷ Niệm 135 Năm Sinh Chủ Tịch Hồ Chí Minh – Hội Thu Heo Đất",
    description: "18g00: Chung Kết Kể Chuyện Bác Hồ",
    icon: "celebration",
    color: "yellow",
  },
  {
    date: createDate(2025, 5, 25),
    title: "Họp PHHS Khối 6, 7, 8",
    description: "",
    icon: "meeting",
    color: "blue",
  },
  {
    date: createDate(2025, 5, 26),
    title: "Tổng Kết Lớp",
    description: "",
    icon: "summary",
    color: "green",
  },
  {
    date: createDate(2025, 5, 27),
    title: "Bế Giảng & Lễ Tri Ân Trưởng Thành Khối 9",
    description: "",
    icon: "graduation",
    color: "purple",
  },
   {
    date: createDate(2025, 6, 1),
    title: "Vui Tết Thiếu Nhi",
    description: "Tổ chức các hoạt động vui chơi và tặng quà cho các em đội viên.",
    icon: "birthday",
    color: "red",
  },
  {
    date: createDate(2025, 9, 5),
    title: "Lễ Khai Giảng Năm Học Mới 2025-2026",
    description: "Chào đón năm học mới với khí thế mới!",
    icon: "celebration",
    color: "yellow",
  },
];
