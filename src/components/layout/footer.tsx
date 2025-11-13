// SiteFooter.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Youtube, Mail, Globe, MapPin, Rss, LogIn } from 'lucide-react';
import PageViewCounter from './page-view-counter';
import { SubscribeForm } from './subscribe-form';

const footerLogoUrl =
  'https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/logo-nha-xanh.gif?alt=media&token=0a8db890-a563-4887-a333-6c61d14714eb';
const newFirebaseLogoUrl =
  'https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/firebase%20studio.png?alt=media&token=fe3c9a3d-6251-426e-a389-83379893dfe8';

// ✅ BỔ SUNG: DMCA badge
const dmcaBadgeUrl =
  'https://images.dmca.com/Badges/dmca-badge-w100-5x1-09.png'; // có thể thay bằng huy hiệu gắn ID của riêng bệ hạ

const sslBadgeUrl = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NiIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDk2IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzBFMkQ0QiIgZD0iTTAgMjMuOTk4QzAgMTAuNzQ0IDEwLjc0NSAwIDIzLjk5OCAwSDcyLjAwMkMyOC43NzQgMCAyMS4yNTYgMCAxNC40MjYgMi40MjYgOC4xMTQgNC42OTggMy45MDcgOC45MDYgMS40MyAxMy43MjFDLS4zMSA3LjU0NyAwIDkuNDYgMCAyMy45OThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQ4KSBzY2FsZSgxIC0xKSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMxMzQ1NjUiIGQ9Ik05NiAyNC4wMDFDkTYgMzcuMjU2IDg1LjI1NSA0OCA3Mi4wMDIgNDhIMjMuOTk4QzUyIDQ4IDc0LjE4NCA0OCA4MC41NzQgNDUuNTc1IDg2IDQzLjUgMTUuNDA3IDM5LjEgOTMuNTcgMzQuMjc4QzExMS42OSAyMi40NTMgOTYgMTAuNTM3IDk2IDI0LjAwMVoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzAuMDA4IDE2LjM3NWMwIDEuMjA4LS4zMjMgMi4zMjItLjk3IDMuMjQ0aC0yLjYwNGMtMS4zMjUgMC0yLjM5LTEuMDY3LTIuMzktMi4zOVYxNC45MmMwLTEuMzI0LjMwOC0yLjM5MiAxLjYzOC0yLjM5MiAxLjMzIDAgMS4wMzggMS4wNjggMS42MzggMi4zOTJ2Mi40NzloMS42ODhsMS4wMDQtMi4yOTVjLjI1LS41Ny42NC0uODc0IDEuMTMyLS44NzQuNzU4IDAgMS4yOCAxLjI5NCAxLjI4IDIuMjk0di0uMTR6bS01Ljk1Mi0xLjM2YzAgLjY3OC41NS44NDguOTYuODQ4aDEuMDg3bC0uNzMzLTEuNzczYzAtLjY0OC0uNDMzLS44MzgtLjg5NC0uODM4LS41MiAwLS40MTguNjc4LS40MTggMS43NjN6Ii8+CiAgICA8L2c+Cjwvc3ZnPg==`;

// Các liên kết
const discoveryLinks = [
  { name: 'Không Gian Văn Hóa HCM', href: '/hanh-trinh/khong-gian-van-hoa-hcm' },
  { name: 'Triển Lãm Chuyên Đề', href: '/vuon-uom/trien-lam-chuyen-de' },
  { name: 'Podcast Nhà Xanh', href: '/podcast' },
  { name: 'Chiêu Minh Hội Quán', href: '/balo/chieu-minh-hoi-quan' },
  { name: 'Thống kê Thi đua', href: '/statistics' },
  { name: 'Bình chọn', href: '/voting' },
] as const;

const infoLinks = [
  { name: 'Điều Khoản Sử Dụng', href: '/dieu-khoan-su-dung' },
  { name: 'Chính Sách Bảo Mật', href: '/chinh-sach-bao-mat' },
  { name: 'Chính sách Cookie', href: '/chinh-sach-cookie' },
  { name: 'Văn hoá ứng xử', href: '/van-hoa-ung-xu' },
  { name: 'Hỏi Đáp (FAQ)', href: '/hoi-dap' },
] as const;

const socialLinks = [
  { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
  { name: 'YouTube', href: '#', icon: <Youtube className="h-5 w-5" /> },
  { name: 'Email', href: 'mailto:contact@ldtqk.website', icon: <Mail className="h-5 w-5" /> },
  { name: 'Website', href: 'https://thcstranquangkhaitanphu.hcm.edu.vn/', icon: <Globe className="h-5 w-5" /> },
  { name: 'RSS', href: '/rss.xml', icon: <Rss className="h-5 w-5" /> },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cột 1: About & Contact */}
          <div className="space-y-4 md:col-span-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src={footerLogoUrl} alt="Footer Logo" width={60} height={60} unoptimized />
                <h3 className="text-xl font-bold text-white font-display">Liên Đội Trần Quang Khải</h3>
              </div>
              <p className="text-sm">Đoàn kết để Rèn luyện – Rèn luyện để Sáng tạo – Sáng tạo để Hội nhập số</p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 pt-2">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <p className="text-sm">94/3 Nguyễn Thế Truyện, Phường Tân Sơn Nhì, TP. Hồ Chí Minh</p>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-10 after:bg-primary">
                Kết Nối Với Chúng Tôi
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-primary transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.name}
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <PageViewCounter />
              </div>
            </div>
          </div>

          {/* Cột 2: Khám Phá */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-10 after:bg-primary">
              Khám Phá
            </h3>
            <ul className="space-y-2">
              {discoveryLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Thông tin & Subscribe */}
          <div className="md:mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-10 after:bg-primary">
                Thông Tin
              </h3>
              <ul className="space-y-2">
                {infoLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/login" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                    <LogIn className="h-4 w-4" />
                    Đăng nhập quản trị
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>

      <div className="animated-gradient-border" />

      <div className="border-t border-slate-700/0">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-center text-xs space-y-4 md:space-y-0">
          <div className="flex items-center gap-4">
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="DMCA.com Protection Status">
              <Image src={dmcaBadgeUrl} width={125} height={25} alt="DMCA.com Protection Status" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="SSL Secure Connection">
              <Image src={sslBadgeUrl} width={96} height={48} alt="SSL Secure Connection" />
            </Link>
          </div>

          <div className="flex flex-col md:items-end items-center">
            <p>
              © Bản Quyền 2025 Thuộc Về Liên Đội Trần Quang Khải. Phát Triển Bởi{' '}
              <Link href="/balo/chieu-minh-hoi-quan" className="font-semibold hover:underline">
                <span className="gradient-text bg-gradient-to-r from-pink-500 to-violet-500">Chiêu Minh Hội Quán</span>
              </Link>
              .
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <Image src={newFirebaseLogoUrl} alt="Firebase Logo" width={20} height={20} />
              <span>Phát triển trên nền tảng Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
