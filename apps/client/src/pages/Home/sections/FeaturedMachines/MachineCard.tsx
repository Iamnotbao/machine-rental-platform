import { Link } from 'react-router-dom';
import { Badge, Button, Card } from '@machine-rental/ui';
import type { FeaturedMachine } from '@/features/machines/mock/featuredMachines';
import { ROUTES } from '@/constants/route.constants';
import styles from './FeaturedMachines.module.css';

function MachineIllustration({ accent }: Pick<FeaturedMachine, 'accent'>) {
  return (
    <div aria-hidden="true" className={`${styles.machineImage} ${styles[accent]}`}>
      <span className={styles.cloud} />
      <span className={styles.machineBody} />
      <span className={styles.machineCab} />
      <span className={styles.machineWheelOne} />
      <span className={styles.machineWheelTwo} />
      <span className={styles.machineArm} />
    </div>
  );
}

export function MachineCard({ machine }: { machine: FeaturedMachine }) {
  return (
    <Card className={styles.card}>
      <MachineIllustration accent={machine.accent} />
      <div className={styles.cardContent}>
        <Badge>{machine.category}</Badge>
        <h3>{machine.name}</h3>
        <p>{machine.description}</p>
        <div className={styles.cardFooter}>
          <strong>{machine.dailyRate}</strong>
          <Link
            to={ROUTES.machineDetail.replace(':id', machine.id)}
            aria-label={`View ${machine.name}`}
          >
            <Button variant="ghost">
              View <span aria-hidden="true">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
