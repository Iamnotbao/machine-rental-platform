export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  status: 'PENDING' | 'PAID' | 'FAILED';
}
