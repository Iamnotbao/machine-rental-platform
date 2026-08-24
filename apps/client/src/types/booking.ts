import type { BOOKING_STATUSES } from '@/constants/status.constants';
export type BookingStatus = (typeof BOOKING_STATUSES)[number];
export interface Booking {
  id: string;
  machineId: string;
  status: BookingStatus;
  startDate: string;
  endDate: string;
}
