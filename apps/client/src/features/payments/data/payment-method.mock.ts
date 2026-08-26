import type { PaymentMethodOption } from '../types';

export const paymentMethods: PaymentMethodOption[] = [
  {
    id: 'momo',
    label: 'Ví MoMo',
    description: 'Thanh toán bằng QR hoặc ứng dụng MoMo.',
    imageUrl: '/images/payments/momo.svg',
    imageAlt: 'Minh họa phương thức thanh toán MoMo',
  },
  {
    id: 'bank',
    label: 'Chuyển khoản ngân hàng',
    description: 'Nhận thông tin tài khoản và nội dung chuyển khoản cho đơn hàng.',
    imageUrl: '/images/payments/bank.svg',
    imageAlt: 'Minh họa phương thức chuyển khoản ngân hàng',
  },
  {
    id: 'card',
    label: 'Thẻ thanh toán',
    description: 'Giao diện mô phỏng cho Visa, Mastercard và thẻ nội địa.',
    imageUrl: '/images/payments/card.svg',
    imageAlt: 'Minh họa phương thức thanh toán bằng thẻ',
  },
];
