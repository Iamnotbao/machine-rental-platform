import { apiClient } from '@/services/api/apiClient';
import type { Machine } from '@/types/machine';
export const machineService = {
  list: () => apiClient<Machine[]>('/machines'),
  detail: (id: string) => apiClient<Machine>(`/machines/${id}`),
};
