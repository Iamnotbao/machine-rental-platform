import { blogArticles } from '@/features/blogs/data/blog.mock';
import type { BlogArticle } from '@/features/blogs/types';

const wait = (milliseconds = 180) => new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

export const blogUiService = {
  async list(): Promise<BlogArticle[]> {
    await wait();
    return blogArticles;
  },
  async detail(slug: string): Promise<BlogArticle | undefined> {
    await wait();
    return blogArticles.find((article) => article.slug === slug);
  },
  async related(articleId: string, category: BlogArticle['category'], limit = 3): Promise<BlogArticle[]> {
    await wait(120);
    const sameCategory = blogArticles.filter((article) => article.id !== articleId && article.category === category);
    const fallback = blogArticles.filter((article) => article.id !== articleId && article.category !== category);
    return [...sameCategory, ...fallback].slice(0, limit);
  },
};
