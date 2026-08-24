import { apiClient } from '@/services/api/apiClient';
import type { UserProfile } from '@/types/user';
export const userService = { profile: () => apiClient<UserProfile>('/users/me') };
