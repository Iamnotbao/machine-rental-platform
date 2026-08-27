import { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { accountDashboard } from '@/features/account/data/account.mock';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import { paymentMethods } from '@/features/payments/data/payment-method.mock';
import type { PaymentMethod } from '@/features/payments/types';
import { ROUTES } from '@/constants/route.constants';
import styles from '@/features/payments/payment.module.css';

const money=new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND',maximumFractionDigits:0});
const number=new Intl.NumberFormat('vi-VN');
const providerNames:Record<string,string>={'provider-a':'Nhà cung cấp A','provider-b':'Nhà cung cấp B','provider-c':'Nhà cung cấp C'};
const promos={RENTORA10:{type:'percent',value:10,min:300000,max:200000},POINTS50:{type:'fixed',value:50000,min:250000,max:50000},NEWUSER:{type:'percent',value:15,min:500000,max:300000}} as const;

type CheckoutMode='qr'|'points';

export function CheckoutPage(){
  const[params]=useSearchParams();
  const navigate=useNavigate();
  const fallbackConfig=machineConfigs[0];
  const[mode,setMode]=useState<CheckoutMode>('qr');
  const[method,setMethod]=useState<Exclude<PaymentMethod,'points'>>('momo');
  const[processing,setProcessing]=useState(false);
  const[promoInput,setPromoInput]=useState('');
  const[appliedPromo,setAppliedPromo]=useState<keyof typeof promos|null>(null);
  const[promoMessage,setPromoMessage]=useState('');

  if(!fallbackConfig)return <main className={styles.page}>Không có cấu hình máy để thanh toán.</main>;

  const config=machineConfigs.find((item)=>item.id===params.get('configId'))??fallbackConfig;
  const quantity=Math.min(config.availableCount,Math.max(1,Number(params.get('quantity'))||1));
  const days=Math.max(1,Number(params.get('days'))||1);
  const providerId=(params.get('provider')??config.providerId).toLowerCase();
  const provider=providerNames[providerId]??providerId;
  const unit=Math.round(config.pricing.month/30);
  const subtotal=unit*quantity*days;
  const purchaseId=params.get('purchaseId')??`PUR-${config.id}`;
  const billingId=params.get('billingId')??'billing-1';
  const selectedMethod=paymentMethods.find((item)=>item.id===method)??paymentMethods[0];
  const discount=useMemo(()=>{if(!appliedPromo)return 0;const promo=promos[appliedPromo];if(subtotal<promo.min)return 0;return promo.type==='fixed'?promo.value:Math.min(Math.round(subtotal*promo.value/100),promo.max);},[appliedPromo,subtotal]);
  const total=Math.max(0,subtotal-discount);
  const pointsRequired=Math.ceil(total/accountDashboard.wallet.pointValue);
  const hasEnoughPoints=accountDashboard.wallet.points>=pointsRequired;

  const applyPromo=()=>{const code=promoInput.trim().toUpperCase() as keyof typeof promos;const promo=promos[code];if(!promo){setAppliedPromo(null);setPromoMessage('Mã không hợp lệ.');return;}if(subtotal<promo.min){setAppliedPromo(null);setPromoMessage(`Đơn cần tối thiểu ${money.format(promo.min)}.`);return;}setAppliedPromo(code);setPromoMessage(`Đã áp dụng ${code}.`);};

  function finish(result:'success'|'failed'){
    if(mode==='points'&&!hasEnoughPoints)return;
    setProcessing(true);
    const paymentMethod:PaymentMethod=mode==='points'?'points':method;
    window.setTimeout(()=>{
      const next=new URLSearchParams({configId:config.id,quantity:String(quantity),days:String(days),provider:providerId,billingId,purchaseId,total:String(total),method:paymentMethod,promo:appliedPromo??'',pointsUsed:mode==='points'?String(pointsRequired):'0'});
      navigate(`${result==='success'?ROUTES.paymentSuccess:ROUTES.paymentFailed}?${next.toString()}`);
    },650);
  }

  return <main className={styles.page}><div className={styles.container}>
    <div className={styles.topbar}><div><p className={styles.eyebrow}>Checkout · Bước 3/3</p><h1 className={styles.title}>Thanh toán đơn thuê</h1><p className={styles.subtitle}>Dùng Points trong tài khoản hoặc thanh toán qua QR mock.</p></div><nav className={styles.nav}><Link to={ROUTES.billing}>Billing</Link><Link to={ROUTES.paymentHistory}>Lịch sử thanh toán</Link></nav></div>
    <section className={styles.grid}><div className={styles.card}>
      <h2>Chọn cách thanh toán</h2>
      <div className={styles.paymentModeTabs}>
        <button type="button" className={mode==='points'?styles.activePaymentMode:''} onClick={()=>setMode('points')}><span>POINTS / COINS</span><strong>{number.format(accountDashboard.wallet.points)} P</strong><small>Dùng điểm đang có trong tài khoản</small></button>
        <button type="button" className={mode==='qr'?styles.activePaymentMode:''} onClick={()=>setMode('qr')}><span>QUÉT MÃ QR</span><strong>MoMo · Bank · Card</strong><small>Thanh toán bằng phương thức QR mock</small></button>
      </div>

      <section className={styles.promoBox}><div><span className={styles.qrLabel}>MÃ GIẢM GIÁ</span><p>Thử: RENTORA10 · POINTS50 · NEWUSER</p></div><div className={styles.promoForm}><input value={promoInput} onChange={(e)=>setPromoInput(e.target.value)} placeholder="Nhập mã giảm giá"/><button type="button" onClick={applyPromo}>Áp dụng</button></div>{promoMessage&&<small>{promoMessage}</small>}</section>

      {mode==='points'?<section className={`${styles.pointsPanel} ${!hasEnoughPoints?styles.pointsInsufficient:''}`}><div><span>SỐ DƯ POINTS</span><strong>{number.format(accountDashboard.wallet.points)} P</strong></div><div><span>POINTS CẦN DÙNG</span><strong>{number.format(pointsRequired)} P</strong></div><p>Quy đổi hiện tại: 1 Point = {money.format(accountDashboard.wallet.pointValue)}.</p>{!hasEnoughPoints&&<b>Bạn thiếu {number.format(pointsRequired-accountDashboard.wallet.points)} Points. Hãy mua thêm Points trong Ví của tôi hoặc chọn thanh toán QR.</b>}</section>:<>
        <div className={styles.methods}>{paymentMethods.map((option)=><label key={option.id} className={`${styles.method} ${method===option.id?styles.selected:''}`}><input type="radio" checked={method===option.id} onChange={()=>setMethod(option.id)}/><img src={option.imageUrl} alt={option.imageAlt}/><span className={styles.methodCopy}><strong>{option.label}</strong><span>{option.description}</span></span></label>)}</div>
        {selectedMethod&&<section className={styles.qrPanel}><div className={styles.qrImage}><img src={selectedMethod.instructions.qrImageUrl} alt="QR thanh toán mẫu"/></div><div className={styles.qrDetails}><span className={styles.qrLabel}>THÔNG TIN THANH TOÁN MẪU</span><h3>{selectedMethod.instructions.providerLabel}</h3><dl><div><dt>Người nhận</dt><dd>{selectedMethod.instructions.recipientName}</dd></div><div><dt>Tài khoản</dt><dd>{selectedMethod.instructions.accountNumber}</dd></div><div><dt>Nội dung</dt><dd>{selectedMethod.instructions.note} · {purchaseId}</dd></div><div><dt>Số tiền</dt><dd>{money.format(total)}</dd></div></dl></div></section>}
      </>}

      <div className={styles.actions}><button className={styles.primary} disabled={processing||(mode==='points'&&!hasEnoughPoints)} onClick={()=>finish('success')}>{processing?'Đang xử lý...':mode==='points'?`Thanh toán ${number.format(pointsRequired)} Points`:'Test thanh toán thành công'}</button><button className={styles.danger} disabled={processing} onClick={()=>finish('failed')}>Test thất bại</button></div>
    </div><aside className={`${styles.card} ${styles.summary} ${styles.receipt}`}><p className={styles.eyebrow}>Hóa đơn tạm tính</p><h2>{config.name}</h2><div className={styles.row}><span>Tạm tính</span><strong>{money.format(subtotal)}</strong></div>{discount>0&&<div className={styles.row}><span>Giảm giá {appliedPromo}</span><strong>-{money.format(discount)}</strong></div>}<div className={styles.row}><span>Provider</span><strong>{provider}</strong></div><div className={styles.row}><span>Billing</span><strong>{billingId}</strong></div><div className={styles.row}><span>Thanh toán</span><strong>{mode==='points'?`${number.format(pointsRequired)} Points`:'Quét QR'}</strong></div><div className={styles.total}><span>Tổng thanh toán</span><strong>{money.format(total)}</strong></div><div className={styles.receiptTeeth}/></aside></section>
  </div></main>;
}
export default CheckoutPage;
