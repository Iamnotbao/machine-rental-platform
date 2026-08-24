import { Container } from '@machine-rental/ui';
import { Counter } from './Counter';
import styles from './Statistics.module.css';

const statistics = [
  { value: 500, suffix: '+', label: 'Machines available' },
  { value: 50, suffix: '+', label: 'Equipment types' },
  { value: 98, suffix: '%', label: 'Customer satisfaction' },
  { value: 24, suffix: '/7', label: 'Professional support' },
];

export function Statistics() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {statistics.map((statistic) => (
            <div className={styles.item} key={statistic.label}>
              <strong>
                <Counter value={statistic.value} suffix={statistic.suffix} />
              </strong>
              <span>{statistic.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
