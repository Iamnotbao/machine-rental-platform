import type { MachineInstance } from '../../types';

import styles from './MachineInstanceCard.module.css';

interface Props {
  machine: MachineInstance;
}

export function MachineInstanceCard({ machine }: Props) {
  return (
    <div className={styles.card}>
      <h3>{machine.name}</h3>

      <p>ID: {machine.id}</p>

      <p>📍 {machine.location}</p>

      <span>{machine.status === 'available' ? 'Đang sẵn sàng' : 'Đang thuê'}</span>
    </div>
  );
}
