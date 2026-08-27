import type { PaymentMethodOption } from '../types';

export const paymentMethods: PaymentMethodOption[] = [
  {
    id: 'momo',
    label: 'Ví MoMo',
    description: 'Quét QR bằng ứng dụng MoMo để mô phỏng thanh toán.',
    imageUrl: '/images/payments/momo.svg',
    imageAlt: 'Minh họa phương thức thanh toán MoMo',
    instructions: { qrImageUrl:'/images/payments/qr-momo.svg', providerLabel:'MoMo', recipientName:'RENTORA DEMO', accountNumber:'0901 234 567', note:'RENTORA MOMO DEMO' },
  },
  {
    id: 'bank',
    label: 'Chuyển khoản ngân hàng',
    description: 'Quét QR hoặc nhập thông tin tài khoản ngân hàng mẫu.',
    imageUrl: '/images/payments/bank.svg',
    imageAlt: 'Minh họa phương thức chuyển khoản ngân hàng',
    instructions: { qrImageUrl:'/images/payments/qr-bank.svg', providerLabel:'Vietcombank · CN TP.HCM', recipientName:'CONG TY RENTORA DEMO', accountNumber:'0123 456 789', note:'THANH TOAN RENTORA' },
  },
  {
    id: 'card',
    label: 'Thẻ thanh toán',
    description: 'Mô phỏng cổng thẻ và mã QR checkout cho môi trường test.',
    imageUrl: '/images/payments/card.svg',
    imageAlt: 'Minh họa phương thức thanh toán bằng thẻ',
    instructions: { qrImageUrl:'/images/payments/qr-card.svg', providerLabel:'Rentora Card Gateway', recipientName:'RENTORA CHECKOUT', accountNumber:'TEST **** 2026', note:'CARD PAYMENT DEMO' },
  },
];
