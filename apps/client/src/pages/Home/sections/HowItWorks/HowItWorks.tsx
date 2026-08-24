import { Container, Heading, IconWrapper, Section, Text } from '@machine-rental/ui';
import { Reveal } from '@/components/motion/Reveal';
import styles from './HowItWorks.module.css';

const steps = [
  ['01', 'Choose your machine', 'Browse our fleet and find equipment that matches your project.'],
  ['02', 'Select rental period', 'Choose daily, weekly, or monthly timing that works for you.'],
  ['03', 'Confirm your booking', 'Get a clear quote and confirm with our helpful rental team.'],
  ['04', 'Receive equipment', 'Collect it or arrange delivery directly to your job site.'],
];

export function HowItWorks() {
  return (
    <Section className={styles.section} id="how-it-works">
      <Container>
        <Reveal className={styles.heading}>
          <p className="eyebrow">A simpler rental experience</p>
          <Heading>From plan to project in four clear steps.</Heading>
          <Text lead>Everything you need, without the usual back-and-forth.</Text>
        </Reveal>
        <div className={styles.steps}>
          {steps.map(([number, title, copy], index) => (
            <Reveal delay={index * 110} key={number}>
              <article className={styles.step}>
                <IconWrapper className={styles.number}>{number}</IconWrapper>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
