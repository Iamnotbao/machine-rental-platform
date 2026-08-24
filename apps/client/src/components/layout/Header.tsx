import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button } from '@machine-rental/ui';

import { APP_NAME } from '@/constants/app.constants';
import { Navigation } from '@/components/navigation/Navigation';
import LanguageSwitcher from '@/components/navigation/LanguageSwitcher/LanguageSwitcher';

import { ROUTES } from '@/constants/route.constants';

import styles from './layout.module.css';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={`${styles.content} page-container`}>
        <Link aria-label={`${APP_NAME} home`} className="brand" to={ROUTES.home}>
          RENT<span>ORA</span>
        </Link>

        <Navigation />

        <div className={styles.actions}>
          <LanguageSwitcher />

          <Link className={styles.loginAction} to={ROUTES.login}>
            {t('common.login')}
          </Link>

          <Link className={styles.rentAction} to={ROUTES.machines}>
            <Button>{t('common.rent_now')}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
