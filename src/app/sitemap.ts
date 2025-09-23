
import { MetadataRoute } from 'next'
import { navLinks } from '@/lib/constants';
import { getArticles } from '@/actions/posts';

function getAllPages(navLinks: any[]): string[] {
    let pages: string[] = [];
    navLinks.forEach(link => {
        if (link.href) {
            pages.push(link.href);
        }
        if (link.subLinks) {
            pages = pages.concat(getAllPages(link.subLinks));
        }
    });
    return pages;
}
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = 'https://ldtqk.website';

  const staticPages = getAllPages(navLinks)
    .filter(href => href !== '/') // remove base url if it exists, as it's added separately
    .map(route => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as 'monthly',
        priority: 0.8,
    }));
  
  const articles = await getArticles();
  const articlePages = articles.map(article => ({
    url: `${siteUrl}/tin-tuc/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as 'weekly',
    priority: 1.0,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...staticPages,
    ...articlePages,
  ]
}
