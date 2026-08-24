import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
import styles from './navigation.module.css';

export function Navigation() {
  return (
    <nav aria-label="Primary navigation" className={styles.navigation}>
      <NavLink to={ROUTES.machines}>Machines</NavLink>
      <NavLink to={ROUTES.cart}>Cart</NavLink>
      <NavLink to={ROUTES.login}>Sign in</NavLink>
    </nav>
  );
}
