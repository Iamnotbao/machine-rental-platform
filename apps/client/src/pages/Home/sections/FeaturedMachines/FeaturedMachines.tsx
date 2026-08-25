import { Container, Heading, Section, Text } from '@machine-rental/ui';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/Reveal';
import styles from './FeaturedMachines.module.css';

type Provider = { id: string; name: string; description: string };

const providers: Provider[] = [
  { id: 'provider-a', name: 'Provider A', description: 'Máy chủ vật lý hiệu năng cao cho hệ thống cần sự ổn định.' },
  { id: 'provider-b', name: 'Provider B', description: 'Cấu hình linh hoạt cho website, ứng dụng và nền tảng doanh nghiệp.' },
  { id: 'provider-c', name: 'Provider C', description: 'Giải pháp máy chủ đa dạng với mức giá phù hợp nhiều nhu cầu.' },
];

export function FeaturedMachines() {
  return <Section className={styles.section}><Container><Reveal><Text className={styles.eyebrow}>NHÀ CUNG CẤP NỔI BẬT</Text><Heading className={styles.title}>Thuê máy chủ vật lý hiệu năng cao</Heading><Text className={styles.description}>Lựa chọn nhà cung cấp phù hợp và tìm cấu hình server theo nhu cầu.</Text></Reveal><div className={styles.grid}>{providers.map((provider,index)=><Reveal key={provider.id} delay={index*.08}><Link to={`/machine/${provider.id}`} className={styles.card}><h3>{provider.name}</h3><p>{provider.description}</p></Link></Reveal>)}</div></Container></Section>;
}