import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import { paymentMethods } from '@/features/payments/data/payment-method.mock';
import type { PaymentMethod } from '@/features/payments/types';
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

export function CheckoutPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const fallbackConfig = machineConfigs[0];
  const [method, setMethod] = useState<PaymentMethod>('momo');
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
  const selectedMethod = paymentMethods.find((item) => item.id === method) ?? paymentMethods[0];

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
          <div><p className={styles.eyebrow}>Checkout · Bước 3/3</p><h1 className={styles.title}>Thanh toán đơn thuê</h1><p className={styles.subtitle}>Chọn một phương thức thanh toán. Hình minh họa đang lấy từ mock data nên sau này chỉ cần thay URL ảnh hoặc dữ liệu từ backend.</p></div>
          <nav className={styles.nav}><Link to={ROUTES.billing}>Billing</Link><Link to={ROUTES.paymentHistory}>Lịch sử thanh toán</Link></nav>
        </div>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>Phương thức thanh toán</h2>
            <div className={styles.methods}>
              {paymentMethods.map((option) => (
                <label key={option.id} className={`${styles.method} ${method === option.id ? styles.selected : ''}`}>
                  <input
                    type="radio"
                    name="payment-method"
                    value={option.id}
                    checked={method === option.id}
                    onChange={() => setMethod(option.id)}
                  />
                  <img src={option.imageUrl} alt={option.imageAlt} />
                  <span className={styles.methodCopy}>
                    <strong>{option.label}</strong>
                    <span>{option.description}</span>
                  </span>
                </label>
              ))}
            </div>

            {selectedMethod && <div className={styles.methodPreview}><img src={selectedMethod.imageUrl} alt="" /><div><span>Đang chọn</span><strong>{selectedMethod.label}</strong><small>Purchase ID: {purchaseId}</small></div></div>}
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
