import type { AccountDashboard } from '@/features/account/types';

export const accountDashboard: AccountDashboard = {
  profile:{ id:'mock-admin-1', name:'Admin', username:'admin', email:'admin@machine-rental.test', phone:'0901 234 567', company:'Rentora Demo Customer', joinedAt:'2026-07-18T09:00:00+07:00' },
  wallet:{ balance:2450000, reserved:320000, currency:'VND' },
  transactions:[
    { id:'TX-20260826-01', type:'PAYMENT', description:'Thanh toán đơn PUR-config-2', amount:-280000, createdAt:'2026-08-26T10:20:00+07:00', status:'SUCCESS' },
    { id:'TX-20260824-02', type:'TOPUP', description:'Nạp tiền qua chuyển khoản', amount:2000000, createdAt:'2026-08-24T08:10:00+07:00', status:'SUCCESS' },
    { id:'TX-20260820-03', type:'REFUND', description:'Hoàn tiền đơn ORD-20260820-003', amount:350000, createdAt:'2026-08-20T16:42:00+07:00', status:'SUCCESS' },
  ],
  topups:[
    { id:'TOPUP-20260824-01', amount:2000000, method:'Chuyển khoản ngân hàng', createdAt:'2026-08-24T08:10:00+07:00', status:'SUCCESS' },
    { id:'TOPUP-20260810-02', amount:1000000, method:'MoMo', createdAt:'2026-08-10T12:35:00+07:00', status:'SUCCESS' },
    { id:'TOPUP-20260802-03', amount:500000, method:'Thẻ', createdAt:'2026-08-02T17:20:00+07:00', status:'FAILED' },
  ],
  notifications:[
    { id:'notice-1', title:'Thanh toán thành công', message:'Đơn thuê cấu hình 2 đã được ghi nhận và đang chờ provider xác nhận.', createdAt:'2026-08-26T10:22:00+07:00', read:false },
    { id:'notice-2', title:'Số dư ví đã cập nhật', message:'Bạn đã nạp thành công 2.000.000 ₫ vào ví.', createdAt:'2026-08-24T08:12:00+07:00', read:false },
    { id:'notice-3', title:'Bảo trì hệ thống', message:'Một số thao tác thanh toán mock có thể gián đoạn trong khung giờ bảo trì thử nghiệm.', createdAt:'2026-08-21T18:00:00+07:00', read:true },
  ],
};
