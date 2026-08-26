import { Link } from 'react-router-dom';
import type { BlogArticle } from '@/features/blogs/types';
import { ROUTES } from '@/constants/route.constants';
import styles from './BlogCard.module.css';

const dateFormatter = new Intl.DateTimeFormat('vi-VN', { day:'2-digit', month:'2-digit', year:'numeric' });

export function BlogCard({ article }: { article: BlogArticle }) {
  const href = ROUTES.blogDetail.replace(':slug', article.slug);
  return (
    <article className={styles.card}>
      <Link className={styles.imageLink} to={href}><img src={article.imageUrl} alt="" /></Link>
      <div className={styles.body}>
        <div className={styles.meta}><span>{article.category}</span><span>{article.readMinutes} phút đọc</span></div>
        <h3><Link to={href}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <div className={styles.footer}><time dateTime={article.publishedAt}>{dateFormatter.format(new Date(article.publishedAt))}</time><Link to={href}>Đọc bài →</Link></div>
      </div>
    </article>
  );
}
