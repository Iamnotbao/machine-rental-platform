import { useSyncExternalStore } from 'react';
import { notificationStore } from '@/store/notification/notification.store';
import styles from './toast.module.css';
export function ToastRegion() {
  const notifications = useSyncExternalStore(
    notificationStore.subscribe,
    notificationStore.getSnapshot,
  );
  return (
    <div aria-live="polite" className={styles.region}>
      {notifications.map((notification) => (
        <button
          className={`${styles.toast} ${styles[notification.kind]}`}
          key={notification.id}
          onClick={() => notificationStore.dismiss(notification.id)}
          type="button"
        >
          {notification.message}
        </button>
      ))}
    </div>
  );
}
