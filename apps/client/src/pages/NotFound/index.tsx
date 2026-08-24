import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
export function NotFoundPage() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to={ROUTES.home}>Return home</Link>
    </section>
  );
}
