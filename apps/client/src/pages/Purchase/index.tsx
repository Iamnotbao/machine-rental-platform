import { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import { billingProfiles } from '@/features/payments/data/payment.mock';
import { paymentUiService } from '@/features/payments/services/payment-ui.service';
import { ROUTES } from '@/constants/route.constants';
import styles from '@/features/payments/payment.module.css';

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });
const providerNames: Record<string, string> = {
  'provider-a': 'Nhà cung cấp A',
  'provider-b': 'Nhà cung cấp B',
  'provider-c': 'Nhà cung cấp C',
};

export default function PurchasePage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const fallback = machineConfigs[0];
  const [billingId, setBillingId] = useState(billingProfiles.find((item) => item.isDefault)?.id ?? billingProfiles[0]?.id ?? '');
  const [processing, setProcessing] = useState(false);

  if (!fallback) return <main className={styles.page}>Không có cấu hình máy.</main>;

  const config = machineConfigs.find((item) => item.id === params.get('configId')) ?? fallback;
  const quantity = Math.min(config.availableCount, Math.max(1, Number(params.get('quantity')) || 1));
  const days = Math.max(1, Number(params.get('days')) || 1);
  const providerId = (params.get('provider') ?? config.providerId).toLowerCase();
  const providerName = providerNames[providerId] ?? providerId;
  const unitPrice = Math.round(config.pricing.month / 30);
  const total = useMemo(() => unitPrice * quantity * days, [unitPrice, quantity, days]);

  async function continueToPayment() {
    setProcessing(true);
    const result = await paymentUiService.submitPurchase({
      configId: config.id,
      providerId,
      providerName,
      quantity,
      days,
      unitPrice,
      total,
    });
    const next = new URLSearchParams({
      configId: config.id,
      quantity: String(quantity),
      days: String(days),
      provider: providerId,
      billingId,
      purchaseId: result.purchaseId,
    });
    navigate(`${ROUTES.checkout}?${next.toString()}`);
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div><p className={styles.eyebrow}>Purchase · Bước 2/3</p><h1 className={styles.title}>Xác nhận đơn thuê</h1><p className={styles.subtitle}>Kiểm tra cấu hình, nhà cung cấp và thông tin xuất hóa đơn trước khi thanh toán.</p></div>
          <nav className={styles.nav}><Link to={ROUTES.billing}>Billing</Link><Link to={ROUTES.paymentHistory}>Lịch sử thanh toán</Link></nav>
        </div>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>Thông tin thanh toán</h2>
            <div className={styles.billingList}>
              {billingProfiles.map((profile) => (
                <button key={profile.id} type="button" className={`${styles.billingOption} ${billingId === profile.id ? styles.selected : ''}`} onClick={() => setBillingId(profile.id)}>
                  <strong>{profile.label}{profile.isDefault ? ' · Mặc định' : ''}</strong>
                  <span>{profile.companyName || profile.contactName}<br />{profile.email} · {profile.phone}<br />{profile.address}</span>
                </button>
              ))}
            </div>
            <div className={styles.actions}><Link className={styles.secondary} to={ROUTES.billing}>Quản lý billing</Link><button className={styles.primary} type="button" disabled={processing || !billingId} onClick={continueToPayment}>{processing ? 'Đang tạo purchase...' : 'Tiếp tục thanh toán'}</button></div>
          </div>

          <aside className={`${styles.card} ${styles.summary}`}>
            <p className={styles.eyebrow}>Order summary</p><h2>{config.name}</h2>
            <div className={styles.row}><span>Provider</span><strong>{providerName}</strong></div>
            <div className={styles.row}><span>Số lượng</span><strong>{quantity} máy</strong></div>
            <div className={styles.row}><span>Thời gian</span><strong>{days} ngày</strong></div>
            <div className={styles.row}><span>Đơn giá/ngày</span><strong>{money.format(unitPrice)}</strong></div>
            <div className={styles.total}><span>Tổng thanh toán</span><strong>{money.format(total)}</strong></div>
          </aside>
        </section>
      </div>
    </main>
  );
}
