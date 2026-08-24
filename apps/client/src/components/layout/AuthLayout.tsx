import { Link, Outlet } from 'react-router-dom';
import { APP_NAME } from '@/constants/app.constants';
import { ROUTES } from '@/constants/route.constants';

export function AuthLayout() {
  return (
    <main className="auth-shell">
      <Link className="brand" to={ROUTES.home}>
        {APP_NAME}
      </Link>
      <section className="auth-card">
        <Outlet />
      </section>
    </main>
  );
}
