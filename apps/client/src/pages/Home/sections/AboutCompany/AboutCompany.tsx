import { Container, Heading, Section, Text } from '@machine-rental/ui';
import { Reveal } from '@/components/motion/Reveal';
import styles from './AboutCompany.module.css';

export function AboutCompany() {
  return (
    <Section className={styles.section} id="about">
      <Container>
        <div className={styles.layout}>
          <Reveal direction="left" className={styles.visual}>
            <div className={styles.image} aria-label="Rental team at work" role="img">
              <span className={styles.hardHat}>●</span>
              <span className={styles.worker} />
              <span className={styles.crane} />
            </div>
            <div className={styles.years}>
              <strong>15</strong>
              <span>
                years of
                <br />
                experience
              </span>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className={styles.copy}>
              <p className="eyebrow">About Rentora</p>
              <Heading>Equipment expertise you can count on.</Heading>
              <Text lead>
                We pair a practical, well-kept fleet with honest advice and responsive service.
              </Text>
              <p className={styles.body}>
                Our team has helped contractors, facilities teams, and independent operators get the
                right equipment to the right place for more than a decade.
              </p>
              <div className={styles.trust}>
                <div>
                  <strong>2,000+</strong>
                  <span>active customers</span>
                </div>
                <div>
                  <strong>35</strong>
                  <span>service specialists</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
