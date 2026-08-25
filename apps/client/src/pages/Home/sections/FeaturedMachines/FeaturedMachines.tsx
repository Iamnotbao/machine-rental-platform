import { Container, Heading, Section, Text } from '@machine-rental/ui';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/Reveal';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import styles from './FeaturedMachines.module.css';

export function FeaturedMachines() {
  const providers = Array.from(
    new Map(
      machineConfigs.map((machine) => [
        machine.providerId,
        {
          id: machine.providerId,
          name: machine.providerName,
          description: machine.providerDescription,
        },
      ]),
    ).values(),
  );

  return (
    <Section className={styles.section}>
      <Container>
        <Reveal>
          <Text className={styles.eyebrow}>NHÀ CUNG CẤP NỔI BẬT</Text>
          <Heading className={styles.title}>Thuê máy chủ vật lý hiệu năng cao</Heading>
          <Text className={styles.description}>
            Lựa chọn nhà cung cấp phù hợp và tìm cấu hình server theo nhu cầu.
          </Text>
        </Reveal>
        <div className={styles.grid}>
          {providers.map((provider, index) => (
            <Reveal key={provider.id} delay={index * 0.08}>
              <Link to={`/machine/${provider.id}`} className={styles.card}>
                <h3>{provider.name}</h3>
                <p>{provider.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}