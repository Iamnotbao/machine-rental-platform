import { useTheme } from '@/app/providers/ThemeProvider';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { useAuth } from '@/hooks/useAuth';
import { notificationStore } from '@/store/notification/notification.store';
import styles from './topbar.module.css';
export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.topbar}>
      <button
        aria-label="Open navigation"
        className={styles.menu}
        onClick={onMenuClick}
        type="button"
      >
        ☰
      </button>
      <Breadcrumbs />
      <div className={styles.actions}>
        <button
          aria-label="Show notification"
          onClick={() =>
            notificationStore.push('info', 'Notifications are ready for future events.')
          }
          type="button"
        >
          ◌
        </button>
        <button
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          onClick={toggleTheme}
          type="button"
        >
          {theme === 'light' ? '◐' : '☀'}
        </button>
        <details>
          <summary>{user?.name ?? 'Admin'}</summary>
          <div className={styles.menuPanel}>
            <span>{user?.role ?? '—'}</span>
            <button onClick={signOut} type="button">
              Sign out
            </button>
          </div>
        </details>
      </div>
    </header>
  );
}
