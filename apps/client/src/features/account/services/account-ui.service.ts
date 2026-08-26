import { accountDashboard } from '@/features/account/data/account.mock';
import type { AccountDashboard } from '@/features/account/types';

const wait = (milliseconds = 160) => new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

export const accountUiService = {
  async dashboard(): Promise<AccountDashboard> { await wait(); return accountDashboard; },
};
