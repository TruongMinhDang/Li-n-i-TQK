import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Youtube, Mail, Globe, MapPin } from 'lucide-react';
import PageViewCounter from './page-view-counter';

const footerLogoUrl = "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/logo-nha-xanh.gif?alt=media&token=0a8db890-a563-4887-a333-6c61d14714eb";

const usefulLinks = [
  { name: 'Podcast', href: '#' },
  { name: 'Điều Khoản Sử Dụng', href: '#' },
  { name: 'Chính Sách Bảo Mật', href: '#' },
  { name: 'Hỏi Đáp (FAQ)', href: '#' },
];

const socialLinks = [
    { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
    { name: 'YouTube', href: '#', icon: <Youtube className="h-5 w-5" /> },
    { name: 'Email', href: 'mailto:contact@ldtqk.website', icon: <Mail className="h-5 w-5" /> },
    { name: 'Website', href: 'https://ldtqk.website', icon: <Globe className="h-5 w-5" /> },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src={footerLogoUrl} alt="Footer Logo" width={60} height={60} unoptimized />
              <h3 className="text-xl font-bold text-white font-display">Liên Đội Trần Quang Khải</h3>
            </div>
            <p className="text-sm">
              Là một tập thể Đoàn kết - Sáng tạo - Năng động, luôn đi đầu trong các hoạt động, phong trào của nhà trường và thành phố.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-10 after:bg-primary">Liên Kết Hữu Ích</h3>
            <ul className="space-y-2">
              {usefulLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-10 after:bg-primary">Kết Nối Với Chúng Tôi</h3>
            <div className="flex space-x-4 mb-4">
                {socialLinks.map(link => (
                    <Link key={link.name} href={link.href} className="text-slate-300 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        {link.icon}
                        <span className="sr-only">{link.name}</span>
                    </Link>
                ))}
            </div>
             <div className="flex items-start gap-3 pt-2">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <p className="text-sm">
                   94/3 Nguyễn Thế Truyện, Phường Tân Sơn Nhì, TP. Hồ Chí Minh
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className="animated-gradient-border"></div>
      <div className="border-t border-slate-700/0">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-center text-xs space-y-2 md:space-y-0">
          <p>
            © Bản Quyền 2025 Thuộc Về Liên Đội Trần Quang Khải. Phát Triển Bởi{' '}
            <Link href="/balo/chieu-minh-hoi-quan" className="font-semibold hover:underline">
              <span className="gradient-text bg-gradient-to-r from-pink-500 to-violet-500">
                Chiêu Minh Hội Quán
              </span>
            </Link>
            .
          </p>
          <div className="flex flex-col md:items-end items-center">
            <p>Thiết Kế Dựa Trên Nền Tảng Firebase</p>
            <PageViewCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}
