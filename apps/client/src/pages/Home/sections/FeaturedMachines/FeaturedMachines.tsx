import { Container, Heading, Section, Text } from '@machine-rental/ui';
import { Reveal } from '@/components/motion/Reveal';
import { featuredMachines } from '@/features/machines/mock/featuredMachines';
import { MachineCard } from './MachineCard';
import styles from './FeaturedMachines.module.css';

export function FeaturedMachines() {
  return (
    <Section>
      <Container>
        <Reveal className={styles.intro}>
          <div>
            <p className="eyebrow">Featured fleet</p>
            <Heading>Equipment that keeps work moving.</Heading>
          </div>
          <Text lead>
            Well-maintained machines, selected for performance and backed by people who understand
            the job.
          </Text>
        </Reveal>
        <div className={styles.grid}>
          {featuredMachines.map((machine, index) => (
            <Reveal delay={index * 100} key={machine.id}>
              <MachineCard machine={machine} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
