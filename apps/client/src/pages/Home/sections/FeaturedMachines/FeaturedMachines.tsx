import { Container, Heading, Section, Text } from '@machine-rental/ui';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/Reveal';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import styles from './FeaturedMachines.module.css';

type Provider = { id: string; name: string; description: string; location: string; configs: number; machines: number; averagePrice: number };

const providers: Provider[] = ['provider-a', 'provider-b', 'provider-c'].map((id, index) => {
  const configs = machineConfigs.filter((machine) => machine.providerId === id);
  return { id, name: `Provider ${String.fromCharCode(65 + index)}`, description: 'Hạ tầng máy chủ vật lý ổn định, sẵn sàng cho website và ứng dụng.', location: configs[0]?.location ?? 'Việt Nam', configs: configs.length, machines: configs.reduce((sum, machine) => sum + machine.availableCount, 0), averagePrice: configs.length ? Math.round(configs.reduce((sum, machine) => sum + machine.pricing.month, 0) / configs.length) : 0 };
});

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });

export function FeaturedMachines() {
  return <Section className={styles.section}><Container><Reveal><Text className={styles.eyebrow}>NHÀ CUNG CẤP NỔI BẬT</Text><Heading className={styles.title}>Thuê máy chủ vật lý hiệu năng cao</Heading><Text className={styles.description}>Chọn vị trí, cấu hình và mức giá phù hợp cho hệ thống của bạn.</Text></Reveal><div className={styles.grid}>{providers.map((provider,index)=><Reveal key={provider.id} delay={index*.08}><Link to={`/machine/${provider.id}`} className={styles.card}><span className={styles.cardLabel}>SERVER PROVIDER</span><h3>{provider.name}</h3><p>{provider.description}</p><div className={styles.meta}><span>Vị trí<strong>{provider.location}</strong></span><span>Cấu hình<strong>{provider.configs}</strong></span><span>Máy sẵn<strong>{provider.machines}</strong></span><span>TB từ<strong>{money.format(provider.averagePrice)}</strong></span></div></Link></Reveal>)}</div></Container></Section>;
}