import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import { ROUTES } from '@/constants/route.constants';
import styles from './page.module.css';

const money = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

type Method = 'momo' | 'bank';

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

  if (!fallbackConfig) {
    return <main className={styles.page}>Không có cấu hình máy để thanh toán.</main>;
  }

  const config = machineConfigs.find((item) => item.id === params.get('configId')) ?? fallbackConfig;
  const quantity = Math.min(
    config.availableCount,
    Math.max(1, Number(params.get('quantity')) || 1),
  );
  const days = Math.max(1, Number(params.get('days')) || 1);
  const provider = providerNames[params.get('provider') ?? config.providerId] ?? config.providerId;
  const unit = Math.round(config.pricing.month / 30);
  const total = unit * quantity * days;
  const methodLabel = useMemo(
    () => (method === 'momo' ? 'MoMo' : 'chuyển khoản ngân hàng'),
    [method],
  );

  function submitPayment() {
    setProcessing(true);
    window.setTimeout(() => {
      navigate(ROUTES.orderSuccess, {
        state: { configId: config.id, quantity, days, total, provider },
      });
    }, 900);
  }

  return (
    <main className={styles.page}>
      <section className={styles.layout}>
        <div className={styles.panel}>
          <p className={styles.kicker}>CHECKOUT</p>
          <h1>Hoàn tất đơn thuê</h1>
          <p>Chọn phương thức thanh toán. Đây là giao diện mô phỏng, chưa phát sinh giao dịch thật.</p>

          <div className={styles.methods}>
            <button type="button" className={method === 'momo' ? styles.selected : ''} onClick={() => setMethod('momo')}>
              <strong>Ví MoMo</strong>
              <span>Thanh toán bằng ứng dụng MoMo</span>
            </button>
            <button type="button" className={method === 'bank' ? styles.selected : ''} onClick={() => setMethod('bank')}>
              <strong>Chuyển khoản ngân hàng</strong>
              <span>Nhận thông tin tài khoản để chuyển khoản</span>
            </button>
          </div>

          <div className={styles.paymentBox}>
            {method === 'momo' ? (
              <p>Mở MoMo và sử dụng mã thanh toán mô phỏng để tiếp tục.</p>
            ) : (
              <div>
                <strong>Vietcombank · 0123 456 789</strong>
                <p>Nội dung: MACHINE-{config.id.toUpperCase()}</p>
              </div>
            )}
          </div>

          <button type="button" className={styles.submit} disabled={processing} onClick={submitPayment}>
            {processing ? 'Đang xử lý...' : `Xác nhận thanh toán qua ${methodLabel}`}
          </button>
        </div>

        <aside className={styles.summary}>
          <p className={styles.kicker}>ORDER SUMMARY</p>
          <h2>{config.name}</h2>
          <span>{provider}</span>
          <span>{config.location} · {config.os}</span>
          <div className={styles.line}><span>Số lượng</span><strong>{quantity} máy</strong></div>
          <div className={styles.line}><span>Thời gian thuê</span><strong>{days} ngày</strong></div>
          <div className={styles.line}><span>Đơn giá/ngày</span><strong>{money.format(unit)}</strong></div>
          <div className={styles.total}><span>Tổng thanh toán</span><strong>{money.format(total)}</strong></div>
        </aside>
      </section>
    </main>
  );
}

export default CheckoutPage;
