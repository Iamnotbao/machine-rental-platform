import { Link } from 'react-router-dom';
import { Button, Container } from '@machine-rental/ui';
import { ROUTES } from '@/constants/route.constants';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span /> Trusted equipment rental partner
          </p>
          <h1>Rent professional machines with confidence.</h1>
          <p className={styles.summary}>
            Quality equipment, flexible rental plans, and reliable support for every project—large
            or small.
          </p>
          <div className={styles.actions}>
            <Link to={ROUTES.machines}>
              <Button>
                Explore machines <span aria-hidden="true">→</span>
              </Button>
            </Link>
            <a className={styles.textLink} href="#how-it-works">
              How it works <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className={styles.assurance}>
            <div className={styles.avatars} aria-hidden="true">
              <i>J</i>
              <i>M</i>
              <i>R</i>
            </div>
            <p>
              <strong>Trusted by 2,000+ teams</strong>
              <br />
              across construction and industry
            </p>
          </div>
        </div>
        <div className={styles.visual} aria-label="Construction equipment illustration" role="img">
          <div className={styles.visualTopline}>READY FOR THE JOB</div>
          <div className={styles.sun} />
          <div className={styles.hillOne} />
          <div className={styles.hillTwo} />
          <div className={styles.excavator}>
            <div className={styles.arm}>
              <b />
              <em />
            </div>
            <div className={styles.cab} />
            <div className={styles.body} />
            <div className={styles.track} />
            <div className={styles.trackInner} />
          </div>
          <div className={styles.availability}>
            <span>✓</span>
            <div>
              <strong>Available today</strong>
              <small>Ready when you are</small>
            </div>
          </div>
          <div className={styles.rating}>
            <strong>
              4.9 <span>★★★★★</span>
            </strong>
            <small>Average customer rating</small>
          </div>
        </div>
      </Container>
    </section>
  );
}
