import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';

interface OrderState {
  configId: string;
  quantity: number;
  days: number;
  total: number;
  provider: string;
}

const money = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

export function OrderSuccessPage() {
  const { state } = useLocation();
  const order = state as OrderState | null;

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#f5fafb' }}>
      <section style={{ width: 'min(100%, 560px)', padding: 42, textAlign: 'center', borderRadius: 24, background: '#fff', boxShadow: '0 24px 60px rgba(20,55,72,.1)' }}>
        <h1>Yêu cầu thanh toán đã được ghi nhận</h1>
        <p>Nhà cung cấp sẽ xác nhận đơn thuê của bạn.</p>
        {order && (
          <div style={{ display: 'grid', gap: 8, margin: '24px 0', textAlign: 'left' }}>
            <span>Cấu hình: <strong>{order.configId}</strong></span>
            <span>Nhà cung cấp: <strong>{order.provider}</strong></span>
            <span>Số lượng: <strong>{order.quantity} máy</strong></span>
            <span>Thời gian: <strong>{order.days} ngày</strong></span>
            <span>Tổng: <strong>{money.format(order.total)}</strong></span>
          </div>
        )}
        <Link to={ROUTES.machines}>Quay lại danh sách máy</Link>
      </section>
    </main>
  );
}

export default OrderSuccessPage;
