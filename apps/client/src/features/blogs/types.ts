export type BlogCategory = 'Hướng dẫn' | 'Hạ tầng' | 'Bảo mật' | 'Vận hành';

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  readMinutes: number;
  author: string;
  imageUrl: string;
  featured: boolean;
  tags: string[];
  content: string[];
}
