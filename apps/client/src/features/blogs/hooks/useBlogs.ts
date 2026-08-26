import { useQuery } from '@tanstack/react-query';
import { blogUiService } from '@/features/blogs/services/blog-ui.service';
import type { BlogCategory } from '@/features/blogs/types';

export function useBlogArticles() {
  return useQuery({ queryKey: ['client-blog-articles'], queryFn: () => blogUiService.list() });
}

export function useBlogArticle(slug: string) {
  return useQuery({ queryKey: ['client-blog-article', slug], queryFn: () => blogUiService.detail(slug), enabled: Boolean(slug) });
}

export function useRelatedBlogArticles(articleId: string, category: BlogCategory, enabled: boolean) {
  return useQuery({
    queryKey: ['client-blog-related', articleId, category],
    queryFn: () => blogUiService.related(articleId, category),
    enabled,
  });
}
