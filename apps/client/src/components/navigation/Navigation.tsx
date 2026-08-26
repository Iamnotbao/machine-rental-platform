import { useState } from 'react';
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
  return (
    <nav aria-label="Primary navigation" className={styles.navigation}>
      <div className={styles.desktopLinks}>
        {links.map((link) => <NavLink end={link.to === ROUTES.home} key={link.label} to={link.to}>{link.label}</NavLink>)}
      </div>
      <button aria-controls="mobile-navigation" aria-expanded={isOpen} aria-label="Toggle navigation" className={styles.toggle} onClick={() => setIsOpen((open) => !open)} type="button"><span /><span /><span /></button>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`} id="mobile-navigation">
        {links.map((link) => <NavLink end={link.to === ROUTES.home} key={link.label} onClick={close} to={link.to}>{link.label}</NavLink>)}
        <NavLink className={styles.login} onClick={close} to={ROUTES.login}>Đăng nhập</NavLink>
      </div>
    </nav>
  );
}
