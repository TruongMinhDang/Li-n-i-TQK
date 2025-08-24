export const navLinks = [
  { name: 'Nhà Xanh', href: '/' },
  { name: 'Chúng Mình Là', href: '/about' },
  { 
    name: 'Hành Trình', 
    href: '/journey',
    subLinks: [
      { name: 'Lịch sử', href: '/about' },
      { name: 'Hoạt động', href: '/journey' },
      { name: 'Sự kiện', href: '/events' },
    ]
  },
  { 
    name: 'Vườn Ươm', 
    href: '/garden',
    subLinks: [
       { name: 'Gương sáng đội viên', href: '/garden' },
       { name: 'Gửi lời chúc', href: '/wishes' },
    ]
  },
  { 
    name: 'Balo', 
    href: '/backpack',
    subLinks: [
      { name: 'Tài liệu', href: '/backpack' },
    ]
  },
  { name: 'Liên hệ', href: '/contact' },
];
