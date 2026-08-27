import { Link } from 'react-router-dom';
import { paymentHistory } from '@/features/payments/data/payment.mock';
import type { PaymentMethod } from '@/features/payments/types';
import { ROUTES } from '@/constants/route.constants';
import styles from '@/features/payments/payment.module.css';

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });
const statusLabel = { PAID: 'Thành công', PENDING: 'Đang chờ', FAILED: 'Thất bại' } as const;
const methodLabel: Record<PaymentMethod, string> = {
  momo: 'MoMo',
  bank: 'Chuyển khoản',
  card: 'Thẻ',
  points: 'Points / Coins',
};

export default function PaymentHistoryPage() {
  return <main className={styles.page}><div className={styles.container}><div className={styles.topbar}><div><p className={styles.eyebrow}>Payment history</p><h1 className={styles.title}>Lịch sử thanh toán</h1><p className={styles.subtitle}>Dữ liệu test để hoàn thiện UI trước khi nối backend.</p></div><nav className={styles.nav}><Link to={ROUTES.billing}>Billing</Link><Link to={ROUTES.machines}>Thuê máy</Link></nav></div><div className={styles.tableWrap}><table className={styles.table}><thead><tr><th>Mã thanh toán</th><th>Đơn hàng</th><th>Máy / Provider</th><th>Phương thức</th><th>Số tiền</th><th>Trạng thái</th><th>Thời gian</th></tr></thead><tbody>{paymentHistory.map((item)=><tr key={item.id}><td><strong>{item.id}</strong></td><td>{item.orderId}</td><td>{item.machineName}<br /><small>{item.providerName}</small></td><td>{methodLabel[item.method]}</td><td>{money.format(item.amount)}</td><td><span className={`${styles.status} ${item.status === 'PAID' ? styles.paid : item.status === 'PENDING' ? styles.pending : styles.failed}`}>{statusLabel[item.status]}</span></td><td>{new Date(item.paidAt).toLocaleString('vi-VN')}</td></tr>)}</tbody></table></div></div></main>;
}
