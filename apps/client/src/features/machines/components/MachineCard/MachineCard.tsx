import { Link } from 'react-router-dom';

import { Button } from '@machine-rental/ui';

import type { Machine } from '../../types';

import styles from './MachineCard.module.css';

interface Props {
  machine: Machine;
}

export function MachineCard({ machine }: Props) {
  return (
    <div className={styles.card}>
      <img
        src={machine.images[0]}

        alt={machine.name}

        className={styles.image}
      />

      <div className={styles.content}>
        <span className={styles.status}>
          {machine.status === 'available' ? 'Đang sẵn sàng' : 'Đang thuê'}
        </span>

        <h3>{machine.name}</h3>

        <p>{machine.description}</p>

        <div className={styles.specs}>
          <div>
            ⚙ CPU:
            <strong>{machine.specs.cpu}</strong>
          </div>

          <div>
            💾 RAM:
            <strong>{machine.specs.ram}</strong>
          </div>

          <div>
            🎮 GPU:
            <strong>{machine.specs.gpu}</strong>
          </div>

          <div>
            💽 SSD:
            <strong>{machine.specs.storage}</strong>
          </div>
        </div>

        <div className={styles.pricing}>
          <p>
            24 giờ:
            <strong>{machine.pricing.test24h.toLocaleString()}đ</strong>
          </p>

          <p>
            7 ngày:
            <strong>{machine.pricing.week.toLocaleString()}đ</strong>
          </p>

          <p>
            30 ngày:
            <strong>{machine.pricing.month.toLocaleString()}đ</strong>
          </p>
        </div>

        <Link to={`/machines/${machine.id}`}>
          <Button>Xem chi tiết</Button>
        </Link>
      </div>
    </div>
  );
}
