import { Link, useRouteError } from 'react-router-dom';
import { ADMIN_ROUTES } from '@/constants/route.constants';
export function AdminErrorPage() {
  const routeError = useRouteError();
  const message =
    routeError instanceof Error ? routeError.message : 'An unexpected route error occurred.';
  return (
    <main className="error-boundary">
      <p className="eyebrow">Error</p>
      <h1>Something went wrong</h1>
      <p>{message}</p>
      <Link to={ADMIN_ROUTES.dashboard}>Return to dashboard</Link>
    </main>
  );
}
