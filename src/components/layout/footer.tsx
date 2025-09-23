
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Youtube, Mail, Globe, MapPin, Rss, LogIn } from 'lucide-react';
import PageViewCounter from './page-view-counter';
import { SubscribeForm } from './subscribe-form';

const footerLogoUrl = "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/logo-nha-xanh.gif?alt=media&token=0a8db890-a563-4887-a333-6c61d14714eb";
const newFirebaseLogoUrl = "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/firebase%20studio.png?alt=media&token=fe3c9a3d-6251-426e-a389-83379893dfe8";

const discoveryLinks = [
  { name: 'Không Gian Văn Hóa HCM', href: '/hanh-trinh/khong-gian-van-hoa-hcm' },
  { name: 'Triển Lãm Chuyên Đề', href: '/vuon-uom/trien-lam-chuyen-de' },
  { name: 'Podcast Nhà Xanh', href: '/podcast' },
  { name: 'Chiêu Minh Hội Quán', href: '/balo/chieu-minh-hoi-quan' },
];

const infoLinks = [
  { name: 'Điều Khoản Sử Dụng', href: '/dieu-khoan-su-dung' },
  { name: 'Chính Sách Bảo Mật', href: '/chinh-sach-bao-mat' },
  { name: 'Chính sách Cookie', href: '/chinh-sach-cookie' },
  { name: 'Văn hoá ứng xử', href: '/van-hoa-ung-xu' },
  { name: 'Hỏi Đáp (FAQ)', href: '/hoi-dap' },
];

