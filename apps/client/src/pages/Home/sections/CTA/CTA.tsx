import { Link } from 'react-router-dom';
import { Button, Container } from '@machine-rental/ui';
import { ROUTES } from '@/constants/route.constants';
import { Reveal } from '@/components/motion/Reveal';
import styles from './CTA.module.css';

export function CallToAction() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.content}>
          <p className="eyebrow">Your next project starts here</p>
          <h2>Ready to rent your next machine?</h2>
          <p>Tell us what you need and we’ll help you find the right equipment for the job.</p>
          <Link to={ROUTES.machines}>
            <Button>
              Start rental <span aria-hidden="true">→</span>
            </Button>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
