
import { newsArticles, podcasts } from './constants';

interface SearchableContent {
  title: string;
  description: string;
  url: string;
  keywords: string;
  content?: string;
}

export const knowledgeBase: SearchableContent[] = [
  // User-provided knowledge
  {
    title: 'Tiểu sử danh nhân Trần Quang Khải',
    description: 'Thông tin về cuộc đời và sự nghiệp của Chiêu Minh Đại Vương Trần Quang Khải, người mà trường ta vinh dự được mang tên.',
    url: '/chung-minh-la',
    keywords: 'trần quang khải là ai tiểu sử lịch sử chiêu minh đại vương',
    content: `Trần Quang Khải sinh vào tháng 10 âm lịch năm Thiên Ứng Chính Bình thứ 10 (1241). Ông là con thứ 3 của vua Trần Thái Tông và Thuận Thiên Hoàng hậu, ông cũng là em của vua Trần Thánh Tông.
- Năm Nguyên Phong thứ 8 (1258), ông được phong tước Chiêu Minh Đại Vương.
- Năm Thiệu Long thứ 4 (1261), ông được phong làm Thái Úy khi mới 20 tuổi.
- Năm Thiệu Long thứ 8 (1265), ông được phong làm Thượng Tướng và được điều vào trấn thủ Nghệ An.
- Năm Thiệu Long thứ 14 (1271), ông được phong Tướng Quốc Thái Úy, trở thành đại thần đứng đầu triều Trần.
- Năm Thiệu Bảo thứ 4 (1282), ông được phong làm Thượng Tướng Thái Sư nắm cả quyền dân sự và quân sự.
Trần Quang Khải là vị tướng tài, đóng góp nhiều công lao cho cuộc kháng chiến chống quân Nguyên lần hai (1285) và lần ba (1288).
Trong cuộc kháng chiến chống quân Nguyên lần thứ hai (1285), Trần Quang Khải được điều vào trấn thủ Nghệ An. Trước thế giặc mạnh, Trần Quang Khải cho quân đóng giữ các nơi hiểm yếu, quân Nguyên tiến đánh không được bèn rút ra bắc. Trần Quang Khải báo tin cho triều đình phục đánh quân Nguyên ở cửa Hàm Tử, diệt được 5 vạn quân Nguyên.
Quân Nguyên do Thoát Hoan chỉ huy đóng ở Thăng Long, còn thuyền chiến thì đóng ở bến Chương Dương. Trần Quang Khải chỉ huy quân cùng Phạm Ngũ Lão và Trần Quốc Toản tấn công quân Nguyên ở Chương Dương và đuổi chúng chạy vào thành Thăng Long. Ông cho phục binh đóng gần thành Thăng Long. Thoát Hoan đem quân ra đánh, bị phục binh nhà Trần đánh bại, chạy về nước (5/1285).
Ngoài những chiến công quân sự trong hai lần kháng chiến chống quân Nguyên xâm lược. Ông còn là một nhà thơ nổi tiếng. Năm 1278, khi Sài Thung đi sứ sang nước ta, Sài thung hống hách ngạo mạn khiến triều đình bất bình. Khi Sài Thung về nước, Trần Quang Khải cò làm bài thơ tặng Sài Thung trong đó có câu:
“Vị thẩm hà thời trùng đỗ diện. Ân cần ác thủ tự huyên lương.” (Chưa biết ngày nào cùng tái ngộ. Để ân cần tay nắm chuyện hàn huyên)
Hai câu thơ nói lên tài ngoại giao khéo léo, sự điềm tĩnh trước âm mưu, sự hống hách của giặc phương Bắc.
Khi đánh tan quân Nguyên lần thứ hai (1285), ông đã sáng tác bài thơ bài Tụng giá hoàn kinh sư nhân lúc hộ tống vua Trần về Thăng Long:
“Đoạt sáo Chương Dương độ, Cầm hồ Hàm Tử quan. Thái bình tu trí lực, Vạn cổ thử giang san” (Bến Chương Dương cướp giáo. Cửa Hàm Tử bắt thù. Thái bình nên gắng sức, Non nước cũ muôn thu)
Ngoài ra ông còn sáng tác nhiều bài thơ trong đó nổi tiếng là tập thơ “Lạc đạo” nay đã thất truyền chỉ còn lưu lại vài bài thơ như: Phúc hưng viên, Lưu gia độ, Giã thự, Xuân nhật hữu cảm nói lên cảnh thái bình của nước ta thời Trần.
Ngày 26 tháng 7 năm 1294 nhằm 3 tháng 7 âm lịch năm Hưng Long thứ 2. Chiêu Minh Đại Vương Trần Quang Khải qua đời tại thái ấp Độc Lập, phủ Thiên trường (Nam Định) thọ 53 tuổi. Ông được tôn làm thành hoàng của làng Cao Đài
Với những chiến công hiển hách. Chiêu Minh Đại Vương Trần Quang Khải được người đời vinh danh. Lúc sinh thời, Vua Trần Thánh Tông có bài thơ ca ngợi công lao của ông:
“Nhất đại công danh thiên hạ hữu, Lưỡng triều trung hiếu thế gian vô” (Công danh một thưở còn bao kẻ, Trung hiếu hai triều chỉ một ông.)`
  },
  {
    title: 'Hồ sơ toàn diện Liên Đội Trần Quang Khải (LĐTQK)',
    description: 'Thông tin tổng quan, tổ chức, nhân sự, hoạt động và thành tích của Liên Đội Trần Quang Khải.',
    url: '/chung-minh-la',
    keywords: 'giới thiệu liên đội thành tích hoạt động tổ chức nhân sự chiêu minh hội quán',
    content: `1. GIỚI THIỆU TỔNG QUAN: Tên đầy đủ: Liên Đội Trường Trung học cơ sở Trần Quang Khải. Ngày thành lập: 05/12/2011. Địa chỉ: 94/3 Nguyễn Thế Truyện, phường Tân Sơn Nhì, quận Tân Phú, TP.HCM. Tên gọi truyền thống: “Nhà Xanh”. Mục tiêu: “Lấy 5 điều Bác Hồ dạy làm kim chỉ nam rèn luyện, giúp thiếu nhi học tập – vui chơi – rèn luyện kỹ năng sống và thực hiện quyền, bổn phận theo Công ước LHQ về Quyền Trẻ Em.”
2. TỔ CHỨC – NHÂN SỰ: Liên Đội trưởng Khóa XIII (2024 – 2025): Nguyễn Lê Khánh Tâm. Liên Đội trưởng Khóa XII (2023 – 2024): Trịnh Hoàng Đông Nghi. Tổng phụ trách: Thầy Trương Minh Đăng – giáo viên, nhà sáng lập Chatbot Chiêu Minh và linh vật cú xanh Chiêu Minh. Quy mô năm học 2023 – 2024: 32 lớp, 1271 học sinh.
3. LINH VẬT – BIỂU TƯỢNG: Tên: Chiêu Minh (con cú xanh). Ngày sinh: 06/7/2011. Hình tượng: Cú xanh thông minh, cần cù, ghét ác – yêu thiện. Tác giả: Thầy Đăng. Ý nghĩa: “Chiêu Minh” đồng nghĩa với “sáng suốt, minh bạch, trí tuệ.”
4. CHIÊU MINH HỘI QUÁN: Thành lập: 2020. Mục đích: Sân chơi kỹ năng, sáng tạo, học tập cho đội viên. Có 4 ban chuyên môn: Ban Truyền thông, Ban Văn nghệ, Ban Học thuật, Ban Kỹ năng.
5. HOẠT ĐỘNG TIÊU BIỂU: Học tập (Học nhóm, Hoa điểm 10), Văn nghệ – Thể thao (Thanh âm Nhà Xanh, Vũ điệu măng non), Cộng đồng – từ thiện (Nụ cười hồng, Vì người bạn ngoại thành), Giáo dục kỹ năng – truyền thống (Không gian văn hóa Hồ Chí Minh, tọa đàm, hoạt động trải nghiệm).
6. SÁNG KIẾN – MÔ HÌNH NỔI BẬT: 2021–2022: “Duy trì sân chơi trong dịch bệnh”. 2022–2023: “Sử dụng Confession để bảo vệ – chăm sóc thiếu nhi”. 2023–2024: “Nâng cao năng lực số cho thiếu nhi”. 2024–2025: Ra mắt website định danh số ldtqk.id.vn, là Liên Đội đầu tiên toàn quốc sở hữu website định danh số.
7. THÀNH TÍCH – KHEN THƯỞNG: Bằng khen Thành Đoàn TP.HCM (2015-2016), Bằng khen Trung ương Đoàn TNCS HCM (2016-2017), Cờ thi đua Quận Đoàn Tân Phú (2020-2021), liên tục là Liên Đội Mạnh, Giải ba Nghi thức Đội thành phố (2023-2024), Thủ khoa tuyển sinh 10 TP.HCM (2023-2024).
8. CÁC KÊNH TRUYỀN THÔNG: Website trường: thcstranquangkhaitanphu.hcm.edu.vn; Website Liên Đội: ldtqk.id.vn | ldtqk.website; Fanpage: Liên Đội Trần Quang Khải.
9. ĐỊNH HƯỚNG TƯƠNG LAI: Tiếp tục duy trì danh hiệu Liên Đội Mạnh, đẩy mạnh chuyển đổi số, phát triển CLB, xây dựng văn hóa học đường, trở thành mô hình điểm cấp Thành phố.`
  },

  // Main pages from original knowledge base
  { title: 'Nhà Xanh', description: 'Trang chủ của Liên đội THCS Trần Quang Khải.', url: '/', keywords: 'trang chủ nhà xanh' },
  { title: 'Chúng Mình Là', description: 'Tìm hiểu về lịch sử, sứ mệnh và tầm nhìn của Liên đội.', url: '/chung-minh-la', keywords: 'giới thiệu về chúng tôi lịch sử trường' },
  { title: 'Liên hệ', description: 'Thông tin liên hệ của Liên đội.', url: '/lien-he', keywords: 'liên hệ địa chỉ email điện thoại' },
  { title: 'Gửi lời chúc', description: 'Gửi những lời chúc tốt đẹp đến bạn bè và thầy cô.', url: '/gui-loi-chuc', keywords: 'gửi lời chúc' },
  { title: 'Lịch sự kiện', description: 'Theo dõi các hoạt động sắp tới của Liên đội.', url: '/lich-su-kien', keywords: 'lịch sự kiện hoạt động' },
  { title: 'Hỏi Đáp (FAQ)', description: 'Những câu hỏi bạn quan tâm về hoạt động của Liên đội.', url: '/hoi-dap', keywords: 'faq câu hỏi thường gặp' },
  { title: 'Podcast Nhà Xanh Radio', description: 'Kênh podcast chính thức của Liên đội.', url: '/podcast', keywords: 'radio podcast nhà xanh' },

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
  { title: 'Chiêu Minh Hội Quán', description: 'Nơi giao lưu, học hỏi và chia sẻ kinh nghiệm của các thế hệ chỉ huy Đội. Chiêu Minh có nghĩa là người lãnh đạo sáng suốt, kế thừa và phát huy những giá trị tốt đẹp.', url: '/balo/chieu-minh-hoi-quan', keywords: 'chỉ huy đội giao lưu chiêu minh nghĩa là gì' },
  { title: 'Kế Hoạch', description: 'Tổng hợp các kế hoạch, chương trình hành động của Liên đội.', url: '/balo/ke-hoach', keywords: 'kế hoạch năm học' },
  { title: 'Tài Liệu', description: 'Kho tài liệu, văn bản và biểu mẫu cần thiết cho hoạt động Đội.', url: '/balo/tai-lieu', keywords: 'điều lệ đội biểu mẫu' },
  { title: 'Kỷ Yếu', description: 'Lưu giữ những khoảnh khắc, những kỷ niệm đẹp.', url: '/balo/ky-yeu', keywords: 'kỷ yếu trại hè' },
  { title: 'Infographic', description: 'Thông tin, kiến thức được trình bày một cách trực quan.', url: '/balo/infographic', keywords: 'infographic an toàn mạng' },

  // Add news articles to knowledge base
  ...newsArticles.map(article => ({
      title: `Bài viết: ${article.title}`,
      description: article.description,
      url: `/tin-tuc/${article.slug}`,
      keywords: `tin tức ${article.category} ${article.author}`,
      content: article.content,
  })),

  // Add podcasts to knowledge base
  ...podcasts.map(podcast => ({
      title: `Podcast: ${podcast.title}`,
      description: podcast.description,
      url: `/podcast/${podcast.slug}`,
      keywords: `podcast radio tập ${podcast.episodeNumber}`,
      content: podcast.description,
  }))
];
