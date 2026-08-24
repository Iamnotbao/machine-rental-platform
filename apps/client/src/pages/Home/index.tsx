import { Link } from 'react-router-dom';
import { Button, Card } from '@machine-rental/ui';
import { APP_DESCRIPTION, APP_NAME } from '@/constants/app.constants';
import { ROUTES } from '@/constants/route.constants';
import styles from './page.module.css';

export function HomePage() {
  return (
    <section className={styles.hero}>
      <p className="eyebrow">Equipment, when you need it</p>
      <h1>{APP_NAME}</h1>
      <p>
        {APP_DESCRIPTION} Browse the customer experience foundation while booking and payments are
        prepared for future phases.
      </p>
      <Link to={ROUTES.machines}>
        <Button>Browse machines</Button>
      </Link>
      <Card className={styles.note}>
        <h2>Phase 1A</h2>
        <p>
          Routing, layouts, shared components, and API boundaries are in place. No live rental
          backend is connected.
        </p>
      </Card>
    </section>
  );
}
