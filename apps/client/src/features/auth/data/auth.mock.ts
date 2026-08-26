import type { AuthSession } from '@/types/auth';

interface MockAuthAccount {
  username: string;
  password: string;
  session: AuthSession;
}

export const mockLoginHint = {
  username: 'admin',
  password: 'admin',
} as const;

export const mockAuthAccounts: MockAuthAccount[] = [
  {
    username: mockLoginHint.username,
    password: mockLoginHint.password,
    session: {
      user: {
        id: 'mock-admin-1',
        email: 'admin@machine-rental.test',
        name: 'Admin',
      },
      accessToken: 'mock-admin-access-token',
    },
  },
];
