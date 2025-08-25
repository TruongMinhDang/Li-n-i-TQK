
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
    { text: "Đại hội Liên đội nhiệm kỳ 2024-2025 đã diễn ra thành công tốt đẹp.", href: "/hanh-trinh/xay-dung-doi-vung-manh" },
    { text: "Theo dõi kênh Podcast 'Nhà Xanh Radio' để cập nhật những câu chuyện thú vị nhé!", href: "/podcast" },
];

export const newsArticles = [
  {
    title: "Lễ Khai Giảng Năm Học Mới",
    description: "Hòa chung không khí rộn ràng của cả nước, trường THCS Trần Quang Khải long trọng tổ chức Lễ Khai giảng năm học 2024-2025.",
    image: { src: "https://placehold.co/600x400.png", hint: "school opening ceremony" },
    href: "/lich-su-kien"
  },
  {
    title: "Hội Trăng Rằm Yêu Thương",
    description: "Chương trình Trung thu với nhiều hoạt động ý nghĩa đã mang đến cho các em đội viên một đêm hội đáng nhớ.",
    image: { src: "https://placehold.co/600x400.png", hint: "mid-autumn festival children" },
    href: "/lich-su-kien"
  },
  {
    title: "Đại Hội Liên Đội Nhiệm Kỳ Mới",
    description: "Đại hội đã diễn ra thành công tốt đẹp, bầu ra Ban chỉ huy Liên đội mới đầy nhiệt huyết và sáng tạo.",
    image: { src: "https://placehold.co/600x400.png", hint: "student council meeting" },
    href: "/hanh-trinh/xay-dung-doi-vung-manh"
  },
  {
    title: "Tấm Lòng Vàng 'Kế Hoạch Nhỏ'",
    description: "Phong trào thu gom giấy vụn đã nhận được sự hưởng ứng nhiệt tình, gây quỹ giúp đỡ nhiều bạn học sinh khó khăn.",
    image: { src: "https://placehold.co/600x400.png", hint: "recycling program kids" },
    href: "/hanh-trinh/lam-theo-loi-bac"
  },
  {
    title: "Ra Mắt Kênh Podcast 'Nhà Xanh Radio'",
    description: "Kênh phát thanh của Liên đội đã chính thức lên sóng, hứa hẹn mang đến nhiều nội dung hấp dẫn.",
    image: { src: "https://placehold.co/600x400.png", hint: "podcast microphone studio" },
    href: "/podcast"
  },
  {
    title: "Tuyên Dương 'Măng Non Tiêu Biểu'",
    description: "Vinh danh những tấm gương đội viên xuất sắc trong học tập và rèn luyện, tạo động lực phấn đấu cho toàn Liên đội.",
    image: { src: "https://placehold.co/600x400.png", hint: "student award ceremony" },
    href: "/vuon-uom/mang-non-tieu-bieu"
  },
  {
    title: "Hoạt Động Đền Ơn Đáp Nghĩa",
    description: "Liên đội đã tổ chức thăm và tặng quà các gia đình chính sách, thể hiện đạo lý 'Uống nước nhớ nguồn'.",
    image: { src: "https://placehold.co/600x400.png", hint: "students visiting veterans" },
    href: "/vuon-uom/cau-chuyen-dep"
  }
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
