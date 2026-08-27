import { useEffect, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
import { authStore } from '@/store/auth/auth.store';
import styles from './navigation.module.css';

const links = [
  { label: 'Trang chủ', to: ROUTES.home },
  { label: 'Máy chủ', to: ROUTES.machines },
  { label: 'Giới thiệu', to: ROUTES.about },
  { label: 'Tin tức', to: ROUTES.news },
  { label: 'Liên hệ', to: ROUTES.contact },
];

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
      <button
        type="button"
        aria-label="Đóng menu"
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={close}
      />

      <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`} id="primary-navigation-drawer">
        <div className={styles.drawerHeader}>
          <div><span>RENTORA</span><strong>Điều hướng</strong></div>
          <button type="button" onClick={close}>Đóng</button>
        </div>

        {session ? (
          <section className={styles.accountCard}>
            <div className={styles.avatar} aria-hidden="true">{initials}</div>
            <div className={styles.accountCopy}>
              <span>ĐANG ĐĂNG NHẬP</span>
              <strong>{session.user.name}</strong>
              <small>{session.user.email}</small>
            </div>
            <NavLink className={styles.accountLink} onClick={close} to={ROUTES.profile}>Tài khoản</NavLink>
            <button className={styles.logoutButton} type="button" onClick={logout}>Đăng xuất</button>
          </section>
        ) : (
          <section className={styles.guestCard}>
            <span>TÀI KHOẢN</span>
            <strong>Đăng nhập để quản lý máy thuê và ví</strong>
            <div>
              <NavLink onClick={close} to={ROUTES.login}>Đăng nhập</NavLink>
              <NavLink onClick={close} to={ROUTES.register}>Đăng ký</NavLink>
            </div>
          </section>
        )}

        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink end={link.to === ROUTES.home} key={link.label} onClick={close} to={link.to}>
              <span>{link.label}</span>
              <b aria-hidden="true">›</b>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );

  return (
    <div className={styles.navigation}>
      <button
        aria-controls="primary-navigation-drawer"
        aria-expanded={isOpen}
        aria-label="Mở menu điều hướng"
        className={styles.toggle}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      {createPortal(overlay, document.body)}
    </div>
  );
}
