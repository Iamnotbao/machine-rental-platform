import { useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import { ROUTES } from '@/constants/route.constants';
import styles from '@/features/payments/payment.module.css';

const money = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

const providerNames: Record<string, string> = {
  'provider-a': 'Nhà cung cấp A',
  'provider-b': 'Nhà cung cấp B',
  'provider-c': 'Nhà cung cấp C',
};

export function BookingPage() {
  const { id } = useParams<{ id?: string }>();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const requestedConfigId = params.get('configId') ?? id;
  const config = machineConfigs.find((item) => item.id === requestedConfigId) ?? machineConfigs[0];
  const [days, setDays] = useState(Math.max(1, Number(params.get('days')) || 1));
  const [quantity, setQuantity] = useState(Math.max(1, Number(params.get('quantity')) || 1));

  if (!config) return <section>Không có cấu hình máy để đặt thuê.</section>;

  const providerId = (params.get('provider') ?? config.providerId).toLowerCase();
  const providerName = providerNames[providerId] ?? providerId;
  const safeQuantity = Math.min(quantity, config.availableCount);
  const pricePerDay = Math.round(config.pricing.month / 30);
  const total = useMemo(
    () => pricePerDay * safeQuantity * days,
    [days, pricePerDay, safeQuantity],
  );

  const continueToPurchase = () => {
    const next = new URLSearchParams({
      configId: config.id,
      quantity: String(safeQuantity),
      days: String(days),
      provider: providerId,
    });
    navigate(`${ROUTES.purchase}?${next.toString()}`);
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Booking · Bước 1/3</p>
            <h1 className={styles.title}>Đặt thuê {config.name}</h1>
            <p className={styles.subtitle}>Chọn số lượng và thời gian thuê. Provider được giữ xuyên suốt toàn bộ luồng thanh toán.</p>
          </div>
        </div>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>Thông tin thuê</h2>
            <div className={styles.form}>
              <label>Số ngày thuê<input type="number" min="1" max="365" value={days} onChange={(event) => setDays(Math.max(1, Number(event.target.value) || 1))} /></label>
              <label>Số lượng máy<input type="number" min="1" max={config.availableCount} value={safeQuantity} onChange={(event) => setQuantity(Math.max(1, Math.min(config.availableCount, Number(event.target.value) || 1)))} /></label>
            </div>
            <div className={styles.actions}><button className={styles.primary} type="button" onClick={continueToPurchase}>Tiếp tục Purchase</button></div>
          </div>

          <aside className={`${styles.card} ${styles.summary}`}>
            <p className={styles.eyebrow}>Booking summary</p>
            <h2>{config.name}</h2>
            <div className={styles.row}><span>Provider</span><strong>{providerName}</strong></div>
            <div className={styles.row}><span>Location</span><strong>{config.location}</strong></div>
            <div className={styles.row}><span>Số lượng</span><strong>{safeQuantity} máy</strong></div>
            <div className={styles.row}><span>Thời gian</span><strong>{days} ngày</strong></div>
            <div className={styles.total}><span>Tạm tính</span><strong>{money.format(total)}</strong></div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export function CartPage() {
  return <section><h1>Your cart</h1><p>Your saved machines will appear here after cart functionality is implemented.</p></section>;
}
