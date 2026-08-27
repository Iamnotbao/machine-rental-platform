import { accountDashboard } from '@/features/account/data/account.mock';
import type { AccountDashboard, CustomerProfile } from '@/features/account/types';

const wait = (milliseconds = 160) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

export const accountUiService = {
  async dashboard(): Promise<AccountDashboard> {
    await wait();
    return accountDashboard;
  },
  async updateProfile(profile: CustomerProfile): Promise<CustomerProfile> {
    await wait(260);
    if (!profile.name.trim() || !profile.email.includes('@')) {
      throw new Error('Tên và email không hợp lệ.');
    }
    accountDashboard.profile = { ...profile };
    return { ...profile };
  },
};
