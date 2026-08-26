import { Link } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';

export function MachinesPage() {
  return <main style={{ maxWidth: 1100, margin: '0 auto', padding: 40 }}><h1>Danh sách máy</h1><p>Chọn cấu hình phù hợp cho nhu cầu thuê của bạn.</p><section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24 }}>{machineConfigs.map((machine) => <article key={machine.id} style={{ padding: 20, border: '1px solid #dbe7ec', borderRadius: 16, background: '#fff' }}><h2>{machine.name}</h2><p>{machine.location} · {machine.os}</p><strong>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(machine.pricing.month)} / tháng</strong><br /><Link to={`/machines/${machine.id}`}>Xem chi tiết</Link></article>)}</section></main>;
}

export default MachinesPage;
