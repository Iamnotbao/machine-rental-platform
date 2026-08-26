import '@/configs/i18n';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import '@/styles/reset.css';
import '@/styles/variables.css';
import '@/styles/typography.css';
import '@/styles/globals.css';
import '@/styles/utilities.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
