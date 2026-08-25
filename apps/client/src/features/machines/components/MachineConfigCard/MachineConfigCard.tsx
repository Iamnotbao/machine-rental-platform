import { Link } from 'react-router-dom';

import { Button } from '@machine-rental/ui';

import type { MachineConfig } from '../../types';

import styles from './MachineConfigCard.module.css';

interface Props {
  machine: MachineConfig;
}

export function MachineConfigCard({ machine }: Props) {
  return (
    <div className={styles.card}>
      <img
        src={machine.images[0]}

        alt={machine.name}
      />

      <h3>{machine.name}</h3>

      <p>{machine.description}</p>

      <div>⚙ {machine.specs.cpu}</div>

      <div>💾 {machine.specs.ram}</div>

      <div>🎮 {machine.specs.gpu}</div>

      <div>💽 {machine.specs.storage}</div>

      <h4>{machine.pricing.week.toLocaleString()}đ / 7 ngày</h4>

      <p>Có {machine.availableCount} máy khả dụng</p>

      <Link to={`/machines/${machine.id}`}>
        <Button>Xem máy</Button>
      </Link>
    </div>
  );
}
