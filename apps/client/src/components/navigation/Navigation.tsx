import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
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
        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink end={link.to === ROUTES.home} key={link.label} onClick={close} to={link.to}>
              <span>{link.label}</span>
              <b aria-hidden="true">›</b>
            </NavLink>
          ))}
        </nav>
        <div className={styles.drawerFooter}>
          <NavLink onClick={close} to={ROUTES.profile}>Tài khoản</NavLink>
          <NavLink onClick={close} to={ROUTES.login}>Đăng nhập</NavLink>
        </div>
      </aside>
    </>
  );

  return (
    <div className={styles.navigation}>
      <button
        aria-controls="primary-navigation-drawer"
        aria-expanded={isOpen}
        aria-label="Mở menu điều hướng"
        className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ''}`}
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
