const readEnv = (key: keyof ImportMetaEnv): string => import.meta.env[key] ?? '';

export const env = {
  apiBaseUrl: readEnv('VITE_API_BASE_URL'),
  appName: readEnv('VITE_APP_NAME') || 'Machine Rental Platform',
} as const;
