import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';

const money = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

export function BookingPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const config = machineConfigs.find((item) => item.id === id) ?? machineConfigs[0];
  const [days, setDays] = useState(1);
  const [quantity, setQuantity] = useState(1);

  if (!config) {
    return <section>Không có cấu hình máy để đặt thuê.</section>;
  }

  const safeQuantity = Math.min(quantity, config.availableCount);
  const pricePerDay = Math.round(config.pricing.month / 30);
  const total = useMemo(
    () => pricePerDay * safeQuantity * days,
    [days, pricePerDay, safeQuantity],
  );

  return (
    <main style={{ minHeight: '100vh', padding: '48px 24px', background: '#f8fafc' }}>
      <section
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: 32,
          borderRadius: 20,
          background: '#fff',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.12)',
        }}
      >
        <p style={{ color: '#0284c7', fontWeight: 700, letterSpacing: '.12em' }}>BOOKING</p>
        <h1>Đặt thuê {config.name}</h1>
        <p>{config.description}</p>

        <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
          <label>
            Số ngày thuê
            <input
              type="number"
              min="1"
              max="365"
              value={days}
              onChange={(event) => setDays(Math.max(1, Number(event.target.value) || 1))}
            />
          </label>

          <label>
            Số lượng máy
            <input
              type="number"
              min="1"
              max={config.availableCount}
              value={safeQuantity}
              onChange={(event) =>
                setQuantity(
                  Math.max(1, Math.min(config.availableCount, Number(event.target.value) || 1)),
                )
              }
            />
          </label>
        </div>

        <p style={{ marginTop: 24 }}>
          Tạm tính: <strong>{money.format(total)}</strong>
        </p>

        <button
          type="button"
          onClick={() =>
            navigate(
              `/checkout?configId=${config.id}&quantity=${safeQuantity}&days=${days}&provider=${config.providerId}`,
            )
          }
        >
          Tiếp tục thanh toán
        </button>
      </section>
    </main>
  );
}

export function CartPage() {
  return (
    <section>
      <h1>Your cart</h1>
      <p>Your saved machines will appear here after cart functionality is implemented.</p>
    </section>
  );
}
