import type { AuthSession } from '@/types/auth';

const STORAGE_KEY = 'machine-rental-mock-session';
const listeners = new Set<() => void>();

function readStoredSession(): AuthSession | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AuthSession) : null;
  } catch {
    return null;
  }
}

let session: AuthSession | null = readStoredSession();

function notify() {
  listeners.forEach((listener) => listener());
}

export const authStore = {
  isAuthenticated: () => session !== null,
  getSession: () => session,
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  setSession: (next: AuthSession | null) => {
    session = next;
    if (typeof window !== 'undefined') {
      if (next) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      else window.localStorage.removeItem(STORAGE_KEY);
    }
    notify();
  },
};
