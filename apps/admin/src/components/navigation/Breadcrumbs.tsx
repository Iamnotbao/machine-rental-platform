import { Link, useLocation } from 'react-router-dom';
import { ADMIN_ROUTES } from '@/constants/route.constants';
import styles from './breadcrumbs.module.css';
const labels: Record<string, string> = {
  dashboard: 'Overview',
  machines: 'Machines',
  create: 'Create',
  edit: 'Edit',
  bookings: 'Bookings',
  orders: 'Orders',
  customers: 'Customers',
  payments: 'Payments',
  reports: 'Reports',
  settings: 'Settings',
};
export function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <Link to={ADMIN_ROUTES.dashboard}>Admin</Link>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          <span aria-hidden="true">/</span>
          {index === parts.length - 1 ? (
            <strong>{labels[part] ?? part}</strong>
          ) : (
            <span>{labels[part] ?? part}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
