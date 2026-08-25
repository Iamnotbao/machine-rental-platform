import styles from './MachinePricing.module.css';

interface Props {
  pricing: {
    test24h: number;
    week: number;
    month: number;
  };
}

export function MachinePricing({ pricing }: Props) {
  return (
    <div className={styles.card}>
      <h3>Giá thuê</h3>

      <p>
        Test 24h:
        <strong>{pricing.test24h.toLocaleString()}đ</strong>
      </p>

      <p>
        7 ngày:
        <strong>{pricing.week.toLocaleString()}đ</strong>
      </p>

      <p>
        30 ngày:
        <strong>{pricing.month.toLocaleString()}đ</strong>
      </p>
    </div>
  );
}
