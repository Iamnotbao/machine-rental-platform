import { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import { ROUTES } from '@/constants/route.constants';
import styles from '@/features/payments/payment.module.css';

const money = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

type Method = 'momo' | 'bank' | 'card';

const providerNames: Record<string, string> = {
  'provider-a': 'Nhà cung cấp A',
  'provider-b': 'Nhà cung cấp B',
  'provider-c': 'Nhà cung cấp C',
};

export function CheckoutPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const fallbackConfig = machineConfigs[0];
  const [method, setMethod] = useState<Method>('momo');
  const [processing, setProcessing] = useState(false);

  if (!fallbackConfig) return <main className={styles.page}>Không có cấu hình máy để thanh toán.</main>;

  const config = machineConfigs.find((item) => item.id === params.get('configId')) ?? fallbackConfig;
  const quantity = Math.min(config.availableCount, Math.max(1, Number(params.get('quantity')) || 1));
  const days = Math.max(1, Number(params.get('days')) || 1);
  const providerId = (params.get('provider') ?? config.providerId).toLowerCase();
  const provider = providerNames[providerId] ?? providerId;
  const unit = Math.round(config.pricing.month / 30);
  const total = unit * quantity * days;
  const purchaseId = params.get('purchaseId') ?? `PUR-${config.id}`;
  const billingId = params.get('billingId') ?? 'billing-1';
  const methodLabel = useMemo(
    () => method === 'momo' ? 'MoMo' : method === 'bank' ? 'chuyển khoản ngân hàng' : 'thẻ',
    [method],
  );

  function finish(result: 'success' | 'failed') {
    setProcessing(true);
    window.setTimeout(() => {
      const next = new URLSearchParams({
        configId: config.id,
        quantity: String(quantity),
        days: String(days),
        provider: providerId,
        billingId,
        purchaseId,
        total: String(total),
        method,
      });
      navigate(`${result === 'success' ? ROUTES.paymentSuccess : ROUTES.paymentFailed}?${next.toString()}`);
    }, 650);
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div><p className={styles.eyebrow}>Checkout · Bước 3/3</p><h1 className={styles.title}>Thanh toán đơn thuê</h1><p className={styles.subtitle}>Chọn phương thức thanh toán. Hai nút test bên dưới giúp xem cả giao diện thành công và thất bại trước khi tích hợp cổng thanh toán thật.</p></div>
          <nav className={styles.nav}><Link to={ROUTES.billing}>Billing</Link><Link to={ROUTES.paymentHistory}>Lịch sử thanh toán</Link></nav>
        </div>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>Phương thức thanh toán</h2>
            <div className={styles.methods}>
              <button type="button" className={`${styles.method} ${method === 'momo' ? styles.selected : ''}`} onClick={() => setMethod('momo')}><strong>Ví MoMo</strong><span>Thanh toán bằng QR / ứng dụng MoMo</span></button>
              <button type="button" className={`${styles.method} ${method === 'bank' ? styles.selected : ''}`} onClick={() => setMethod('bank')}><strong>Chuyển khoản ngân hàng</strong><span>Nhận nội dung chuyển khoản cho đơn hàng</span></button>
              <button type="button" className={`${styles.method} ${method === 'card' ? styles.selected : ''}`} onClick={() => setMethod('card')}><strong>Thẻ thanh toán</strong><span>Giao diện mô phỏng Visa / Mastercard</span></button>
            </div>

            <div className={styles.notice}>Đang chọn: <strong>{methodLabel}</strong>. Purchase ID: <strong>{purchaseId}</strong></div>
            <div className={styles.actions}>
              <button type="button" className={styles.primary} disabled={processing} onClick={() => finish('success')}>{processing ? 'Đang xử lý...' : 'Test thanh toán thành công'}</button>
              <button type="button" className={styles.danger} disabled={processing} onClick={() => finish('failed')}>Test thanh toán thất bại</button>
            </div>
          </div>

          <aside className={`${styles.card} ${styles.summary}`}>
            <p className={styles.eyebrow}>Order summary</p><h2>{config.name}</h2>
            <div className={styles.row}><span>Provider</span><strong>{provider}</strong></div>
            <div className={styles.row}><span>Billing</span><strong>{billingId}</strong></div>
            <div className={styles.row}><span>Số lượng</span><strong>{quantity} máy</strong></div>
            <div className={styles.row}><span>Thời gian thuê</span><strong>{days} ngày</strong></div>
            <div className={styles.row}><span>Đơn giá/ngày</span><strong>{money.format(unit)}</strong></div>
            <div className={styles.total}><span>Tổng thanh toán</span><strong>{money.format(total)}</strong></div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default CheckoutPage;
