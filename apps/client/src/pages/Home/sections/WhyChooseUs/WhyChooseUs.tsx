import { Card, Container, Heading, IconWrapper, Section, Text } from '@machine-rental/ui';
import { Reveal } from '@/components/motion/Reveal';
import styles from './WhyChooseUs.module.css';

const reasons = [
  [
    '✓',
    'Quality equipment',
    'Every machine is maintained, inspected, and ready for dependable work.',
  ],
  [
    '↔',
    'Flexible rental',
    'Book the duration that fits the job, from a day to a longer-term project.',
  ],
  [
    '$',
    'Transparent pricing',
    'Clear daily rates and helpful guidance, so there are no surprises.',
  ],
  [
    '◌',
    'Professional support',
    'Our rental experts are on hand before, during, and after your rental.',
  ],
];

export function WhyChooseUs() {
  return (
    <Section id="services">
      <Container>
        <div className={styles.layout}>
          <Reveal direction="left">
            <div className={styles.copy}>
              <p className="eyebrow">Why Rentora</p>
              <Heading>Built around the way your team works.</Heading>
              <Text lead>
                We take the complexity out of equipment rental, so your attention stays where it
                belongs: on the work ahead.
              </Text>
              <div className={styles.note}>
                <span>★</span>
                <p>
                  <strong>Reliable by design</strong>
                  <br />A fleet and a team ready to meet your standards.
                </p>
              </div>
            </div>
          </Reveal>
          <div className={styles.grid}>
            {reasons.map(([icon, title, copy], index) => (
              <Reveal delay={index * 90} key={title}>
                <Card className={`${styles.card} ${index === 1 ? styles.highlighted : ''}`}>
                  <IconWrapper className={styles.icon}>{icon}</IconWrapper>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
