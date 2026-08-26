import { billingProfiles, paymentHistory } from '../data/payment.mock';
import type { BillingProfile, PaymentHistoryItem, PurchaseDraft } from '../types';

const delay = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

export const paymentUiService = {
  async getBillingProfiles(): Promise<BillingProfile[]> {
    await delay(180);
    return billingProfiles;
  },

  async getPaymentHistory(): Promise<PaymentHistoryItem[]> {
    await delay(220);
    return paymentHistory;
  },

  async submitPurchase(draft: PurchaseDraft): Promise<{ purchaseId: string }> {
    await delay(450);
    return { purchaseId: `PUR-${draft.configId}-${Date.now()}` };
  },
};
