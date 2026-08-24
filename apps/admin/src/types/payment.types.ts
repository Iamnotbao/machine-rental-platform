import type { PAYMENT_STATUSES } from '@/constants/status.constants';
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];
export interface AdminPayment {
  id: string;
  orderId: string;
  customer: string;
  amount: number;
  method: string;
  status: PaymentStatus;
  date: string;
}
