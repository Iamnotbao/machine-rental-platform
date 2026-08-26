import { useState } from 'react';
import { Link } from 'react-router-dom';
import { billingProfiles } from '@/features/payments/data/payment.mock';
import { ROUTES } from '@/constants/route.constants';
import styles from '@/features/payments/payment.module.css';

export default function BillingPage() {
  const current = billingProfiles[0];
  const [saved, setSaved] = useState(false);
  const [companyName, setCompanyName] = useState(current?.companyName ?? '');
  const [taxCode, setTaxCode] = useState(current?.taxCode ?? '');
  const [contactName, setContactName] = useState(current?.contactName ?? '');
  const [email, setEmail] = useState(current?.email ?? '');
  const [phone, setPhone] = useState(current?.phone ?? '');
  const [address, setAddress] = useState(current?.address ?? '');

  return <main className={styles.page}><div className={styles.container}><div className={styles.topbar}><div><p className={styles.eyebrow}>Billing profile</p><h1 className={styles.title}>Thông tin xuất hóa đơn</h1><p className={styles.subtitle}>UI mock để sau này nối API billing. Hiện tại lưu chỉ mô phỏng phía client.</p></div><nav className={styles.nav}><Link to={ROUTES.paymentHistory}>Lịch sử thanh toán</Link><Link to={ROUTES.machines}>Thuê máy</Link></nav></div><section className={styles.card}><div className={styles.form}><label>Tên công ty<input value={companyName} onChange={(event)=>setCompanyName(event.target.value)} /></label><label>Mã số thuế<input value={taxCode} onChange={(event)=>setTaxCode(event.target.value)} /></label><label>Người liên hệ<input value={contactName} onChange={(event)=>setContactName(event.target.value)} /></label><label>Email<input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} /></label><label>Điện thoại<input value={phone} onChange={(event)=>setPhone(event.target.value)} /></label><label className={styles.wide}>Địa chỉ<textarea rows={3} value={address} onChange={(event)=>setAddress(event.target.value)} /></label></div><div className={styles.actions}><button type="button" className={styles.primary} onClick={()=>setSaved(true)}>Lưu thông tin billing</button></div>{saved && <div className={styles.notice}>Đã lưu mock. Khi có backend, phần này sẽ gọi billing service.</div>}</section></div></main>;
}
