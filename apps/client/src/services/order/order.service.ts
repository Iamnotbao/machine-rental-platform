import { apiClient } from '@/services/api/apiClient';
import type { Order } from '@/types/order';
export const orderService = { list: () => apiClient<Order[]>('/orders') };
