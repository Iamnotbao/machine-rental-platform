import { Link } from 'react-router-dom';

export function OrderSuccessPage() {
  return <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#f5fafb' }}><section style={{ width: 'min(100%, 560px)', padding: 42, textAlign: 'center', borderRadius: 24, background: '#fff', boxShadow: '0 24px 60px rgba(20,55,72,.1)' }}><div style={{ display: 'grid', placeItems: 'center', width: 72, height: 72, margin: '0 auto 22px', borderRadius: '50%', background: '#e7f7ed', color: '#237446', fontSize: 38 }}>✓</div><h1>Thanh toán thành công</h1><p>Yêu cầu thuê máy đã được ghi nhận.</p><Link to="/machines">Quay lại danh sách máy</Link></section></main>;
}

export default OrderSuccessPage;
