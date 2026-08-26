import type { AuthSession } from '@/types/auth';

const STORAGE_KEY = 'machine-rental-mock-session';

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

export const authStore = {
  isAuthenticated: () => session !== null,
  getSession: () => session,
  setSession: (next: AuthSession | null) => {
    session = next;
    if (typeof window === 'undefined') return;

    if (next) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    else window.localStorage.removeItem(STORAGE_KEY);
  },
};
