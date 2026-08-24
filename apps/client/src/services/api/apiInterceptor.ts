import type { ApiError } from '@/types/api';

export const normalizeApiError = (error: unknown): ApiError => {
  if (error instanceof Error) return { message: error.message };
  return { message: 'An unexpected error occurred.' };
};
