import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
import { authStore } from '@/store/auth/auth.store';

export function PublicRoute() {
  return authStore.isAuthenticated() ? <Navigate replace to={ROUTES.home} /> : <Outlet />;
}
