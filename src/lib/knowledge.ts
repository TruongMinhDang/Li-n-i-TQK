
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
];
