import { Link } from 'react-router-dom';
import { APP_NAME } from '@/constants/app.constants';
import { Navigation } from '@/components/navigation/Navigation';
import { ROUTES } from '@/constants/route.constants';
import styles from './layout.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} page-container`}>
        <Link className="brand" to={ROUTES.home}>
          {APP_NAME}
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
