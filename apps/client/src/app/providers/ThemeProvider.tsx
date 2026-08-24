import type { ReactNode } from 'react';
import '@/styles/themes/light.css';
import '@/styles/themes/dark.css';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <div data-theme="light">{children}</div>;
}
