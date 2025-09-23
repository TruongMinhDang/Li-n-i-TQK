
export interface NewsArticle {
  id: string;
  slug: string;
  category: string;
  date: Date;
  author: string;
  title: string;
  description: string;
  image: { src: string; path: string; hint: string };
  content: string;
}
