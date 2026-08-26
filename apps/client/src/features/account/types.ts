export interface CustomerProfile { id:string; name:string; username:string; email:string; phone:string; company:string; joinedAt:string; }
export interface WalletSummary { balance:number; reserved:number; currency:'VND'; }
export type WalletTransactionType = 'PAYMENT' | 'REFUND' | 'TOPUP';
export interface WalletTransaction { id:string; type:WalletTransactionType; description:string; amount:number; createdAt:string; status:'SUCCESS' | 'PENDING' | 'FAILED'; }
export interface TopupRecord { id:string; amount:number; method:string; createdAt:string; status:'SUCCESS' | 'PENDING' | 'FAILED'; }
export interface CustomerNotification { id:string; title:string; message:string; createdAt:string; read:boolean; }
export interface AccountDashboard { profile:CustomerProfile; wallet:WalletSummary; transactions:WalletTransaction[]; topups:TopupRecord[]; notifications:CustomerNotification[]; }
