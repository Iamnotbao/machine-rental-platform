import { useMemo, useState } from 'react';

export function BookingPage() {
  const [days, setDays] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const total = useMemo(() => days * quantity, [days, quantity]);

  return (
    <main style={{ minHeight: '100vh', padding: '48px', background: '#f8fafc' }}>
      <section style={{ maxWidth: 720, margin: '0 auto', padding: 32, borderRadius: 20, background: '#fff', boxShadow: '0 20px 60px rgba(15,23,42,.12)' }}>
        <p style={{ color: '#0284c7', fontWeight: 700, letterSpacing: '.12em' }}>BOOKING</p>
        <h1>Đặt thuê máy</h1>
        <label>Số ngày <input type="number" min="1" value={days} onChange={(event) => setDays(Number(event.target.value))} /></label>
        <label>Số lượng <input type="number" min="1" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} /></label>
        <p>Tổng đơn vị thuê: {total}</p>
        <a href="/checkout">Tiếp tục thanh toán →</a>
      </section>
    </main>
  );
}

export default BookingPage;
