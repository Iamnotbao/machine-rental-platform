import { apiClient } from '@/services/api/apiClient';
import type { Booking } from '@/types/booking';
export const bookingService = { detail: (id: string) => apiClient<Booking>(`/bookings/${id}`) };
