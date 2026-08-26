import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import styles from './page.module.css';

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });
type Method = 'momo' | 'bank';

export function CheckoutPage() {
  const [params] = useSearchParams();
  const config = machineConfigs.find((item) => item.id === params.get('configId')) ?? machineConfigs[0];
  const quantity = Math.max(1, Number(params.get('quantity')) || 1);
  const days = Math.max(1, Number(params.get('days')) || 1);
  const unit = Math.round(config.pricing.month / 30);
  const total = unit * quantity * days;
  const [method, setMethod] = useState<Method>('momo');
  const [processing, setProcessing] = useState(false);
  const [paid, setPaid] = useState(false);
  const methodLabel = useMemo(() => method === 'momo' ? 'MoMo' : 'chuyển khoản ngân hàng', [method]);

  function submitPayment() {
    setProcessing(true);
    window.setTimeout(() => { setProcessing(false); setPaid(true); }, 1100);
  }

  return <main className={styles.page}><div className={styles.orbOne} /><div className={styles.orbTwo} /><header className={styles.header}><a href="/" className={styles.brand}><span>◈</span> MACHINE RENTAL</a><div className={styles.secure}><span>⌁</span> Thanh toán an toàn</div></header><section className={styles.hero}><div><p className={styles.kicker}>CHECKOUT · BƯỚC 2/2</p><h1>Hoàn tất đơn thuê<br /><em>trong vài giây.</em></h1><p className={styles.subtitle}>Chọn phương thức thanh toán yêu thích. Giao diện mô phỏng, chưa phát sinh giao dịch thật.</p></div><div className={styles.progress}><span className={styles.done}>✓</span><i /><span className={styles.current}>2</span><small>Thanh toán</small></div></section><section className={styles.layout}><div className={styles.panel}><div className={styles.panelHead}><div><p className={styles.kicker}>PAYMENT METHOD</p><h2>Chọn phương thức</h2></div><span className={styles.lock}>⌾ SSL SECURED</span></div><div className={styles.methods}><button className={`${styles.method} ${method === 'momo' ? styles.selected : ''}`} onClick={() => setMethod('momo')} type="button"><span className={`${styles.methodIcon} ${styles.momo}`}>M</span><span><strong>Ví MoMo</strong><small>Quét QR hoặc mở ứng dụng MoMo</small></span><b>{method === 'momo' ? '✓' : ''}</b></button><button className={`${styles.method} ${method === 'bank' ? styles.selected : ''}`} onClick={() => setMethod('bank')} type="button"><span className={`${styles.methodIcon} ${styles.bank}`}>₫</span><span><strong>Chuyển khoản ngân hàng</strong><small>Vietcombank · Xác nhận nhanh chóng</small></span><b>{method === 'bank' ? '✓' : ''}</b></button></div><div className={`${styles.detail} ${method === 'bank' ? styles.bankDetail : ''}`}>{method === 'momo' ? <><div><span className={styles.liveDot} /> <strong>Đang chờ thanh toán MoMo</strong><p>Mở app MoMo và quét mã QR bên cạnh để tiếp tục.</p></div><div className={styles.qr}><div className={styles.qrPattern}>▦</div><small>MOCK QR</small></div></> : <><div><span className={styles.liveDot} /> <strong>Thông tin chuyển khoản</strong><p>Vui lòng ghi đúng nội dung để hệ thống đối soát.</p></div><div className={styles.bankInfo}><span>Vietcombank</span><strong>0123 456 789</strong><small>CTK: MACHINE RENTAL</small><code>MACHINE-{config.id.toUpperCase()}</code></div></>}</div><button className={styles.submit} disabled={processing || paid} onClick={submitPayment} type="button">{processing ? <><span className={styles.spinner} /> Đang xử lý...</> : paid ? '✓ Đã gửi yêu cầu thanh toán' : `Xác nhận thanh toán qua ${methodLabel}`}<span>→</span></button>{paid && <div className={styles.success}>Yêu cầu đã được ghi nhận! Nhà cung cấp sẽ xác nhận đơn thuê của bạn.</div>}</div><aside className={styles.summary}><p className={styles.kicker}>ORDER SUMMARY</p><h2>Chi tiết đơn thuê</h2><div className={styles.machine}><div className={styles.machineIcon}>▰</div><div><strong>{config.name}</strong><span>{config.location} · {config.os}</span></div></div><div className={styles.line}><span>Số lượng</span><strong>{quantity} máy</strong></div><div className={styles.line}><span>Thời gian thuê</span><strong>{days} ngày</strong></div><div className={styles.line}><span>Đơn giá/ngày</span><strong>{money.format(unit)}</strong></div><div className={styles.total}><span>Tổng thanh toán</span><strong>{money.format(total)}</strong></div><div className={styles.note}>✦ Giá đã bao gồm phí thuê máy<br />✦ Không lưu thông tin thanh toán</div></aside></section></main>;
}

export default CheckoutPage;
