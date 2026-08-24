import { Link } from 'react-router-dom';
import { Button, Input } from '@machine-rental/ui';
import { ROUTES } from '@/constants/route.constants';
import styles from './page.module.css';
export function LoginPage() {
  return (
    <section>
      <h1>Welcome back</h1>
      <p>Sign in will connect to the future authentication service.</p>
      <form className={styles.form}>
        <Input aria-label="Email" placeholder="Email address" type="email" />
        <Input aria-label="Password" placeholder="Password" type="password" />
        <Button type="button">Sign in</Button>
      </form>
      <p>
        New here? <Link to={ROUTES.register}>Create an account</Link>.
      </p>
    </section>
  );
}
export function RegisterPage() {
  return (
    <section>
      <h1>Create account</h1>
      <p>Registration is a placeholder until authentication is implemented.</p>
      <form className={styles.form}>
        <Input aria-label="Name" placeholder="Full name" />
        <Input aria-label="Email" placeholder="Email address" type="email" />
        <Button type="button">Create account</Button>
      </form>
      <p>
        Already registered? <Link to={ROUTES.login}>Sign in</Link>.
      </p>
    </section>
  );
}
