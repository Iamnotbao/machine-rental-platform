import { env } from '@/configs/env';
export const apiConfig = { baseUrl: env.apiBaseUrl, timeoutMs: 10_000 } as const;
