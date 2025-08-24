
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
    quote: "Tôi vô cùng tự hào khi được đồng hành cùng Liên Đội Trần Quang Khải—một môi trường giáo dục tuyệt vời, nơi các đội viên không chỉ được học tập mà còn phát triển toàn diện về kỹ năng, phẩm chất và tinh thần đồng đội. Tôi đã tận mắt chứng kiến sự trưởng thành, lòng nhân ái và những nỗ lực không ngừng nghỉ của các em. Mỗi hoạt động, mỗi thành quả đều là kết tinh của sự kiên trì, lòng đam mê và tinh thần đoàn kết. Liên Đội không chỉ là nơi ươm mầm tài năng mà còn là nơi hun đúc những giá trị sống cao đẹp. Những trang sử rực rỡ mà các em đã viết nên là minh chứng cho sức mạnh của sự đồng lòng và khát vọng vươn lên. Tôi tin tưởng rằng, với nền tảng vững chắc này, các em sẽ tiếp tục tỏa sáng và góp phần tích cực vào sự phát triển của cộng đồng.",
    author: "Phan Võ Thanh Tú",
    title: "Cộng Tác Viên",
    color: "destructive",
  },
  {
    quote: "Trang web của Liên đội thật sự là một nguồn thông tin hữu ích. Là một phụ huynh, tôi có thể dễ dàng theo dõi các hoạt động của con em mình tại trường, cũng như cập nhật các thông báo quan trọng một cách nhanh chóng. Giao diện thân thiện, dễ sử dụng!",
    author: "Một Phụ Huynh",
    title: "Phụ huynh học sinh",
    color: "primary",
  },
  {
    quote: "Em rất thích chuyên mục 'Vườn Ươm' trên trang web. Đọc những câu chuyện đẹp và gương mặt tiêu biểu đã tiếp thêm cho em rất nhiều động lực để học tập và rèn luyện tốt hơn. Em cảm thấy tự hào khi là một thành viên của Liên đội Trần Quang Khải.",
    author: "Một Đội Viên",
    title: "Đội viên",
    color: "warning",
  },
];
