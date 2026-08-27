export type PaymentMethod = 'momo' | 'bank' | 'card' | 'points';
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED';

export interface PaymentInstructions {
  qrImageUrl: string;
  providerLabel: string;
  recipientName: string;
  accountNumber: string;
  note: string;
}

export interface PaymentMethodOption {
  id: Exclude<PaymentMethod, 'points'>;
  label: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  instructions: PaymentInstructions;
}

export interface PurchaseDraft { configId:string; providerId:string; providerName:string; quantity:number; days:number; unitPrice:number; total:number; }
export interface BillingProfile { id:string; label:string; companyName:string; taxCode:string; contactName:string; email:string; phone:string; address:string; isDefault:boolean; }
export interface PaymentHistoryItem { id:string; orderId:string; machineName:string; providerName:string; amount:number; method:PaymentMethod; status:PaymentStatus; paidAt:string; }
