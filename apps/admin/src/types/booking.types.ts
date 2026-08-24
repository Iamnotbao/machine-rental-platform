import type { BOOKING_STATUSES } from '@/constants/status.constants';
export type BookingStatus = (typeof BOOKING_STATUSES)[number];
export interface AdminBooking {
  id: string;
  customer: string;
  machine: string;
  period: string;
  status: BookingStatus;
  paymentStatus: string;
}
