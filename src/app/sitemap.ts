
import { MetadataRoute } from 'next';
import { newsArticles, podcasts, navLinks } from '@/lib/constants';

const siteUrl = 'https://ldtqk.website';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
      '/',
      '/chung-minh-la',
      '/hanh-trinh',
      '/hanh-trinh/lam-theo-loi-bac',
      '/hanh-trinh/xay-dung-doi-vung-manh',
      '/hanh-trinh/cung-tien-buoc-len-doan',
      '/hanh-trinh/khong-gian-van-hoa-hcm',
      '/vuon-uom',
      '/vuon-uom/cau-chuyen-dep',
      '/vuon-uom/mang-non-tieu-bieu',
      '/vuon-uom/trien-lam-chuyen-de',
      '/balo',
      '/balo/chieu-minh-hoi-quan',
      '/balo/ke-hoach',
      '/balo/tai-lieu',
      '/balo/ky-yeu',
      '/balo/infographic',
      '/lich-su-kien',
      '/lien-he',
      '/tin-tuc',
      '/podcast',
      '/gui-loi-chuc',
      '/hoi-dap',
      '/dieu-khoan-su-dung',
      '/chinh-sach-bao-mat',
      '/chinh-sach-cookie',
      '/van-hoa-ung-xu',
  ];

  const staticRoutes = staticPages.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '/' ? 1.0 : 0.8,
  }));

  const articleRoutes = newsArticles.map(article => ({
    url: `${siteUrl}/tin-tuc/${article.slug}`,
    lastModified: article.date,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const podcastRoutes = podcasts.map(podcast => ({
    url: `${siteUrl}/podcast/${podcast.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes, ...podcastRoutes];
}
