import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';
import styles from '@/features/payments/payment.module.css';

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });

export function PaymentSuccessPage() {
  const [params] = useSearchParams();
  return <main className={styles.page}><section className={`${styles.card} ${styles.result}`}><div className={`${styles.resultMark} ${styles.resultSuccess}`}>OK</div><p className={styles.eyebrow}>Payment successful</p><h1>Thanh toán thành công</h1><p>Đơn thuê đã được ghi nhận trong dữ liệu mock.</p><div className={styles.row}><span>Mã purchase</span><strong>{params.get('purchaseId') ?? 'PUR-DEMO'}</strong></div><div className={styles.row}><span>Provider</span><strong>{params.get('provider') ?? 'provider-a'}</strong></div><div className={styles.row}><span>Số tiền</span><strong>{money.format(Number(params.get('total')) || 0)}</strong></div><div className={styles.actions}><Link className={styles.primary} to={ROUTES.paymentHistory}>Xem lịch sử thanh toán</Link><Link className={styles.secondary} to={ROUTES.machines}>Thuê thêm máy</Link></div></section></main>;
}

export function PaymentFailedPage() {
  const [params] = useSearchParams();
  const retry = new URLSearchParams();
  ['configId','quantity','days','provider','billingId','purchaseId'].forEach((key)=>{ const value=params.get(key); if(value) retry.set(key,value); });
  return <main className={styles.page}><section className={`${styles.card} ${styles.result}`}><div className={`${styles.resultMark} ${styles.resultFailed}`}>!</div><p className={styles.eyebrow}>Payment failed</p><h1>Thanh toán chưa thành công</h1><p>Giao dịch mock bị từ chối. Bạn có thể thử lại hoặc chọn phương thức khác.</p><div className={styles.error}>Không có tiền thật bị trừ. Đây chỉ là trạng thái test UI.</div><div className={styles.actions}><Link className={styles.primary} to={`${ROUTES.checkout}?${retry.toString()}`}>Thử thanh toán lại</Link><Link className={styles.secondary} to={ROUTES.paymentHistory}>Xem lịch sử</Link></div></section></main>;
}
