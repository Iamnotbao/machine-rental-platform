export type PaymentMethod = 'momo' | 'bank' | 'card';
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED';

export interface PurchaseDraft {
  configId: string;
  providerId: string;
  providerName: string;
  quantity: number;
  days: number;
  unitPrice: number;
  total: number;
}

export interface BillingProfile {
  id: string;
  label: string;
  companyName: string;
  taxCode: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  isDefault: boolean;
}

export interface PaymentHistoryItem {
  id: string;
  orderId: string;
  machineName: string;
  providerName: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  paidAt: string;
}
