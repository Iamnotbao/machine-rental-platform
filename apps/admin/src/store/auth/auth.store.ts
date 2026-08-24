import type { AdminSession } from '@/types/auth.types';

const demoSession: AdminSession = {
  user: { id: 'demo-admin', name: 'Morgan Lee', email: 'morgan@example.com', role: 'ADMIN' },
  accessToken: 'demo-session',
};
let session: AdminSession | null = demoSession;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());
export const authStore = {
  getSnapshot: () => session,
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  setSession: (next: AdminSession | null) => {
    session = next;
    notify();
  },
};
