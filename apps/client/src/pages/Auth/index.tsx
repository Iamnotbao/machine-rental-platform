import { FormEvent, useState } from 'react';
import styles from './page.module.css';

export function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <div className={styles.visual}>
          <a href="/" className={styles.brand}>◈ MACHINE RENTAL</a>
          <div className={styles.visualCopy}>
            <p className={styles.kicker}>SERVER RENTAL, SIMPLIFIED</p>
            <h1>Build faster.<br /><em>Ship further.</em></h1>
            <p>Hạ tầng mạnh mẽ cho những ý tưởng không giới hạn.</p>
          </div>
        </div>
        <div className={styles.formSide}>
          <div className={styles.formHead}>
            <p className={styles.kicker}>WELCOME BACK</p>
            <h2>Đăng nhập</h2>
            <p>Chào mừng bạn trở lại. Hãy bắt đầu hành trình của mình.</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
            <label>Mật khẩu<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
            <button className={styles.submit} type="submit">{submitted ? 'Đã gửi yêu cầu ✓' : 'Đăng nhập'} <span>→</span></button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
