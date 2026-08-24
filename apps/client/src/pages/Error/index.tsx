import { Link, useRouteError } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
export function ErrorPage() {
  const routeError = useRouteError();
  const message =
    routeError instanceof Error ? routeError.message : 'An unexpected error occurred.';
  return (
    <main className="page-container">
      <h1>Something went wrong</h1>
      <p>{message}</p>
      <Link to={ROUTES.home}>Return home</Link>
    </main>
  );
}
