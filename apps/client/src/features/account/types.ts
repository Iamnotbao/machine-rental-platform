export interface CustomerProfile { id:string; name:string; username:string; email:string; phone:string; company:string; joinedAt:string; }
export interface WalletSummary { balance:number; reserved:number; currency:'VND'; points:number; pointValue:number; }
export type WalletTransactionType = 'PAYMENT' | 'REFUND' | 'TOPUP' | 'POINT_PURCHASE' | 'POINT_REDEEM';
export interface WalletTransaction { id:string; type:WalletTransactionType; description:string; amount:number; createdAt:string; status:'SUCCESS' | 'PENDING' | 'FAILED'; }
export interface TopupRecord { id:string; amount:number; method:string; createdAt:string; status:'SUCCESS' | 'PENDING' | 'FAILED'; }
export interface CustomerNotification { id:string; title:string; message:string; createdAt:string; read:boolean; }
export interface PointPackage { id:string; name:string; points:number; bonusPoints:number; price:number; badge?:string; }
export interface PointHistoryItem { id:string; description:string; points:number; createdAt:string; status:'SUCCESS' | 'PENDING'; }
export interface Voucher { id:string; code:string; title:string; description:string; discountType:'PERCENT'|'FIXED'; discountValue:number; minSpend:number; expiresAt:string; status:'AVAILABLE'|'USED'|'EXPIRED'; }
export interface AccountDashboard { profile:CustomerProfile; wallet:WalletSummary; transactions:WalletTransaction[]; topups:TopupRecord[]; notifications:CustomerNotification[]; pointPackages:PointPackage[]; pointHistory:PointHistoryItem[]; vouchers:Voucher[]; }
