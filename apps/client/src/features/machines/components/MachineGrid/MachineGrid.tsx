import { MachineConfigCard } from '../MachineConfigCard/MachineConfigCard';
import type { MachineConfig } from '../../types';
import styles from './MachineGrid.module.css';

interface Props {
  machines: MachineConfig[];
}

export function MachineGrid({ machines }: Props) {
  return (
    <div className={styles.grid}>
      {machines.map((machine) => (
        <MachineConfigCard key={machine.id} machine={machine} />
      ))}
    </div>
  );
}
