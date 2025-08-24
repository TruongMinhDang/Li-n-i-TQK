
export const navLinks = [
  { name: 'Nhà Xanh', href: '/' },
  { name: 'Chúng Mình Là', href: '/about' },
  { 
    name: 'Hành Trình', 
    href: '/journey',
    subLinks: [
      { name: 'Làm theo lời Bác', href: '/journey/lam-theo-loi-bac' },
      { name: 'Xây Dựng Đội Vững mạnh', href: '/journey/xay-dung-doi-vung-manh' },
      { name: 'Cùng tiến bước lên đoàn', href: '/journey/cung-tien-buoc-len-doan' },
    ]
  },
  { 
    name: 'Vườn Ươm', 
    href: '/garden',
    subLinks: [
       { name: 'Mỗi tuần một câu chuyện đẹp', href: '/garden/cau-chuyen-dep' },
       { name: 'Măng non tiêu biểu', href: '/garden/mang-non-tieu-bieu' },
    ]
  },
  { 
    name: 'Balo', 
    href: '/backpack',
    subLinks: [
      { name: 'Chiêu minh hội quán', href: '/backpack/chieu-minh-hoi-quan' },
      { name: 'Kế hoạch', href: '/backpack/ke-hoach' },
      { name: 'Tài liệu', href: '/backpack/tai-lieu' },
      { name: 'Kỷ yếu', href: '/backpack/ky-yeu' },
      { name: 'Infographic', href: '/backpack/infographic' },
    ]
  },
  { name: 'Liên hệ', href: '/contact' },
];
