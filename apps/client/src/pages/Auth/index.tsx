import { FormEvent, useState } from 'react';
import styles from './page.module.css';

export function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <main className={styles.page}><div className={styles.glow} /><section className={styles.shell}><div className={styles.visual}><a href="/" className={styles.brand}>◈ MACHINE RENTAL</a><div className={styles.visualCopy}><p className={styles.kicker}>SERVER RENTAL, SIMPLIFIED</p><h1>Build faster.<br /><em>Ship further.</em></h1><p>Hạ tầng mạnh mẽ cho những ý tưởng không giới hạn.</p></div><div className={styles.visualFooter}><span>⌁ 99.99% uptime</span><span>✦ 24/7 support</span></div></div><div className={styles.formSide}><div className={styles.formHead}><p className={styles.kicker}>WELCOME BACK</p><h2>Đăng nhập</h2><p>Chào mừng bạn trở lại. Hãy bắt đầu hành trình của mình.</p></div><form onSubmit={handleSubmit} className={styles.form}><label>Email<input type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Mật khẩu<input type="password" placeholder="••••••••" value={password} onChange={(event) => setPassword(event.target.value)} required /></label><div className={styles.formMeta}><label className={styles.checkbox}><input type="checkbox" /> <span>Ghi nhớ đăng nhập</span></label><a href="/auth">Quên mật khẩu?</a></div><button className={styles.submit} type="submit">{submitted ? 'Đã gửi yêu cầu ✓' : 'Đăng nhập'} <span>→</span></button></form><div className={styles.divider}><span>hoặc tiếp tục với</span></div><div className={styles.socials}><button type="button">G <span>Google</span></button><button type="button">◉ <span>GitHub</span></button></div><p className={styles.signup}>Chưa có tài khoản? <a href="/auth">Đăng ký ngay</a></p></div></section></main>;
}

export default AuthPage;
