import { apiConfig } from '@/configs/api.config';
import { normalizeApiError } from '@/services/api/apiInterceptor';
import type { ApiResponse } from '@/types/api.types';

export async function apiClient<T>(path: string, init: RequestInit = {}): Promise<ApiResponse<T>> {
  if (!apiConfig.baseUrl) throw new Error('API base URL is not configured.');
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), apiConfig.timeoutMs);
  try {
    const response = await fetch(`${apiConfig.baseUrl}${path}`, {
      ...init,
      signal: controller.signal,
      headers: { Accept: 'application/json', ...init.headers },
    });
    if (!response.ok) throw new Error(`Request failed with status ${response.status}.`);
    return (await response.json()) as ApiResponse<T>;
  } catch (error) {
    throw normalizeApiError(error);
  } finally {
    window.clearTimeout(timeout);
  }
}
