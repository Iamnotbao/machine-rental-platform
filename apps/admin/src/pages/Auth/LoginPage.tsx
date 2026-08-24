import { Link, Navigate, useLocation } from 'react-router-dom';
import { Button, Input } from '@machine-rental/ui';
import { APP_NAME, DEMO_DATA_NOTICE } from '@/constants/app.constants';
import { ADMIN_ROUTES } from '@/constants/route.constants';
import { useAuth } from '@/hooks/useAuth';
import { authStore } from '@/store/auth/auth.store';
import styles from './auth.module.css';
export function LoginPage() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (isAuthenticated)
    return (
      <Navigate
        replace
        to={
          (location.state as { from?: Location } | null)?.from?.pathname ?? ADMIN_ROUTES.dashboard
        }
      />
    );
  return (
    <main className={styles.shell}>
      <section className={styles.card}>
        <p className="eyebrow">{APP_NAME}</p>
        <h1>Welcome back</h1>
        <p className={styles.intro}>Sign in to manage the rental operation.</p>
        <div className={styles.notice}>{DEMO_DATA_NOTICE}. Use the demo access below.</div>
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            authStore.setSession({
              user: {
                id: 'demo-admin',
                name: 'Morgan Lee',
                email: 'morgan@example.com',
                role: 'ADMIN',
              },
              accessToken: 'demo-session',
            });
          }}
        >
          <label>
            Email
            <Input defaultValue="morgan@example.com" type="email" />
          </label>
          <label>
            Password
            <Input defaultValue="demo-access" type="password" />
          </label>
          <Button type="submit">Continue to dashboard</Button>
        </form>
        <Link to={ADMIN_ROUTES.dashboard}>Preview dashboard</Link>
      </section>
    </main>
  );
}
