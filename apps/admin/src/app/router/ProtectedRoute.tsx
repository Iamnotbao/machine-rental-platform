import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ADMIN_ROUTES } from '@/constants/route.constants';
import { useAuth } from '@/hooks/useAuth';
export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace state={{ from: location }} to={ADMIN_ROUTES.login} />
  );
}
