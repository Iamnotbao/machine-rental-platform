import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import styles from './page.module.css';

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

export default function MachinesPage() {
  const { providerId } = useParams<{ providerId?: string }>();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [configId, setConfigId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [days, setDays] = useState(1);

  const configs = useMemo(() => {
    const providerConfigs = providerId ? machineConfigs.filter((config) => config.providerId === providerId) : machineConfigs;
    const text = query.trim().toLowerCase();
    return text ? providerConfigs.filter((config) => `${config.name} ${config.description} ${config.specs.cpu} ${config.specs.ram} ${config.specs.gpu} ${config.specs.storage}`.toLowerCase().includes(text)) : providerConfigs;
  }, [providerId, query]);

  const selected = configs.find((config) => config.id === configId) ?? configs[0];
  const pricePerDay = selected ? Math.round(selected.pricing.month / 30) : 0;
  const maxQuantity = selected?.availableCount ?? 1;
  const safeQuantity = Math.min(quantity, maxQuantity);
  const total = pricePerDay * safeQuantity * days;

  return (
    <main className={styles.page}>
      <section className={styles.hero}><span className={styles.eyebrow}>NHÀ CUNG CẤP</span><h1>{providerId ?? 'Máy chủ vật lý'}</h1><p>Chọn cấu hình dựa trên thông số thực tế, số lượng máy còn sẵn và mức giá thuê.</p></section>
      <section className={styles.bookingGrid}>
        <div className={styles.configList}>
          <div className={styles.listHeader}><div><span className={styles.eyebrow}>CONFIGURATIONS</span><h2>Cấu hình có sẵn</h2></div><input className={styles.search} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm CPU, RAM, GPU..." /></div>
          {configs.length ? configs.map((config) => <button type="button" key={config.id} className={`${styles.configCard} ${config.id === selected?.id ? styles.selected : ''}`} onClick={() => { setConfigId(config.id); setQuantity(1); }}><span className={styles.configMain}><strong>{config.name}</strong><small>{config.description}</small><span className={styles.specGrid}><span>CPU<strong>{config.specs.cpu}</strong></span><span>RAM<strong>{config.specs.ram}</strong></span><span>GPU<strong>{config.specs.gpu}</strong></span><span>Storage<strong>{config.specs.storage}</strong></span></span></span><span className={styles.configMeta}><strong>{money.format(config.pricing.month)}</strong><small>/ tháng</small><em>{config.availableCount} máy available</em></span></button>) : <p>Không tìm thấy cấu hình phù hợp.</p>}
        </div>
        <aside className={styles.summary}><h2>Thông tin thuê</h2>{selected ? <><div className={styles.summaryConfig}><strong>{selected.name}</strong><span>{selected.specs.cpu} · {selected.specs.ram} · {selected.specs.storage}</span></div><label>Số lượng máy<input type="number" min="1" max={maxQuantity} value={safeQuantity} onChange={(event) => setQuantity(Math.max(1, Math.min(maxQuantity, Number(event.target.value) || 1)))} /></label><label>Số ngày thuê<input type="number" min="1" max="365" value={days} onChange={(event) => setDays(Math.max(1, Number(event.target.value) || 1))} /></label><div className={styles.priceRows}><span>Giá 24 giờ <strong>{money.format(selected.pricing.test24h)}</strong></span><span>Giá 1 tuần <strong>{money.format(selected.pricing.week)}</strong></span><span>Giá 1 tháng <strong>{money.format(selected.pricing.month)}</strong></span></div><div className={styles.total}><span>Tạm tính</span><strong>{money.format(total)}</strong></div><button type="button" className={styles.paymentButton} onClick={() => navigate(`/booking?configId=${selected.id}&quantity=${safeQuantity}&days=${days}`)}>Thanh toán</button></> : <p>Chọn một cấu hình để tiếp tục.</p>}</aside>
      </section>
    </main>
  );
}