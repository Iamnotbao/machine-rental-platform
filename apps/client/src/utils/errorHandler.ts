import type { ApiError } from '@/types/api';
export const getErrorMessage = (error: unknown): string =>
  typeof error === 'object' && error !== null && 'message' in error
    ? String((error as ApiError).message)
    : 'Something went wrong.';
