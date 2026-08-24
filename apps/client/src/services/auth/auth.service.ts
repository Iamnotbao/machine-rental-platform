import { apiClient } from '@/services/api/apiClient';
import type { AuthSession } from '@/types/auth';
export const authService = { currentSession: () => apiClient<AuthSession>('/auth/session') };
