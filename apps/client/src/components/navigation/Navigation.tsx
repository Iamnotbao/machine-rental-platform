import { useEffect, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
import { accountDashboard } from '@/features/account/data/account.mock';
import { authStore } from '@/store/auth/auth.store';
import styles from './navigation.module.css';

const links = [
  { label: 'Trang chủ', to: ROUTES.home },
  { label: 'Máy chủ', to: ROUTES.machines },
  { label: 'Giới thiệu', to: ROUTES.about },
  { label: 'Tin tức', to: ROUTES.news },
  { label: 'Liên hệ', to: ROUTES.contact },
];

const pointsFormatter = new Intl.NumberFormat('vi-VN');

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSyncExternalStore(authStore.subscribe, authStore.getSession, () => null);
  const navigate = useNavigate();
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const logout = () => {
    authStore.setSession(null);
    close();
    navigate(ROUTES.home);
  };

  const initials = session?.user.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'U';

  const overlay = (
    <>
      <button type="button" aria-label="Đóng menu" className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`} onClick={close} />
      <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`} id="primary-navigation-drawer">
        <div className={styles.drawerHeader}>
          <div><span>RENTORA</span><strong>Điều hướng</strong></div>
          <button type="button" onClick={close}>Đóng</button>
        </div>

        {session ? (
          <section className={styles.memberCard}>
            <NavLink className={styles.memberProfileLink} onClick={close} to={ROUTES.profile}>
              <div className={styles.avatar} aria-hidden="true">{initials}</div>
              <div className={styles.memberCopy}>
                <span>TÀI KHOẢN RENTORA</span>
                <strong>{session.user.name}</strong>
                <small>{session.user.email}</small>
              </div>
              <span className={styles.profileArrow} aria-hidden="true">›</span>
            </NavLink>
            <div className={styles.memberStats}>
              <div><span>POINTS / COINS</span><strong>{pointsFormatter.format(accountDashboard.wallet.points)} P</strong></div>
              <div><span>QUY ĐỔI</span><strong>1 P = {accountDashboard.wallet.pointValue} ₫</strong></div>
            </div>
          </section>
        ) : (
          <section className={styles.guestCard}>
            <span>TÀI KHOẢN</span>
            <strong>Đăng nhập để quản lý máy thuê, ví và Points.</strong>
            <div>
              <NavLink onClick={close} to={ROUTES.login}>Đăng nhập</NavLink>
              <NavLink onClick={close} to={ROUTES.register}>Đăng ký</NavLink>
            </div>
          </section>
        )}

        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink end={link.to === ROUTES.home} key={link.label} onClick={close} to={link.to}>
              <span>{link.label}</span><b aria-hidden="true">›</b>
            </NavLink>
          ))}
        </nav>
        {session && <button className={styles.drawerLogout} type="button" onClick={logout}>Đăng xuất tài khoản</button>}
      </aside>
    </>
  );

  return (
    <div className={styles.navigation}>
      <button aria-controls="primary-navigation-drawer" aria-expanded={isOpen} aria-label="Mở menu điều hướng" className={styles.toggle} onClick={() => setIsOpen((open) => !open)} type="button">
        <span /><span /><span />
      </button>
      {createPortal(overlay, document.body)}
    </div>
  );
}
