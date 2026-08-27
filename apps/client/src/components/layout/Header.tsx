import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@machine-rental/ui';
import { APP_NAME } from '@/constants/app.constants';
import { Navigation } from '@/components/navigation/Navigation';
import LanguageSwitcher from '@/components/navigation/LanguageSwitcher/LanguageSwitcher';
import { ROUTES } from '@/constants/route.constants';
import { authStore } from '@/store/auth/auth.store';
import styles from './layout.module.css';

export function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [session, setSession] = useState(authStore.getSession());

  const logout = () => {
    authStore.setSession(null);
    setSession(null);
    navigate(ROUTES.home);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.content} page-container`}>
        <div className={styles.leftCluster}>
          <Navigation />
          <Link aria-label={`${APP_NAME} home`} className="brand" to={ROUTES.home}>
            RENT<span>ORA</span>
          </Link>
        </div>

        <div className={styles.actions}>
          <LanguageSwitcher />

          {session ? (
            <div className={styles.sessionActions}>
              <Link className={styles.loginAction} to={ROUTES.profile}>{session.user.name}</Link>
              <button type="button" className={styles.logoutAction} onClick={logout}>Đăng xuất</button>
            </div>
          ) : (
            <Link className={styles.loginAction} to={ROUTES.login}>{t('common.login')}</Link>
          )}

          <Link className={styles.rentAction} to={ROUTES.machines}>
            <Button>{t('common.rent_now')}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
