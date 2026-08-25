import { Container, Heading, Section, Text } from '@machine-rental/ui';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/Reveal';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import styles from './FeaturedMachines.module.css';

type Provider = { id: string; name: string; description: string; location: string; configs: number; machines: number; averagePrice: number; image: string };
const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });

export function FeaturedMachines() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const providers = useMemo(() => ['provider-a', 'provider-b', 'provider-c'].map((id, index) => { const configs = machineConfigs.filter((machine) => machine.providerId === id); return { id, name: `Provider ${String.fromCharCode(65 + index)}`, description: 'Hạ tầng máy chủ vật lý ổn định, sẵn sàng cho website và ứng dụng.', location: configs[0]?.location ?? 'Việt Nam', configs: configs.length, machines: configs.reduce((sum, machine) => sum + machine.availableCount, 0), averagePrice: configs.length ? Math.round(configs.reduce((sum, machine) => sum + machine.pricing.month, 0) / configs.length) : 0, image: configs[0]?.images[0] ?? '/images/machines/server-1.jpg' }; }), []);
  const filtered = providers.filter((provider) => `${provider.name} ${provider.location} ${provider.description}`.toLowerCase().includes(query.trim().toLowerCase()));
  const pageCount = Math.max(1, Math.ceil(filtered.length / 3));
  const visible = filtered.slice((page - 1) * 3, page * 3);

  return <Section className={styles.section}><Container><Reveal><Text className={styles.eyebrow}>NHÀ CUNG CẤP NỔI BẬT</Text><Heading className={styles.title}>Thuê máy chủ vật lý hiệu năng cao</Heading><Text className={styles.description}>Chọn vị trí, cấu hình và mức giá phù hợp cho hệ thống của bạn.</Text><input className={styles.search} value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Tìm provider hoặc vị trí..." /></Reveal><div className={styles.grid}>{visible.map((provider,index)=><Reveal key={provider.id} delay={index*.08}><Link to={`/machine/${provider.id}`} className={styles.card}><div className={styles.imageWrap}><img className={styles.image} src={provider.image} alt="" onError={(event) => { event.currentTarget.style.display = 'none'; }} /><span className={styles.imageFallback}>SERVER</span></div><div className={styles.body}><span className={styles.cardLabel}>SERVER PROVIDER</span><h3>{provider.name}</h3><p>{provider.description}</p><div className={styles.meta}>{[['Vị trí',provider.location],['Cấu hình',String(provider.configs)],['Máy sẵn',String(provider.machines)],['TB từ',money.format(provider.averagePrice)]].map(([label,value])=><span key={label}><small>{label}</small><strong>{value}</strong></span>)}</div></div></Link></Reveal>)}</div>{!visible.length&&<p className={styles.empty}>Không tìm thấy provider phù hợp.</p>}<div className={styles.pagination}>{Array.from({length:pageCount},(_,index)=>index+1).map((number)=><button type="button" key={number} className={number===page?styles.activePage:''} onClick={()=>setPage(number)}>{number}</button>)}</div></Container></Section>;
}