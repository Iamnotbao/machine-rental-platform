import { Card, Container, Heading, Section, Text } from '@machine-rental/ui';
import { Reveal } from '@/components/motion/Reveal';
import styles from './Testimonials.module.css';

type Testimonial = [quote: string, comment: string, name: string, role: string];
const testimonials: Testimonial[] = [
  [
    '“',
    'Rentora made it easy to get the lift we needed on site the next morning. The team was clear, quick, and genuinely helpful.',
    'Marcus Chen',
    'Site manager, Northpoint Build',
  ],
  [
    '“',
    'The machines arrive clean and ready. It feels like working with a partner who understands that downtime costs money.',
    'Alicia Wright',
    'Operations lead, Wright Facilities',
  ],
  [
    '“',
    'A simple booking process and dependable equipment. We use Rentora whenever our own fleet needs extra capacity.',
    'Samuel Ortiz',
    'Project director, Formline',
  ],
];

export function Testimonials() {
  return (
    <Section>
      <Container>
        <Reveal className={styles.heading}>
          <p className="eyebrow">Trusted in the field</p>
          <Heading>What our customers say.</Heading>
          <Text lead>Real feedback from teams that rely on Rentora to get work done.</Text>
        </Reveal>
        <div className={styles.grid}>
          {testimonials.map(([quote, copy, name, role], index) => (
            <Reveal delay={index * 100} key={name}>
              <Card className={styles.card}>
                <span className={styles.quote}>{quote}</span>
                <p className={styles.comment}>{copy}</p>
                <div className={styles.person}>
                  <span className={styles.initial}>{name[0]}</span>
                  <p>
                    <strong>{name}</strong>
                    <small>{role}</small>
                  </p>
                  <span className={styles.stars}>★★★★★</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
