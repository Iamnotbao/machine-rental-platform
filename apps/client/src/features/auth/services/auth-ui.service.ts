import { mockAuthAccounts } from '@/features/auth/data/auth.mock';
import type { AuthSession } from '@/types/auth';

const wait = (milliseconds: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

export const authUiService = {
  async login(username: string, password: string): Promise<AuthSession> {
    await wait(300);
    const account = mockAuthAccounts.find(
      (item) => item.username === username.trim() && item.password === password,
    );

    if (!account) {
      throw new Error('Sai tài khoản hoặc mật khẩu. Dùng tài khoản demo admin / admin.');
    }

    return account.session;
  },
};
