import { Button, Container } from '@machine-rental/ui';
import { Reveal } from '@/components/motion/Reveal';
import styles from './Newsletter.module.css';

export function Newsletter() {
  return (
    <section className={styles.section} id="contact">
      <Container>
        <Reveal className={styles.content}>
          <div>
            <p className="eyebrow">Stay in the know</p>
            <h2>Rental insights, straight to your inbox.</h2>
          </div>
          <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <label className={styles.srOnly} htmlFor="newsletter-email">
              Email address
            </label>
            <input id="newsletter-email" type="email" placeholder="Your email address" />
            <Button type="submit">Subscribe</Button>
            <p>Occasional updates. No noise.</p>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
