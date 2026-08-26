import { Link, useParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';

export function MachineDetailPage() {
  const { id } = useParams();
  const machine = machineConfigs.find((item) => item.id === id) ?? machineConfigs[0];
  const provider = machine.provider || machine.providerName || 'Nhà cung cấp';
  const checkoutUrl = `/checkout?configId=${encodeURIComponent(machine.id)}&quantity=1&days=1&provider=${encodeURIComponent(provider)}`;
  return <main style={{ maxWidth: 900, margin: '0 auto', padding: 40 }}><p style={{ color: '#087e82', fontWeight: 800 }}>MACHINE DETAIL</p><h1>{machine.name}</h1><p>{provider} · {machine.location} · {machine.os}</p><p>Giá thuê từ {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(machine.pricing.month)} / tháng</p><Link to={checkoutUrl}>Thanh toán ngay →</Link></main>;
}

export default MachineDetailPage;
