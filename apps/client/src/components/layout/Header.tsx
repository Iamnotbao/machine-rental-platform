import { Link } from 'react-router-dom';
import { Button } from '@machine-rental/ui';
import { APP_NAME } from '@/constants/app.constants';
import { Navigation } from '@/components/navigation/Navigation';
import { ROUTES } from '@/constants/route.constants';
import styles from './layout.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} page-container`}>
        <Link aria-label={`${APP_NAME} home`} className="brand" to={ROUTES.home}>
          RENT<span>ORA</span>
        </Link>
        <Navigation />
        <Link className={styles.loginAction} to={ROUTES.login}>
          Login
        </Link>
        <Link className={styles.rentAction} to={ROUTES.machines}>
          <Button>Rent now</Button>
        </Link>
      </div>
    </header>
  );
}
