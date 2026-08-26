import type { BillingProfile, PaymentHistoryItem } from '../types';

export const billingProfiles: BillingProfile[] = [
  {
    id: 'billing-1',
    label: 'Công ty mặc định',
    companyName: 'Bao Technology Co., Ltd.',
    taxCode: '0312345678',
    contactName: 'Nguyễn Văn Bao',
    email: 'billing@baotech.test',
    phone: '0901 234 567',
    address: 'Quận 1, TP. Hồ Chí Minh',
    isDefault: true,
  },
  {
    id: 'billing-2',
    label: 'Cá nhân',
    companyName: '',
    taxCode: '',
    contactName: 'Nguyễn Văn Bao',
    email: 'bao@example.test',
    phone: '0909 888 777',
    address: 'Thủ Đức, TP. Hồ Chí Minh',
    isDefault: false,
  },
];

export const paymentHistory: PaymentHistoryItem[] = [
  {
    id: 'PAY-20260824-001',
    orderId: 'ORD-20260824-001',
    machineName: 'Máy chủ vật lý - Cấu hình 2',
    providerName: 'Nhà cung cấp A',
    amount: 280000,
    method: 'momo',
    status: 'PAID',
    paidAt: '2026-08-24T09:25:00+07:00',
  },
  {
    id: 'PAY-20260820-002',
    orderId: 'ORD-20260820-003',
    machineName: 'Máy chủ vật lý - Cấu hình 5',
    providerName: 'Nhà cung cấp B',
    amount: 480000,
    method: 'bank',
    status: 'PENDING',
    paidAt: '2026-08-20T14:10:00+07:00',
  },
  {
    id: 'PAY-20260818-004',
    orderId: 'ORD-20260818-002',
    machineName: 'Máy chủ vật lý - Cấu hình 1',
    providerName: 'Nhà cung cấp A',
    amount: 110000,
    method: 'card',
    status: 'FAILED',
    paidAt: '2026-08-18T19:42:00+07:00',
  },
];
