import { Link } from 'react-router-dom';
import { APP_NAME } from '@/constants/app.constants';
import { ADMIN_ROUTES } from '@/constants/route.constants';
import { AdminNavigation } from '@/components/navigation/AdminNavigation';
import styles from './sidebar.module.css';
export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      <button
        aria-label="Close navigation"
        className={`${styles.backdrop} ${isOpen ? styles.visible : ''}`}
        onClick={onClose}
        type="button"
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.brandRow}>
          <Link className={styles.brand} to={ADMIN_ROUTES.dashboard}>
            {APP_NAME}
          </Link>
          <button
            aria-label="Close navigation"
            className={styles.close}
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>
        <p className={styles.workspace}>Operations workspace</p>
        <AdminNavigation onNavigate={onClose} />
        <footer className={styles.footer}>
          <span className={styles.status} /> Systems ready
        </footer>
      </aside>
    </>
  );
}
