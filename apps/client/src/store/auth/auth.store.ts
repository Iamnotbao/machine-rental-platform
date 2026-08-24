import type { AuthSession } from '@/types/auth';
let session: AuthSession | null = null;
export const authStore = {
  isAuthenticated: () => session !== null,
  getSession: () => session,
  setSession: (next: AuthSession | null) => {
    session = next;
  },
};
