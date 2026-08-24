import { Navigate, Outlet } from 'react-router-dom';
import type { AdminRole } from '@/constants/role.constants';
import { ADMIN_ROUTES } from '@/constants/route.constants';
import { useAuth } from '@/hooks/useAuth';
export function RoleRoute({ allowedRoles }: { allowedRoles: readonly AdminRole[] }) {
  const { user } = useAuth();
  return user && allowedRoles.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate replace to={ADMIN_ROUTES.dashboard} />
  );
}
