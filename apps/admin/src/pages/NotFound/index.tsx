import { Link } from 'react-router-dom';
import { ADMIN_ROUTES } from '@/constants/route.constants';
export function AdminNotFoundPage() {
  return (
    <main className="error-boundary">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The Admin route does not exist.</p>
      <Link to={ADMIN_ROUTES.dashboard}>Return to dashboard</Link>
    </main>
  );
}
