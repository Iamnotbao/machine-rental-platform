import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTES } from '@/constants/route.constants';
import styles from './admin-navigation.module.css';

const navigationItems = [
  ['Overview', ADMIN_ROUTES.dashboard, '◫'],
  ['Machines', ADMIN_ROUTES.machines, '▣'],
  ['Bookings', ADMIN_ROUTES.bookings, '◷'],
  ['Orders', ADMIN_ROUTES.orders, '▤'],
  ['Customers', ADMIN_ROUTES.customers, '◎'],
  ['Payments', ADMIN_ROUTES.payments, '◇'],
  ['Reports', ADMIN_ROUTES.reports, '◔'],
  ['Settings', ADMIN_ROUTES.settings, '⚙'],
] as const;
export function AdminNavigation({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Admin navigation" className={styles.navigation}>
      {navigationItems.map(([label, route, icon]) => (
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          key={route}
          onClick={onNavigate}
          to={route}
        >
          <span aria-hidden="true">{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
