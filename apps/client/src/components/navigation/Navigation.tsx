import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
import styles from './navigation.module.css';

const links = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Machines', to: ROUTES.machines },
  { label: 'Services', to: '#services' },
  { label: 'About', to: '#about' },
  { label: 'Contact', to: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <nav aria-label="Primary navigation" className={styles.navigation}>
      <div className={styles.desktopLinks}>
        {links.map((link) =>
          link.to.startsWith('#') ? (
            <a href={link.to} key={link.label}>
              {link.label}
            </a>
          ) : (
            <NavLink end={link.to === ROUTES.home} key={link.label} to={link.to}>
              {link.label}
            </NavLink>
          ),
        )}
      </div>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className={styles.toggle}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`} id="mobile-navigation">
        {links.map((link) =>
          link.to.startsWith('#') ? (
            <a href={link.to} key={link.label} onClick={close}>
              {link.label}
            </a>
          ) : (
            <NavLink end={link.to === ROUTES.home} key={link.label} onClick={close} to={link.to}>
              {link.label}
            </NavLink>
          ),
        )}
        <NavLink className={styles.login} onClick={close} to={ROUTES.login}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}
