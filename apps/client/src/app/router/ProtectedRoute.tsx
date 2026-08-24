import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
import { authStore } from '@/store/auth/auth.store';

export function ProtectedRoute() {
  const location = useLocation();
  if (!authStore.isAuthenticated())
    return <Navigate replace state={{ from: location }} to={ROUTES.login} />;
  return <Outlet />;
}
