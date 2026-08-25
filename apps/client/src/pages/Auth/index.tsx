import { FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './page.module.css';

const rememberedEmail = localStorage.getItem('machine-rental-remembered-email') ?? '';

function AuthShell({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle: string }) {
  return <main className={styles.page}><section className={styles.visual}><span className={styles.logo}>MACHINE<span>RENTAL</span></span><div><span className={styles.kicker}>SERVER RENTAL PLATFORM</span><h1>Hạ tầng mạnh.<br />Vận hành an tâm.</h1><p>Thuê máy chủ vật lý phù hợp cho website, ứng dụng và hệ thống doanh nghiệp.</p></div><div className={styles.visualBadge}>99.9% uptime<br /><small>Reliable infrastructure</small></div></section><section className={styles.panel}><div className={styles.formWrap}><span className={styles.kicker}>{title === 'Đăng nhập' ? 'WELCOME BACK' : 'GET STARTED'}</span><h2>{title}</h2><p className={styles.subtitle}>{subtitle}</p>{children}</div></section></main>;
}

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(rememberedEmail);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(Boolean(rememberedEmail));
  const [error, setError] = useState('');
  const submit = (event: FormEvent) => { event.preventDefault(); if (!email.includes('@') || password.length < 6) { setError('Vui lòng nhập email hợp lệ và mật khẩu tối thiểu 6 ký tự.'); return; } if (remember) localStorage.setItem('machine-rental-remembered-email', email); else localStorage.removeItem('machine-rental-remembered-email'); navigate(location.state?.from ?? '/'); };
  return <AuthShell title="Đăng nhập" subtitle="Truy cập tài khoản để quản lý đơn thuê máy chủ."><form className={styles.form} onSubmit={submit}><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" /></label><label>Mật khẩu<span className={styles.password}><input type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Ẩn' : 'Hiện'}</button></span></label><div className={styles.row}><label className={styles.checkbox}><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> Ghi nhớ email</label><a href="#forgot">Quên mật khẩu?</a></div>{error && <p className={styles.error}>{error}</p>}<button className={styles.submit} type="submit">Đăng nhập</button></form><div className={styles.divider}><span>Hoặc tiếp tục với</span></div><div className={styles.socials}><button type="button" onClick={() => setError('Google OAuth sẽ được kết nối ở bước tích hợp backend.')}>G Google</button><button type="button" onClick={() => setError('Facebook OAuth sẽ được kết nối ở bước tích hợp backend.')}>f Facebook</button></div><p className={styles.switch}>Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></p></AuthShell>;
}

export function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [confirm, setConfirm] = useState(''); const [showPassword, setShowPassword] = useState(false); const [error, setError] = useState('');
  const submit = (event: FormEvent) => { event.preventDefault(); if (!name.trim() || !email.includes('@') || password.length < 6 || password !== confirm) { setError('Vui lòng kiểm tra họ tên, email và mật khẩu xác nhận.'); return; } navigate('/login'); };
  return <AuthShell title="Tạo tài khoản" subtitle="Bắt đầu thuê máy chủ vật lý cho hệ thống của bạn."><form className={styles.form} onSubmit={submit}><label>Họ và tên<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nguyễn Văn A" /></label><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" /></label><label>Mật khẩu<span className={styles.password}><input type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Tối thiểu 6 ký tự" /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Ẩn' : 'Hiện'}</button></span></label><label>Xác nhận mật khẩu<input type="password" value={confirm} onChange={(event) => setConfirm(event.target.value)} placeholder="Nhập lại mật khẩu" /></label>{error && <p className={styles.error}>{error}</p>}<button className={styles.submit} type="submit">Tạo tài khoản</button></form><div className={styles.divider}><span>Hoặc đăng ký với</span></div><div className={styles.socials}><button type="button" onClick={() => setError('Google OAuth sẽ được kết nối ở bước tích hợp backend.')}>G Google</button><button type="button" onClick={() => setError('Facebook OAuth sẽ được kết nối ở bước tích hợp backend.')}>f Facebook</button></div><p className={styles.switch}>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p></AuthShell>;
}