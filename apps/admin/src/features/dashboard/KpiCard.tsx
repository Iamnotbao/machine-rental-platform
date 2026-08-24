import { useEffect, useState } from 'react';
import { formatCurrency } from '@/utils/formatCurrency';
import styles from './kpi-card.module.css';
export function KpiCard({
  icon,
  label,
  note,
  trend,
  value,
}: {
  icon: string;
  label: string;
  note: string;
  trend: string;
  value: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const timeout = window.setTimeout(() => setDisplayValue(value), 80);
    return () => window.clearTimeout(timeout);
  }, [value]);
  return (
    <article className={styles.card}>
      <div className={styles.heading}>
        <span>{label}</span>
        <span className={styles.icon}>{icon}</span>
      </div>
      <strong>
        {label === 'Monthly revenue' ? formatCurrency(displayValue) : displayValue.toLocaleString()}
      </strong>
      <p>
        <span>{trend}</span> {note}
      </p>
    </article>
  );
}
