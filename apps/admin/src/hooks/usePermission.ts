import type { Permission } from '@/constants/permission.constants';
import { useAuth } from '@/hooks/useAuth';
import { hasPermission } from '@/utils/permissions';
export const usePermission = (permission: Permission): boolean => {
  const { user } = useAuth();
  return user ? hasPermission(user.role, permission) : false;
};
