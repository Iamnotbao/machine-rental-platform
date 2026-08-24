import { useSyncExternalStore } from 'react';
import { authStore } from '@/store/auth/auth.store';
export const useAuth = () => {
  const session = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot);
  return {
    session,
    user: session?.user ?? null,
    isAuthenticated: session !== null,
    signOut: () => authStore.setSession(null),
  };
};
