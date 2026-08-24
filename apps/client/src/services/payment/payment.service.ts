import { apiClient } from '@/services/api/apiClient';
import type { Payment } from '@/types/payment';
export const paymentService = { detail: (id: string) => apiClient<Payment>(`/payments/${id}`) };