const socialLinks = [
    { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
    { name: 'YouTube', href: '#', icon: <Youtube className="h-5 w-5" /> },
    { name: 'Email', href: 'mailto:contact@ldtqk.website', icon: <Mail className="h-5 w-5" /> },
    { name: 'Website', href: 'https://thcstranquangkhaitanphu.hcm.edu.vn/', icon: <Globe className="h-5 w-5" /> },
    { name: 'RSS', href: '/rss.xml', icon: <Rss className="h-5 w-5" /> },
];

const sslBadgeUrl = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NiIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDk2IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzBFMkQ0QiIgZD0iTTAgMjMuOTk4QzAgMTAuNzQ0IDEwLjc0NSAwIDIzLjk5OCAwSDcyLjAwMkMyOC43NzQgMCAyMS4yNTYgMCAxNC40MjYgMi40MjYgOC4xMTQgNC42OTggMy45MDcgOC45MDYgMS40MyAxMy43MjFDLS4zMSA3LjU0NyAwIDkuNDYgMCAyMy45OThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQ4KSBzY2FsZSgxIC0xKSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMxMzQ1NjUiIGQ9Ik05NiAyNC4wMDFDkTYgMzcuMjU2IDg1LjI1NSA0OCA3Mi4wMDIgNDhIMjMuOTk4QzUyIDQ4IDc0LjE4NCA0OCA4MC41NzQgNDUuNTc1IDg2IDQzLjUgMTUuNDA3IDM5LjEgOTMuNTcgMzQuMjc4QzExMS42OSAyMi40NTMgOTYgMTAuNTM3IDk2IDI0LjAwMVoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzAuMDA4IDE2LjM3NWMwIDEuMjA4LS4zMjMgMi4zMjItLjk3IDMuMjQ0aC0yLjYwNGMtMS4zMjUgMC0yLjM5LTEuMDY3LTIuMzktMi4zOVYxNC45MmMwLTEuMzI0LjMwOC0yLjM5MiAxLjYzOC0yLjM5MiAxLjMzIDAgMS4wMzggMS4wNjggMS42MzggMi4zOTJ2Mi40NzloMS42ODhsMS4wMDQtMi4yOTVjLjI1LS41Ny42NC0uODc0IDEuMTMyLS44NzQuNzU4IDAgMS4yOCAxLjI5NCAxLjI4IDIuMjk0di0uMTR6bS01Ljk1Mi0xLjM2YzAgLjY3OC41NS44NDguOTYuODQ4aDEuMDg3bC0uNzMzLTEuNzczYzAtLjY0OC0uNDMzLS44MzgtLjg5NC0uODM4LS41MiAwLS40MTguNjc4LS40MTggMS43NjN6TTM1Ljk4IDExLjUyOWMxLjczNyAwIDIuNzkzIDEuMCAyLjc5MyAyLjUwOCAwIDEuNjEtLjgxOCAyLjMyMi0xLjkwNyAyLjMyMmgtLjc1Yy0uNDQ4IDAtLjcxNi4yNS0uNzE2LjY0OHYxLjgxOGgzLjI3MVYxMi45MmMwLS43OC0uMzgtMS4xNDgtMS4wMzQtMS4xNDgtLjU1MyAwLS45NjIuMjk3LTEuMTQ4LjczM2wtLjM1MiAxLjE2NWMtLjEwNC4zODItLjQ4NC44NC0uOTQ2LjgyLS40NDggMC0uNTg3LS40NTgtLjU4Ny0uODc0di0uNjAxaC0uNjExYy0xLjMyNSAwLTIuMzkgMS4wNjgtMi4zOTIgMi4zOTJ2Mi44NDRjMCAxLjMyNC4zMDggMi4zOTIgMS42MzggMi4zOTIgMS4zMyAwIDEuNjM4LTEuMDY4IDEuNjM4LTIuMzkydi0yLjQ2MWgxLjgwM2wxLjAwNCAyLjI5NWMuMjQ4LjU3LjY0Ljg3NCAxLjEzLjg3NC43NTggMCAxLjI4LS43MTUgMS4yOC0xLjc0NHYtMy44NDNjMC0uODQtLjI2NC0xLjM1Ni0uNzUtMS43NjItMS4wMzUtLjg1Ni0yLjg0My0xLjE5NS00LjQ0OC0xLjE5NS0yLjEyMiAwLTMuNzQgMS4yNzctMy43NCAzLjQgMCAyLjI5NSAxLjM2IDMuNjggMi45NDggNC4wNjIgMS43MzcuNDEyIDIuOTY1Ljc4MiAyLjk2NSAxLjY1NyAwIC44NC0uNzMyIDEuNTU4LTEuODUgMS41NTgtMS40MzYgMC0yLjMwNi0uODQtMi4zMDYtMi4yOTV2LS45MzZoLTEuNjA0Yy0uNTUyIDAtLjk2LjI5Ni0xLjE0OC43NDJsLTAuMzUyIDEuMTY1Yy0uMTA0LjM4Mi0uNDg0LjgzOS0uOTQ2LjgzOS0uNDQ4IDAtLjU4Ny0uNDU4LS41ODcuODc0di0uNzgyaC0uODk1Yy0xLjMyNSAwLTIuMzkgMS4wNjgtMi4zOS0yLjM5MnYyLjg0NGMwIDEuMzI0LjMwOCAyLjM5MiAxLjYzOCAyLjM5MiAxLjMzIDAgMS42MzggMS4wNjggMS42MzggMi4zOTJ2LTEuNzM0aDEuMTMyYy4yODMuODIyLjg1IDEuNDA3IDEuNjA0IDEuNzE0IDEuMjQuNSAzLjAyLjggNC42OTguODQgMi41NTYgMCA0LjY2LTEuNTQgNC42Ni0zLjk4IDAgMi4yOTUtMS41MzggMy41MDIgMy4yMDcgMy45ODQgMS4yMjIuMzUyIDIuNjcuNzMyIDIuNjcgMS42NTcgMCAuNzY0LS40NSAxLjI5NC0xLjI5NiAxLjI5NC0xLjA4NiAwLTEuODUtLjg1Ny0xLjjg1LTIuMDY1di0uOTM2aC0xLjYwNWMtLjU1MiAwLS45Ni4yOTctMS4xNDguNzQybC0uMzUyIDEuMTY1Yy0uMTA0LjM4MS0uNDg0LjgzOS0uOTQ2LjgzOS0uNDQ4IDAtLjU4Ny0uNDU4LS41ODcuODc0VjMyLjJoLTEuMDM0Yy0xLjMyNSAwLTIuMzkyLTEuMDY3LTIuMzkyLTIuMzkydi0yLjg0NGMwLTEuMzI0LjMwOC0yLjM5MiAxLjYzOC0yLjM5MiAxLjMzIDAgMS42MzggMS4wNjggMS42MzggMi4zOTJ2MS40ODloMS40MzdjLjI4Mi0uODIzLjgyMi0xLjQwOCAxLjYwNC0xLjcxNSAxLjE4LS40ODYgMi44NDMtLjg0IDQuNDQ4LS44NHptMjAgMS4wNTNoLTEuODA0di0xLjQ4OWMwLTEuMzI0LS4zMDgtMi4zOTItMS42MzgtMi4zOTItMS4zMyAwLTEuNjM4IDEuMDY4LTEuNjM4IDIuMzkydjEuNDg5aC0xLjgwMnYtMS40ODljMC0xLjMyNC0uMzA4LTIuMzkyLTEuNjM4LTIuMzkyLTEuMzMgMC0xLjYzOCAxLjA2OC0xLjYzOCAyLjM5MnYxLjQ4OWgtMS44MDV2LTEuNDg5YzAtMS4zMjQtLjMwOC0yLjM5Mi0xLjYzOC0yLjM5Mi0xLjMzIDAtMS42MzggMS4wNjgtMS42MzggMi4zOTJ2MS40ODloLTEuODA0di0yLjQzMWMwLTEuMzI0LS4zMDgtMi4zOTItMS4xMzgtMi4zOTItMS4zMyAwLTEuNjM4IDEuMDY4LTEuNjM4IDIuMzkydjIuNDMxaC0xLjgwMnYtMi4zMTFjMC0xLjMyNC0uMzA4LTIuMzkyLTEuNjM4LTIuMzkyLTEuMzMgMC0xLjYzOCAxLjA2OC0xLjYzOCAyLjM5MnYyLjQzMWgtMS44MDV2LTIuNDMxYzAtMS4zMjQtLjMwOC0yLjM5Mi0xLjYzOC0yLjM5Mi0xLjMzIDAtMS42MzggMS4wNjgtMS42MzggMi4zOTJ2Mi4xMWgtMS44MDJ2Mi4zOTJjMCAxLjMyNS4zMDggMi4zOTIgMS42MzggMi4zOTJzMS42MzgtMS4wNjcgMS42MzgtMi4zOTJ2LTIuMzkyaDEuODA1djIuMzkyYzAgMS4zMjUuMzA4IDIuMzkyIDEuNjM4IDIuMzkyczEuNjM4LTEuMDY3IDEuNjM4LTIuMzkydi0yLjM5MmgyLjgwMnYgMi4zOTJjMCAxLjMyNS4zMDggMi4zOTIgMS42MzggMi4zOTJzMS42MzgtMS4wNjcgMS42MzgtMi4zOTJ2LTIuMzkyaDEuODA2djIuMzkyYzAgMS4zMjUuMzA4IDIuMzkyIDEuNjM4IDIuMzkyczEuNjM4LTEuMDY3IDEuNjM4LTIuMzkydi0yLjM5MmgtMS44MDZ2Mi4zOTJjMCAxLjMyNS4zMDggMi4zOTIgMS42MzggMi4zOTJzMS4zODgtMS4wNjcgMS42MzgtMi4zOTJ2LTIuMzkyaDEuODA0djIuMzkyYzAgMS4zMjUuMzA4IDIuMzkyIDEuNjM4IDIuMzkyczEuNjM4LTEuMDY3IDEuNjM4LTIuMzkydi0yLjM5MmgyLjE0OXYyLjM5MmMwIDEuMzI1LjMwOCAyLjM5MiAxLjYzOCAyLjM5MnMxLjYzOC0xLjA2NyAxLjYzOC0yLjM5MnYtMi4zOTJoMi4xOHYyLjM5MmMwIDEuMzI1LjMwOCAyLjM5MiAxLjYzOCAyLjM5MnMxLjYzOC0xLjA2NyAxLjYzOC0yLjM5MnYtMi4zOTJoMi4xMzJ2Mi4zOTJjMCAxLjMyNS4zMDggMi4zOTIgMS42MzggMi4zOTJzMS42MzgtMS4wNjcgMS42MzgtMi4zOTJ2LTIuMzkyaDEuODU0djIuOTAyYzAgLjc4LjM4IDEuMTQ4IDEuMDM0IDEuMTQ4LjU1MyAwIC45NjItLjI5NyAxLjE0OC0uNzMzbC4zNTItMS4xNjVjLjEwNC0uMzgyLjQ4NC0uODQuOTQ2LS44NC40NDggMCAuNTg3LjQ1OC41ODcuODc0di42MDFoMS4xNjRjMS4zMjUgMC0yLjM5LTEuMDY3LTIuMzktMi4zOTJ2LTIuODQ0YzAtMS4zMjQtLjMwOC0yLjM5Mi0xLjYzOC0yLjM5Mi0xLjMzIDAtMS42MzggMS4wNjgtMS42MzggMi4zOTJ2MS44MDdoLTEuMThjLS4yODItLjgyMi0uODUtMS40MDctMS42MDQtMS43MTQtMS4yNC0uNS0zLjAyLS44NC00LjY5OC0uODQtMi41NTYgMC00LjY2IDEuNTQtNC4xNiAzLjk4IDAgMi4yOTUgMS41MzggMy41MDIgMy4yMDcgMy45ODQgMS4yMjIuMzUyIDIuNjcuNzMyIDIuNjcgMS42NTcgMCAuNzY0LS40NSAxLjI5NC0xLjI5NiAxLjI5NC0xLjA4NiAwLTEuODUtLjg1Ny0xLjjg1LTIuMDY1di0uOTM2aC0xLjYwNWMtLjU1MiAwLS45Ni4yOTctMS4xNDguNzQybC0uMzUyIDEuMTY1Yy0uMTA0LjM4MS0uNDg0LjgzOS0uOTQ2LjgzOS0uNDQ4IDAtLjU4Ny0uNDU4LS41ODcuODc0VjMyLjJoLTEuMDM0Yy0xLjMyNSAwLTIuMzkyLTEuMDY3LTIuMzkyLTIuMzkydi0yLjg0NGMwLTEuMzI0LjMwOC0yLjM5MiAxLjYzOC0yLjM5MiAxLjMzIDAgMS42MzggMS4wNjggMS42MzggMi4zOTJ2MS40ODloMS40MzdjLjI4Mi0uODIzLjgyMi0xLjQwOCAxLjYwNC0xLjcxNSAxLjE4LS40ODYgMi44NDMtLjg0IDQuNDQ4LS44NHptLTYzLjYyOC0xMS4zMWMwIDEuMzI1LS4zMDggMi4zOTMtMS42MzggMi4zOTNzLTEuNjM4LTEuMDY4LTEuNjM4LTIuMzkzVjExLjM4YzAtMS4zMjUuMzA4LTIuMzkzIDEuNjM4LTIuMzkzczEuNjM4IDEuMDY4IDEuNjM4IDIuMzkzdjIuMzkzek0yMS4yMTggOS43NDhjLS40MzIgMC0uNzMyLjM1OS0uNzMyLjk0N3YxMy4yMmMwIC41ODguMjk4Ljk0Ny43MzIuOTQ3LjQzMiAwIC43MzItLjM1OS43MzItLjk0N1YxMC42OTVjMC0uNTg4LS4yOTgtLjk0Ny0uNzMyLS45NDd6bS00LjM1NSAwaC0xLjk4djEzLjIyYzAgLjU4OC4yOTYgLjk0Ny43MzIuOTQ3LjQzMiAwIC4wNy0uMzU5LjczLS45NDdWMTMuMTdoMS4yNTh2LTEuMjU4aC0xLjI1OHYtMS4xODFoMS4yNTh2LTEuMjU3aC0xLjI1OHYtMS4xODJoMS4yNTh2LTEuMjU3aC0xLjI1OHYtMS4xODFoMS4yNThWMy40M2gtMS4yNThWMS45ODZoMS4yNThWMEgxOC4xNHYxLjI1N2gtMS4yNTh2MS4yNTdoMS4yNThWNS43N2gtMS4yNThWNy4wM2gxLjI1OHYxLjE4MWgtMS4yNThWOS40N2gxLjI1OHYxLjI1N2gtMS4yNThWMTEuOThoMS4yNTh2MS4xODFoLTEuMjU4djEuMjg0aDEuMjU4djEuMjU3aC0xLjI1OHYxLjE4MWgxLjI1OHYxLjI1N2gtMS4yNThWMjEuMmgxLjI1OHYxLjI1N2gtMS4yNTh2MS4zMjJoMS45OHYxLjU3NWgtMy4yNzFWLjk0N0wxNS42IDBILjM0M3YxLjU3NWgzLjI3MVYyNC4wM2MwIC43OC4zOCAxLjE0OCAxLjAzNCAxLjE0OC41NTMgMCAuOTYyLS4yOTcgMS4xNDgtLjczM2wuMzUyLTEuMTY1Yy4xMDQtLjM4Mi40ODQtLjg0Ljk0Ni0uODQuNDQ4IDAgLjU4Ny40NTguNTg3Ljg3NHYyLjg0NGMwIDEuMzI1LjMwOCAyLjM5MyAxLjYzOCAyLjM5M3MxLjYzOC0xLjA2OCAxLjYzOC0yLjM5M3YtMi44NDRjMC0uNTg4LS4yOTgtLjk0Ny0uNzMyLS45NDdzLS43MzIuMzU5LS43MzIuOTQ3djIuODQ0YzAgLjU4OC0uMjk3Ljk0Ny0uNzMyLjk0Ny0uNDMzIDAtLjczMi0uMzU5LS4zMi0uOTQ3di0yLjg0NGMwLTEuMzI1LS4zMDgtMi4zOTMtMS42MzgtMi4zOTNzLTEuNjM4IDEuMDY4LTEuNjM4IDIuMzkzdjIuODQ0YzAgLjU4OC4yOTguOTQ3LjczMi45NDcuNDMyIDAgLjczMi0uMzU5LjczMi0uOTQ3di0yLjg0NGMwLS41ODguMjk3LS45NDcuNzMyLS45NDcuNDMzIDAgLjczMi4zNTkuNzMyLjk0N3YyLjg0NGMwIDEuMzI1LjMwOCAyLjM5MiAxLjYzOCAyLjM5MnMxLjYzOC0xLjA2OCAxLjYzOC0yLjM5M3YtMi44NDRjMC0uNTg4LS4yOTgtLjk0Ny0uNzMyLS45NDdzLS43MzIuMzU5LS43MzIuOTQ3djIuODQ0YzAgLjU4OC0uMjk3Ljk0Ny0uNzMyLjk0Ny0uNDMzIDAtLjczMi0uMzU5LS43MzItLjk0N3YtMi4xNGMwLTEuMzI1LS4zMDgtMi4zOTMtMS42MzgtMi4zOTNzLTEuNjM4IDEuMDY4LTEuNjM4IDIuMzkzdjEzLjIyYzAgLjU4OC4yOTYgLjk0Ny43MzIuOTQ3LjQzMiAwIC43My0uMzU5LjczLS45NDdWOS43NDhjMC0uNTg4LS4yOTgtLjk0Ny0uNzMyLS45NDd6Ii8+CiAgICA8L2c+Cjwvc3ZnPg==`;
const dmcaBadgeUrl = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAxMjUgMjUiPgo8ZGVmcz4KPHBhdGggaWQ9ImEiIGQ9Ik02Mi41IDEyLjVDNjIuNSA1Ljg3MyA1Ni42MjcgMSA1MCAxUzM3LjUgNS44NzMgMzcuNSAxMi41IDQzLjM3MyAyNCA1MCAyNGw1MCAwQzExOC42MiAyNCAxMjQgMTguNjIzIDEyNCAxMi41IDEyNCA1Ljg3NyAxMTguNjI3IDAgMTEyLjUgMFoiLz4KPC9kZWZzPgo8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzcuNSkiPgo8dXNlIGZpbGw9IiMwQTUiIGhyZWY9IiNhIi8+CjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTYyLjUgMTIuNUM2Mi41IDYuNzQ4IDU2LjkyMSA0IDUwIDRTMzcuNSA2Ljc0OCAzNy41IDEyLjUgNDMuMDc5IDIxIDUwIDIxYzYuOTIxIDAgMTIuNS00LjI1MSAxMi41LTguNVoiLz4KPHRleHQgZm9udC1mYW1pbHk9IkhlbHZldGljYU5ldWUtTGlnaHQsIEhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iMzAwIiBmaWxsPSIjRkZGIj4KPHRzcGFuIHg9IjM5IiB5PSIxNyI+RE1DQS5jb20gUHJvdGVjdGlvbiBTdGF0dXM8L3RzcGFuPgo8L3RleHQ+CjwvZz4KPHBhdGggZD0iTTcgLjVIMHYyNGg3VjB6IiBmaWxsPSIjMDcwRjc3Ii8+CjxwYXRoIGQ9Ik0xOC4zMDMgMS42M0ExLjkgMS45IDAgMCAxIDIwLjIgMEgyNXYyNC44NzhoLTQuNDM0VjE0LjM2N2wtMy4xMjYgMy42M2MtLjI0LjI3Ni0uNDQ0LjM3OC0uNzEuMzc4LS4yNTggMC0uNDctLjExLS42OS0uMzU3bC0zLjIzLTQsODktLjIxLS4wMDUtLjAwNS0uMjM2LTEuNzEtLjU4LS4wMi0xLjcyLS4xNi0uODMtLjA3LS41My0uMTMtLjQxLS4xNC0uMzktLjE4LS40Ny0uMjItLjQyLS4yNC0uNDctLjI2LS40NS0uMjctLjQzLS4zLS41LS4zNC0uNC0uMzctLjQtLjQxLS40LS40LS40Mi0uNDEtLjM5LS40NC0uMzctLjQ2LS4zNC0uNDctLjMyLS40OS0uMy0uNTItLjI4LS41NC0uMjctLjU2LS4yNS0uNTgtLjI0LS42LS4yMi0uNjItLjItLjY0LS4xOC0uNjYtLjE3LS4xOC0uMTUtLjctLjEzLS43Mi0uMTEtLjczLS4xLS43NC0uMDgtLjc1ides0uNTUgeiIgZmlsbD0iI0ZGRiIvPgo8L2c+Cjwvc3ZnPg==`;


export function SiteFooter() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About & Contact */}
          <div className="space-y-4 md:col-span-2">
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image src={footerLogoUrl} alt="Footer Logo" width={60} height={60} unoptimized />
                  <h3 className="text-xl font-bold text-white font-display">Liên Đội Trần Quang Khải</h3>
                </div>
                <p className="text-sm">
                  Đoàn kết để Rèn luyện – Rèn luyện để Sáng tạo – Sáng tạo để Hội nhập số
                </p>
            </div>
             <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3 pt-2">
                    <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <p className="text-sm">
                       94/3 Nguyễn Thế Truyện, Phường Tân Sơn Nhì, TP. Hồ Chí Minh
                    </p>
                </div>
                 <h3 className="text-lg font-semibold text-white mb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-10 after:bg-primary">Kết Nối Với Chúng Tôi</h3>
                <div className="flex space-x-4">
                    {socialLinks.map(link => (
                        <Link key={link.name} href={link.href} className="text-slate-300 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
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

          {/* Column 2: Discovery Links */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-10 after:bg-primary">Khám Phá</h3>
            <ul className="space-y-2">
              {discoveryLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Info Links & Subscribe */}
           <div className="md:mx-auto">
             <div>
                <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-10 after:bg-primary">Thông Tin</h3>
                <ul className="space-y-2">
                  {infoLinks.map(link => (
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
      <div className="animated-gradient-border"></div>
      <div className="border-t border-slate-700/0">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-center text-xs space-y-4 md:space-y-0">
          <div className="flex items-center gap-4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image src={dmcaBadgeUrl} width={125} height={25} alt="DMCA.com Protection Status" />
            </Link>
             <Link href="#" target="_blank" rel="noopener noreferrer">
                 <Image src={sslBadgeUrl} width={96} height={48} alt="SSL Secure Connection" />
            </Link>
          </div>
          <div className="flex flex-col md:items-end items-center">
             <p>
                © Bản Quyền 2025 Thuộc Về Liên Đội Trần Quang Khải. Phát Triển Bởi{' '}
                <Link href="/balo/chieu-minh-hoi-quan" className="font-semibold hover:underline">
                  <span className="gradient-text bg-gradient-to-r from-pink-500 to-violet-500">
                    Chiêu Minh Hội Quán
                  </span>
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
