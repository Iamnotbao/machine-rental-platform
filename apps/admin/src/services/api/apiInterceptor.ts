import type { ApiError } from '@/types/api.types';
export const normalizeApiError = (error: unknown): ApiError =>
  error instanceof Error
    ? { message: error.message }
    : { message: 'An unexpected error occurred.' };
