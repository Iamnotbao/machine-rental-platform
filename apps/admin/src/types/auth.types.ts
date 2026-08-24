import type { AdminRole } from '@/constants/role.constants';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
}

export interface AdminSession {
  user: AdminUser;
  accessToken: string;
}
