import { Link, useSearchParams } from 'react-router-dom';

export function OrderSuccessPage() {
  const [params] = useSearchParams();
  const orderId = params.get('orderId') || `MR-${Date.now().toString().slice(-6)}`;
  return <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#f5fafb', color: '#172033' }}><section style={{ width: 'min(100%, 560px)', padding: 42, textAlign: 'center', border: '1px solid #dfebef', borderRadius: 24, background: '#fff', boxShadow: '0 24px 60px rgba(20,55,72,.1)' }}><div style={{ display: 'grid', placeItems: 'center', width: 72, height: 72, margin: '0 auto 22px', borderRadius: '50%', background: '#e7f7ed', color: '#237446', fontSize: 38 }}>✓</div><p style={{ margin: 0, color: '#087e82', fontWeight: 900, letterSpacing: '.16em', fontSize: 11 }}>MACHINE RENTAL</p><h1 style={{ margin: '14px 0 10px' }}>Thanh toán thành công</h1><p style={{ margin: 0, color: '#718096', lineHeight: 1.7 }}>Yêu cầu thuê máy đã được ghi nhận. Mã đơn của bạn là <strong>{orderId}</strong>.</p><Link to="/machines" style={{ display: 'inline-block', marginTop: 24, padding: '13px 20px', borderRadius: 10, background: '#087e82', color: '#fff', textDecoration: 'none', fontWeight: 800 }}>Quay lại danh sách máy</Link></section></main>;
}

export default OrderSuccessPage;
