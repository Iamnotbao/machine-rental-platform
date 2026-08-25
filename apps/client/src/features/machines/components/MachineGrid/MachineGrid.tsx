import { MachineCard } from '../MachineCard/MachineCard';

import type { Machine } from '../../types';

import styles from './MachineGrid.module.css';

interface Props {
  machines: Machine[];
}

export function MachineGrid({ machines }: Props) {
  return (
    <div className={styles.grid}>
      {machines.map((machine) => (
        <MachineCard
          key={machine.id}

          machine={machine}
        />
      ))}
    </div>
  );
}
