import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import styles from './page.module.css';

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

export default function MachinesPage() {
  const { providerId } = useParams<{ providerId?: string }>();
  const navigate = useNavigate();
  const [configId, setConfigId] = useState(machineConfigs[0]?.id ?? '');
  const [quantity, setQuantity] = useState(1);
  const [days, setDays] = useState(1);

  const selected = useMemo(
    () => machineConfigs.find((config) => config.id === configId) ?? machineConfigs[0],
    [configId],
  );
  const dailyRate = selected?.pricing?.day ?? selected?.pricing?.daily ?? 0;
  const total = dailyRate * quantity * days;

  if (!selected) return <main className={styles.page}><p>Chưa có cấu hình máy.</p></main>;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>NHÀ CUNG CẤP</span>
        <h1>{providerId ?? 'Máy chủ vật lý'}</h1>
        <p>Chọn cấu hình, số lượng và thời gian thuê phù hợp với nhu cầu của bạn.</p>
      </section>
      <section className={styles.bookingGrid}>
        <div className={styles.configList}>
          <h2>Chọn cấu hình máy</h2>
          {machineConfigs.map((config) => (
            <button
              type="button"
              key={config.id}
              className={`${styles.configCard} ${config.id === selected.id ? styles.selected : ''}`}
              onClick={() => setConfigId(config.id)}
            >
              <span><strong>{config.name}</strong><small>{config.description}</small></span>
              <span className={styles.price}>{money.format(config.pricing.day ?? config.pricing.daily ?? 0)}<small>/ máy / ngày</small></span>
            </button>
          ))}
        </div>
        <aside className={styles.summary}>
          <h2>Thông tin thuê</h2>
          <label>Cấu hình<input value={selected.name} readOnly /></label>
          <label>Số lượng máy<input type="number" min="1" max="99" value={quantity} onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))} /></label>
          <label>Số ngày thuê<input type="number" min="1" max="365" value={days} onChange={(event) => setDays(Math.max(1, Number(event.target.value) || 1))} /></label>
          <div className={styles.total}><span>Tổng tiền</span><strong>{money.format(total)}</strong></div>
          <button type="button" className={styles.paymentButton} onClick={() => navigate(`/booking?configId=${selected.id}&quantity=${quantity}&days=${days}`)}>Thanh toán</button>
        </aside>
      </section>
    </main>
  );
}