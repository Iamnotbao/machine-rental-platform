import { FormEvent, useState } from 'react';

export function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#f5fafb' }}><form onSubmit={handleSubmit} style={{ width: 'min(100%, 420px)', display: 'grid', gap: 16, padding: 32, borderRadius: 20, background: '#fff', boxShadow: '0 14px 36px rgba(24,51,77,.1)' }}><h1>Đăng nhập</h1><input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required /><input type="password" placeholder="Mật khẩu" value={password} onChange={(event) => setPassword(event.target.value)} required /><button type="submit">{submitted ? 'Đã gửi yêu cầu' : 'Đăng nhập'}</button></form></main>;
}

export default AuthPage;
