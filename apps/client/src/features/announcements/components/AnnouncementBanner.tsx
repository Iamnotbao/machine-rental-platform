import { useAnnouncements } from '@/features/announcements/hooks/useAnnouncements';
import styles from './AnnouncementBanner.module.css';

export function AnnouncementBanner() {
  const { data = [] } = useAnnouncements();

  if (!data.length) return null;

  const items = [...data, ...data];

  return (
    <section className={styles.banner} aria-label="Thông báo từ quản trị viên">
      <div className={styles.label}>ADMIN</div>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {items.map((item, index) => (
            <span className={styles.item} key={`${item.id}-${index}`}>
              <strong>{item.label}</strong>
              <span>{item.message}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
