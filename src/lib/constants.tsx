import { Home, Info, Leaf, Backpack, Handshake, Mail, BookOpen, Star, Route, FolderKanban, Library, FileText, BarChart2, Calendar, Building2, Image as ImageIcon } from 'lucide-react';
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
      { name: 'Không gian văn hóa Hồ Chí Minh', href: '/hanh-trinh/khong-gian-van-hoa-hcm', icon: <Building2 /> },
    ]
  },
  {
    name: 'Vườn Ươm',
    href: '/vuon-uom',
    icon: <Leaf />,
    subLinks: [
       { name: 'Mỗi tuần một câu chuyện đẹp', href: '/vuon-uom/cau-chuyen-dep', icon: <BookOpen /> },
       { name: 'Măng non tiêu biểu', href: '/vuon-uom/mang-non-tieu-bieu', icon: <Star /> },
       { name: 'Triển lãm chuyên đề', href: '/vuon-uom/trien-lam-chuyen-de', icon: <ImageIcon /> },
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
  content: string; // Changed from ReactNode to string
}

const createNewsDate = (year: number, month: number, day: number) => new Date(year, month - 1, day);

export const newsArticles: NewsArticle[] = [
  {
    slug: "thu-bac-ho-gui-hoc-sinh-ngay-khai-truong-dau-tien",
    category: "khong-gian-van-hoa-hcm",
    date: createNewsDate(2024, 8, 26),
    author: "Ban Biên Tập",
    title: "Thư Bác Hồ gửi học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa",
    description: "Ngày 5/9/1945, chỉ ít ngày sau khi đất nước giành được độc lập, Chủ tịch Hồ Chí Minh đã gửi bức thư lịch sử đến các em học sinh nhân dịp khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
    image: { src: "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/Kh%C3%B4ng%20gian%20V%C4%83n%20ho%CC%81a%20H%C3%B4%CC%80%20Chi%CC%81%20Minh%2F545185619_1516425880488174_6127544855963415475_n.jpg?alt=media&token=a2426507-ce5a-497d-b08a-f596c3a054fd", hint: "President Ho Chi Minh" },
    content: `Ngày 5/9/1945, chỉ ít ngày sau khi đất nước giành được độc lập, Chủ tịch Hồ Chí Minh đã gửi bức thư lịch sử đến các em học sinh nhân dịp khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Đây không chỉ là một văn bản mang tính thời sự lúc bấy giờ, mà còn là một di sản tinh thần quý báu, góp phần hình thành nên không gian văn hóa Hồ Chí Minh trong đời sống dân tộc.

Bức thư ngắn gọn, giản dị nhưng chứa đựng nhiều tầng ý nghĩa sâu sắc. Trước hết, đó là tình cảm yêu thương tha thiết của Bác dành cho thiếu nhi. Người đã đặt các em học sinh vào vị trí trung tâm, coi thế hệ trẻ là mầm non của đất nước, là niềm tin và hy vọng cho tương lai dân tộc.

Thứ hai, bức thư khẳng định vai trò to lớn của tri thức và giáo dục. Câu nói bất hủ của Bác:

<blockquote>Non sông Việt Nam có trở nên tươi đẹp hay không… chính là nhờ một phần lớn ở công học tập của các em.</blockquote>

không chỉ là lời nhắn nhủ, mà còn là định hướng chiến lược cho sự phát triển đất nước: muốn đi lên, muốn sánh vai cùng bạn bè năm châu, dân tộc Việt Nam phải bắt đầu từ sự nghiệp giáo dục.

Thứ ba, bức thư còn mang trong mình giá trị văn hóa và nhân văn sâu sắc. Trong hoàn cảnh đất nước vừa thoát khỏi ách nô lệ, Bác đã khơi dậy niềm tự hào dân tộc, tinh thần tự chủ, đồng thời gieo vào lòng các em học sinh khát vọng xây dựng một nước Việt Nam độc lập, giàu mạnh, văn minh.

Gần 80 năm đã trôi qua, nhưng bức thư của Bác vẫn giữ nguyên giá trị, trở thành lời nhắc nhở thiêng liêng đối với các thế hệ học sinh Việt Nam. Đọc lại bức thư hôm nay, chúng ta càng thêm thấm thía tầm nhìn xa rộng, tình yêu thương bao la và niềm tin bất diệt của Bác đối với thế hệ trẻ.

Có thể khẳng định rằng, bức thư Bác Hồ gửi học sinh không chỉ là một văn kiện lịch sử, mà còn là một di sản văn hóa tinh thần vô giá, góp phần nuôi dưỡng không gian văn hóa Hồ Chí Minh trong tâm hồn mỗi người Việt Nam, đặc biệt là thế hệ học sinh – những chủ nhân tương lai của đất nước.

Toàn văn bức thư Bác Hồ gửi học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa

Các em học sinh,

Ngày hôm nay là ngày khai trường đầu tiên ở Nước Việt Nam Dân chủ Cộng hòa. Tôi đã tưởng tượng thấy trước mắt cái cảnh nhộn nhịp tưng bừng của ngày tựu trường ở khắp các nơi. Các em hẳn thấy đều vui vẻ vì sau mấy tháng giời nghỉ học, sau bao nhiêu cuộc chuyển biến khác thường, các em lại được gặp thầy gặp bạn. Nhưng sung sướng hơn nữa, từ giờ phút này giờ đi các em bắt đầu được nhận một nền giáo dục hoàn toàn Việt Nam. Trước đây cha anh các em, và có thể ngay chính các em nữa, đã phải chịu nhận một nền học vấn nô lệ, nghĩa là do một chế độ thực dân làm sai, tạo cho nó để thỏa một bọn thực dân người Pháp.

Ngày nay các em được cái may mắn cho cha anh là được hưởng một nền giáo dục mới mẻ, hoàn toàn Việt Nam. Các em được đi học để sau này giúp nước Việt Nam trở nên một nước hoàn toàn độc lập, một nước hoàn toàn dân chủ, một nước hoàn toàn giàu mạnh. Các em học sinh yêu quý, trong lúc cả nước đang sôi nổi trong công cuộc xây dựng nước nhà, các em cũng được may mắn hơn cha anh các em ngày trước là ngày nay các em được sống một cuộc đời hạnh phúc, một nền tự do độc lập, và nhất là được học hành đầy đủ.

Tôi mong các em cố gắng học tập, ngoan ngoãn, nghe thầy, yêu bạn. Sau 80 năm giời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần phải xây dựng lại cơ đồ mà tổ tiên đã để lại cho chúng ta, làm sao cho chúng ta theo kịp các nước khác trên hoàn cầu. Trong công cuộc kiến thiết đó, nước nhà trông mong chờ ở các em rất nhiều.

Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.

Đối riêng với các em lớn, tôi khuyên thêm một điều này: chúng ta đã đánh đuổi được thực dân, chúng ta đã giành được độc lập. Nhưng giặc Pháp còn lăm le quay lại. Chúng về và kẻ khác mạnh hơn mà trở lại. Tất nhiên chúng sẽ bị bại, vì tất cả các quốc dân đoàn kết chặt chẽ và được giáo dục đầy đủ sẽ thắng. Nhưng sự thắng lợi ấy sẽ chắc chắn và mau lẹ hơn nếu các em chuẩn bị từ bây giờ để sau này trở nên những người công dân tốt. Phải siêng năng học tập, siêng năng rèn luyện để mai sau các em có đủ tài, đủ đức phụng sự nước nhà, phục vụ đồng bào.

Các em học sinh yêu quý, ngày mai mở đầu một năm học mới. Tôi đã tưởng tượng thấy các em vui tươi đón ngày khai trường. Tôi tin chắc các em sẽ vui vẻ và vững vàng kết quả tốt đẹp.

Chào các em thân yêu.

Hồ Chí Minh`
  },
  {
    slug: "hoi-nghi-tong-ket-cuoi-cung-quan-tan-phu",
    category: "xay-dung-doi-vung-manh",
    date: createNewsDate(2025, 6, 13),
    author: "Ban Truyền Thông",
    title: "Liên Đội THCS Trần Quang Khải Vinh Dự Nhận Danh Hiệu Trong Hội Nghị Cuối Cùng Của Hội Đồng Đội Quận Tân Phú",
    description: "Vào chiều ngày 13 tháng 6 năm 2025, Hội đồng Đội Quận Tân Phú đã long trọng tổ chức Hội nghị Tổng kết công tác Đội và phong trào thiếu nhi năm học 2024–2025, khép lại một hành trình đầy dấu ấn.",
    image: { src: "https://placehold.co/600x400.png", hint: "award ceremony conference" },
    content: `Vào chiều ngày 13 tháng 6 năm 2025, Hội đồng Đội Quận Tân Phú đã long trọng tổ chức Hội nghị Tổng kết công tác Đội và phong trào thiếu nhi năm học 2024–2025.

Đặc biệt, hội nghị lần này mang ý nghĩa đặc biệt khi cũng là hội nghị cuối cùng của Hội đồng Đội Quận Tân Phú, trước khi quận chính thức sáp nhập và chuyển giao tổ chức Đội sang đơn vị hành chính mới. Đây là thời khắc khép lại một hành trình nhiều dấu ấn và yêu thương, đồng thời mở ra một chương mới cho tổ chức Đội trên địa bàn.

<blockquote>Trong khuôn khổ hội nghị, Liên đội Trường THCS Trần Quang Khải đã vinh dự nhận:\n- Danh hiệu “Liên đội mạnh” năm học 2024–2025\n- Giấy khen từ Ban Chấp hành Quận Đoàn Tân Phú với thành tích “Hoàn thành xuất sắc công tác Đội và phong trào thiếu nhi”.</blockquote>

Những thành tích đáng tự hào này là kết quả của cả một năm học đầy cố gắng, sáng tạo và đoàn kết từ tập thể Đội viên, giáo viên Tổng phụ trách và sự ủng hộ tích cực từ quý phụ huynh.

Liên đội Trần Quang Khải xin được gửi lời tri ân sâu sắc đến Hội đồng Đội Quận Tân Phú – tổ chức đã luôn đồng hành, dẫn dắt và truyền cảm hứng cho bao thế hệ thiếu nhi. Dù một nhiệm kỳ đã khép lại, những bài học và giá trị mà Hội đồng Đội để lại sẽ mãi là hành trang quý giá trên chặng đường phía trước.

Xin chúc cho tổ chức Đội trong mô hình hành chính mới sẽ tiếp tục phát triển, vững mạnh và không ngừng đổi mới.`
  },
  {
    slug: "lien-doi-manh-cap-quan-2024",
    category: "xay-dung-doi-vung-manh",
    date: createNewsDate(2024, 5, 28),
    author: "Ban Truyền Thông",
    title: "LIÊN ĐỘI THCS TRẦN QUANG KHẢI VINH DỰ NHẬN DANH HIỆU “LIÊN ĐỘI MẠNH” CẤP QUẬN",
    description: "Trong Hội nghị Tổng kết công tác Đội và phong trào thiếu nhi năm học 2023-2024, Liên đội THCS Trần Quang Khải đã xuất sắc được trao tặng danh hiệu 'Liên đội mạnh' cấp Quận.",
    image: { src: "https://placehold.co/600x400.png", hint: "student award ceremony" },
    content: `Sáng ngày 28/5/2024, tại Hội nghị Tổng kết công tác Đội và phong trào thiếu nhi năm học 2023-2024 do Hội đồng Đội quận Tân Phú tổ chức, Liên đội THCS Trần Quang Khải đã vinh dự được công nhận và trao tặng danh hiệu “Liên đội mạnh” cấp Quận.

Đây là thành quả xứng đáng cho những nỗ lực không ngừng nghỉ của tập thể đội viên, các anh chị phụ trách Chi đội và Ban chỉ huy Liên đội trong suốt một năm học vừa qua. Dưới sự chỉ đạo sát sao của Ban Giám hiệu nhà trường và Hội đồng Đội các cấp, Liên đội đã tổ chức thành công nhiều hoạt động, phong trào thi đua sôi nổi, ý nghĩa, thu hút đông đảo đội viên tham gia.

<blockquote>"Thành tích này không chỉ là niềm tự hào của toàn Liên đội, mà còn là động lực to lớn để chúng tôi tiếp tục phấn đấu, rèn luyện, giữ vững và phát huy hơn nữa những thành quả đã đạt được trong những năm học tiếp theo." - Thầy Trương Minh Đăng, Tổng phụ trách Đội chia sẻ.</blockquote>

Các hoạt động nổi bật trong năm học bao gồm phong trào “Nghìn việc tốt”, “Kế hoạch nhỏ”, các hoạt động đền ơn đáp nghĩa, chương trình “Thắp sáng ước mơ thiếu nhi Việt Nam”, các hội thi Nghi thức Đội, văn nghệ, thể thao… đã góp phần giáo dục toàn diện cho đội viên về đạo đức, trí tuệ, thể chất và kỹ năng sống.

Danh hiệu “Liên đội mạnh” cấp Quận một lần nữa khẳng định vị thế và chất lượng công tác Đội của trường THCS Trần Quang Khải, là nguồn cổ vũ to lớn để Liên đội tiếp tục là một trong những lá cờ đầu trong công tác Đội và phong trào thiếu nhi của quận Tân Phú.`,
  },
  {
    slug: "le-khai-giang-nam-hoc-moi",
    category: "su-kien-noi-bat",
    date: createNewsDate(2024, 9, 5),
    author: "Ban Biên Tập",
    title: "Lễ Khai Giảng Năm Học Mới",
    description: "Hòa chung không khí rộn ràng của cả nước, trường THCS Trần Quang Khải long trọng tổ chức Lễ Khai giảng năm học 2024-2025.",
    image: { src: "https://placehold.co/600x400.png", hint: "school opening ceremony" },
    content: "Nội dung chi tiết về Lễ Khai Giảng."
  },
  {
    slug: "hoi-trang-ram-yeu-thuong",
    category: "su-kien-noi-bat",
    date: createNewsDate(2024, 9, 15),
    author: "CLB Tình Nguyện",
    title: "Hội Trăng Rằm Yêu Thương",
    description: "Chương trình Trung thu với nhiều hoạt động ý nghĩa đã mang đến cho các em đội viên một đêm hội đáng nhớ.",
    image: { src: "https://placehold.co/600x400.png", hint: "mid-autumn festival children" },
    content: "Nội dung chi tiết về Hội Trăng Rằm."
  },
  {
    slug: "dai-hoi-lien-doi-thanh-cong-tot-dep",
    category: "xay-dung-doi-vung-manh",
    date: createNewsDate(2024, 10, 10),
    author: "Ban Chỉ Huy Liên Đội",
    title: "Đại Hội Liên Đội Nhiệm Kỳ Mới",
    description: "Đại hội đã diễn ra thành công tốt đẹp, bầu ra Ban chỉ huy Liên đội mới đầy nhiệt huyết và sáng tạo.",
    image: { src: "https://placehold.co/600x400.png", hint: "student council meeting" },
    content: "Nội dung chi tiết về Đại Hội Liên Đội."
  },
  {
    slug: "nhat-duoc-cua-roi",
    category: "cau-chuyen-dep",
    date: createNewsDate(2024, 10, 12),
    author: "Nguyễn Văn An",
    title: "Nhặt được của rơi, trả người đánh mất",
    description: "Hành động đẹp của em Nguyễn Văn An, học sinh lớp 8A1, xứng đáng là tấm gương sáng cho các bạn đội viên noi theo.",
    image: { src: "https://placehold.co/600x400.png", hint: "student returning lost wallet" },
    content: `Trên đường đi học về, em Nguyễn Văn An, học sinh lớp 8A1 đã nhặt được một chiếc ví chứa nhiều giấy tờ quan trọng và một số tiền lớn.

Không một chút do dự, An đã nhanh chóng mang chiếc ví đến đồn công an gần nhất để trình báo và nhờ các chú công an tìm người trả lại. Hành động của An là một tấm gương sáng về đức tính thật thà, trung thực, xứng đáng để các bạn đội viên khác noi theo.`
  },
   {
    slug: "khen-thuong-mang-non-tieu-bieu",
    category: "mang-non-tieu-bieu",
    date: createNewsDate(2024, 10, 20),
    author: "Ban Thi Đua",
    title: "Khen thưởng các tấm gương 'Măng non tiêu biểu'",
    description: "Liên đội tuyên dương các đội viên có thành tích xuất sắc trong học tập và rèn luyện trong học kỳ vừa qua.",
    image: { src: "https://placehold.co/600x400.png", hint: "students receiving certificates" },
    content: "Nội dung chi tiết về lễ khen thưởng."
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


export interface Author {
    name: string;
    title: string;
    avatar: string;
    bio: string;
}

export const authors: { [key: string]: Author } = {
    'Ban Truyền Thông': {
        name: 'Ban Truyền Thông',
        title: 'Phụ trách tin tức và sự kiện',
        avatar: 'https://placehold.co/100x100.png',
        bio: 'Ban Truyền Thông là cầu nối thông tin giữa Liên đội và các bạn đội viên, phụ huynh. Chúng tôi luôn nỗ lực để mang đến những tin tức nhanh chóng, chính xác và hấp dẫn nhất về mọi hoạt động của Nhà Xanh.',
    },
    'Ban Biên Tập': {
        name: 'Ban Biên Tập',
        title: 'Phụ trách nội dung',
        avatar: 'https://placehold.co/100x100.png',
        bio: 'Ban Biên Tập chịu trách nhiệm sáng tạo và biên soạn các nội dung sâu sắc, có giá trị giáo dục, góp phần làm phong phú thêm đời sống tinh thần của mỗi đội viên.',
    },
    'CLB Tình Nguyện': {
        name: 'CLB Tình Nguyện',
        title: 'Lan tỏa yêu thương',
        avatar: 'https://placehold.co/100x100.png',
        bio: 'Với trái tim nhiệt huyết, Câu lạc bộ Tình nguyện tổ chức các hoạt động vì cộng đồng, gieo mầm lòng nhân ái và tinh thần sẻ chia trong mỗi đội viên.',
    },
    'Ban Chỉ Huy Liên Đội': {
        name: 'Ban Chỉ Huy Liên Đội',
        title: 'Đại diện cho đội viên',
        avatar: 'https://placehold.co/100x100.png',
        bio: 'Là những đội viên ưu tú, được tín nhiệm bầu ra để dẫn dắt, tổ chức và thực hiện các phong trào, hoạt động của Liên đội, góp phần xây dựng một tập thể vững mạnh.',
    },
    'Nguyễn Văn An': {
        name: 'Nguyễn Văn An',
        title: 'Đội viên Chi đội 8A1',
        avatar: 'https://placehold.co/100x100.png',
        bio: 'Là một đội viên chăm ngoan, học giỏi và luôn tích cực tham gia các hoạt động của Liên đội. An là một tấm gương sáng về lòng thật thà và tinh thần trách nhiệm.',
    },
    'Ban Thi Đua': {
        name: 'Ban Thi Đua',
        title: 'Ghi nhận và khen thưởng',
        avatar: 'https://placehold.co/100x100.png',
        bio: 'Ban Thi Đua theo dõi, đánh giá và vinh danh các cá nhân, tập thể có thành tích xuất sắc, tạo động lực thi đua sôi nổi trong toàn Liên đội.',
    },
};

export interface Podcast {
  slug: string;
  episodeNumber: number;
  title: string;
  releaseDate: string;
  description: string;
  image: { src: string; hint: string };
  duration: string;
  audioSrc: string;
}

export const podcasts: Podcast[] = [
  {
    slug: "tap-1-loi-chao-tu-nha-xanh",
    episodeNumber: 1,
    title: "Tập 1: Lời chào từ Nhà Xanh",
    releaseDate: "15/08/2024",
    description: "Tập đầu tiên ra mắt, giới thiệu về kênh podcast và những câu chuyện sắp tới. Cùng khám phá những điều thú vị đang chờ đón bạn trong các số tiếp theo của Nhà Xanh Radio!",
    image: { src: "https://placehold.co/600x400.png", hint: "microphone podcast" },
    duration: "15:30",
    audioSrc: "https://file-examples.com/storage/fe92e8a5776269400262145/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    slug: "tap-2-ke-chuyen-tam-guong-bac-ho",
    episodeNumber: 2,
    title: "Tập 2: Kể chuyện tấm gương đạo đức Bác Hồ",
    releaseDate: "22/08/2024",
    description: "Cùng lắng nghe những câu chuyện cảm động và ý nghĩa về Bác. Mỗi câu chuyện là một bài học quý giá về đạo đức, lối sống giản dị và tình yêu thương bao la của Người.",
    image: { src: "https://placehold.co/600x400.png", hint: "history book" },
    duration: "22:10",
    audioSrc: "https://file-examples.com/storage/fe92e8a5776269400262145/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    slug: "tap-3-ky-nang-mem-cho-doi-vien",
    episodeNumber: 3,
    title: "Tập 3: Kỹ năng mềm cho đội viên",
    releaseDate: "29/08/2024",
    description: "Khám phá những kỹ năng cần thiết cho đội viên trong thời đại mới. Từ kỹ năng giao tiếp, làm việc nhóm đến giải quyết vấn đề, chúng ta sẽ cùng nhau trang bị hành trang vững chắc cho tương lai.",
    image: { src: "https://placehold.co/600x400.png", hint: "students teamwork" },
    duration: "18:45",
    audioSrc: "https://file-examples.com/storage/fe92e8a5776269400262145/2017/11/file_example_MP3_700KB.mp3",
  },
];
