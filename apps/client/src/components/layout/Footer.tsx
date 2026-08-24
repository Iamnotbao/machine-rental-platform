import { Link } from 'react-router-dom';
import { Container } from '@machine-rental/ui';
import { ROUTES } from '@/constants/route.constants';
import styles from './layout.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          <div>
            <Link className={styles.footerBrand} to={ROUTES.home}>
              RENT<span>ORA</span>
            </Link>
            <p className={styles.footerAbout}>
              Professional equipment rental for teams that keep the world moving.
            </p>
          </div>
          <div>
            <h2 className={styles.footerHeading}>Explore</h2>
            <nav aria-label="Footer explore" className={styles.footerLinks}>
              <Link to={ROUTES.machines}>Machines</Link>
              <a href="#how-it-works">How it works</a>
              <a href="#about">About us</a>
            </nav>
          </div>
          <div>
            <h2 className={styles.footerHeading}>Support</h2>
            <nav aria-label="Footer support" className={styles.footerLinks}>
              <a href="mailto:hello@rentora.example">Contact us</a>
              <a href="tel:+15550190700">(555) 019-0700</a>
              <a href="#support">Rental support</a>
            </nav>
          </div>
          <div>
            <h2 className={styles.footerHeading}>Visit us</h2>
            <p className={styles.footerAbout}>
              148 Industrial Way
              <br />
              Service City, SC 20481
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Rentora. All rights reserved.</span>
          <div className={styles.socials}>
            <a aria-label="LinkedIn" href="#linkedin">
              in
            </a>
            <a aria-label="Instagram" href="#instagram">
              ig
            </a>
            <a aria-label="Facebook" href="#facebook">
              f
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
