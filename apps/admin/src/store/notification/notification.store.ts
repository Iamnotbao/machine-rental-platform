export type NotificationKind = 'success' | 'error' | 'warning' | 'info';
export interface Notification {
  id: string;
  kind: NotificationKind;
  message: string;
}
let notifications: Notification[] = [];
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());
export const notificationStore = {
  getSnapshot: () => notifications,
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  push: (kind: NotificationKind, message: string) => {
    notifications = [...notifications, { id: crypto.randomUUID(), kind, message }];
    notify();
  },
  dismiss: (id: string) => {
    notifications = notifications.filter((item) => item.id !== id);
    notify();
  },
};
