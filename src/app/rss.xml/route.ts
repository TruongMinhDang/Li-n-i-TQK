import { newsArticles } from '@/lib/constants';

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}

export async function GET() {
    const siteUrl = 'https://ldtqk.website';

    const feedItems = newsArticles
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((article) => {
            return `
        <item>
          <title>${escapeXml(article.title)}</title>
          <link>${siteUrl}/tin-tuc/${article.slug}</link>
          <description>${escapeXml(article.description)}</description>
          <pubDate>${article.date.toUTCString()}</pubDate>
          <guid isPermaLink="true">${siteUrl}/tin-tuc/${article.slug}</guid>
        </item>
      `;
        })
        .join('');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Liên đội THCS Trần Quang Khải</title>
    <link>${siteUrl}</link>
    <description>Website chính thức của Liên Đội THCS Trần Quang Khải</description>
    <language>vi-vn</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${feedItems}
  </channel>
</rss>`;

    return new Response(rssFeed, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
