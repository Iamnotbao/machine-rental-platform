import { env } from '@/configs/env';
export const appConfig = { name: env.appName, defaultTheme: 'light' } as const;
