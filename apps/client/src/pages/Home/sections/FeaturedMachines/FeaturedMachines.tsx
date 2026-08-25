import { Container, Heading, Section, Text } from '@machine-rental/ui';
import { Reveal } from '@/components/motion/Reveal';
import { providers } from '@/features/providers/data/provider.mock';
import { ProviderCard } from '@/features/providers/components/ProviderCard/ProviderCard';
import styles from './FeaturedMachines.module.css';

export function FeaturedMachines() {
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
              <ProviderCard provider={provider} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}