import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import styles from './page.module.css';

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
const PAGE_SIZE = 3;
const unique = (values: string[]) => ['all', ...Array.from(new Set(values))];

export default function MachinesPage() {
  const { providerId } = useParams<{ providerId?: string }>();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [cpu, setCpu] = useState('all');
  const [ram, setRam] = useState('all');
  const [gpu, setGpu] = useState('all');
  const [storage, setStorage] = useState('all');
  const [maxPrice, setMaxPrice] = useState('all');
  const [page, setPage] = useState(1);
  const [configId, setConfigId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [days, setDays] = useState(1);

  const providerConfigs = providerId ? machineConfigs.filter((config) => config.providerId === providerId) : machineConfigs;
  const options = {
    cpu: unique(providerConfigs.map((item) => item.specs.cpu)),
    ram: unique(providerConfigs.map((item) => item.specs.ram)),
    gpu: unique(providerConfigs.map((item) => item.specs.gpu)),
    storage: unique(providerConfigs.map((item) => item.specs.storage)),
  };
  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase();
    return providerConfigs.filter((config) => {
      const haystack = `${config.name} ${config.description} ${config.specs.cpu} ${config.specs.ram} ${config.specs.gpu} ${config.specs.storage}`.toLowerCase();
      const price = config.pricing.month;
      return (!text || haystack.includes(text)) && (cpu === 'all' || config.specs.cpu === cpu) && (ram === 'all' || config.specs.ram === ram) && (gpu === 'all' || config.specs.gpu === gpu) && (storage === 'all' || config.specs.storage === storage) && (maxPrice === 'all' || price <= Number(maxPrice));
    });
  }, [providerConfigs, query, cpu, ram, gpu, storage, maxPrice]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const selected = filtered.find((config) => config.id === configId) ?? visible[0] ?? filtered[0];
  const pricePerDay = selected ? Math.round(selected.pricing.month / 30) : 0;
  const maxQuantity = selected?.availableCount ?? 1;
  const safeQuantity = Math.min(quantity, maxQuantity);
  const total = pricePerDay * safeQuantity * days;

  const reset = () => { setQuery(''); setCpu('all'); setRam('all'); setGpu('all'); setStorage('all'); setMaxPrice('all'); setPage(1); };
  const changeFilter = (setter: (value: string) => void, value: string) => { setter(value); setPage(1); };

  return <main className={styles.page}><section className={styles.hero}><span className={styles.eyebrow}>NHÀ CUNG CẤP</span><h1>{providerId ?? 'Máy chủ vật lý'}</h1><p>Chọn cấu hình phù hợp từ các máy chủ đang sẵn sàng.</p></section><section className={styles.bookingGrid}><div className={styles.configList}><div className={styles.listHeader}><div><span className={styles.eyebrow}>CONFIGURATIONS</span><h2>Cấu hình có sẵn <small>({filtered.length})</small></h2></div><input className={styles.search} value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Tìm CPU, RAM, GPU..." /></div><div className={styles.filters}><select value={cpu} onChange={(event) => changeFilter(setCpu, event.target.value)}>{options.cpu.map((value) => <option key={value} value={value}>{value === 'all' ? 'Tất cả CPU' : value}</option>)}</select><select value={ram} onChange={(event) => changeFilter(setRam, event.target.value)}>{options.ram.map((value) => <option key={value} value={value}>{value === 'all' ? 'Tất cả RAM' : value}</option>)}</select><select value={gpu} onChange={(event) => changeFilter(setGpu, event.target.value)}>{options.gpu.map((value) => <option key={value} value={value}>{value === 'all' ? 'Tất cả GPU' : value}</option>)}</select><select value={storage} onChange={(event) => changeFilter(setStorage, event.target.value)}>{options.storage.map((value) => <option key={value} value={value}>{value === 'all' ? 'Tất cả Storage' : value}</option>)}</select><select value={maxPrice} onChange={(event) => changeFilter(setMaxPrice, event.target.value)}><option value="all">Mọi mức giá</option><option value="1000000">Dưới 1 triệu/tháng</option><option value="1500000">Dưới 1,5 triệu/tháng</option><option value="2500000">Dưới 2,5 triệu/tháng</option></select><button type="button" className={styles.clearButton} onClick={reset}>Xóa lọc</button></div>{visible.length ? visible.map((config) => <button type="button" key={config.id} className={`${styles.configCard} ${config.id === selected?.id ? styles.selected : ''}`} onClick={() => { setConfigId(config.id); setQuantity(1); }}><img src={config.images[0]} alt={config.name} /><span className={styles.configMain}><strong>{config.name}</strong><small>{config.description}</small><span className={styles.specGrid}><span>CPU<strong>{config.specs.cpu}</strong></span><span>RAM<strong>{config.specs.ram}</strong></span><span>GPU<strong>{config.specs.gpu}</strong></span><span>Storage<strong>{config.specs.storage}</strong></span></span></span><span className={styles.configMeta}><strong>{money.format(config.pricing.month)}</strong><small>/ tháng</small><em>{config.availableCount} máy available</em></span></button>) : <p>Không tìm thấy cấu hình phù hợp.</p>}<div className={styles.pagination}>{Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button type="button" key={number} className={number === page ? styles.activePage : ''} onClick={() => setPage(number)}>{number}</button>)}</div></div><aside className={styles.summary}><h2>Thông tin thuê</h2>{selected ? <><div className={styles.summaryConfig}><strong>{selected.name}</strong><span>{selected.specs.cpu} · {selected.specs.ram} · {selected.specs.storage}</span></div><label>Số lượng máy<input type="number" min="1" max={maxQuantity} value={safeQuantity} onChange={(event) => setQuantity(Math.max(1, Math.min(maxQuantity, Number(event.target.value) || 1)))} /></label><label>Số ngày thuê<input type="number" min="1" max="365" value={days} onChange={(event) => setDays(Math.max(1, Number(event.target.value) || 1))} /></label><div className={styles.priceRows}><span>Giá 24 giờ <strong>{money.format(selected.pricing.test24h)}</strong></span><span>Giá 1 tuần <strong>{money.format(selected.pricing.week)}</strong></span><span>Giá 1 tháng <strong>{money.format(selected.pricing.month)}</strong></span></div><div className={styles.total}><span>Tạm tính</span><strong>{money.format(total)}</strong></div><button type="button" className={styles.paymentButton} onClick={() => navigate(`/booking?configId=${selected.id}&quantity=${safeQuantity}&days=${days}`)}>Thanh toán</button></> : <p>Chọn một cấu hình để tiếp tục.</p>}</aside></section></main>;
}