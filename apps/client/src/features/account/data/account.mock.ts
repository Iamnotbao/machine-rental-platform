import type { AccountDashboard } from '@/features/account/types';

export const accountDashboard: AccountDashboard = {
  profile:{ id:'mock-admin-1', name:'Admin', username:'admin', email:'admin@machine-rental.test', phone:'0901 234 567', company:'Rentora Demo Customer', joinedAt:'2026-07-18T09:00:00+07:00' },
  wallet:{ balance:2450000, reserved:320000, currency:'VND', points:3280, pointValue:100 },
  transactions:[
    { id:'TX-20260826-01', type:'PAYMENT', description:'Thanh toán đơn PUR-config-2', amount:-280000, createdAt:'2026-08-26T10:20:00+07:00', status:'SUCCESS' },
    { id:'TX-20260824-02', type:'TOPUP', description:'Nạp tiền qua chuyển khoản', amount:2000000, createdAt:'2026-08-24T08:10:00+07:00', status:'SUCCESS' },
    { id:'TX-20260820-03', type:'REFUND', description:'Hoàn tiền đơn ORD-20260820-003', amount:350000, createdAt:'2026-08-20T16:42:00+07:00', status:'SUCCESS' },
    { id:'TX-20260818-04', type:'POINT_PURCHASE', description:'Mua gói 2.200 points', amount:-200000, createdAt:'2026-08-18T14:10:00+07:00', status:'SUCCESS' },
    { id:'TX-20260816-05', type:'PAYMENT', description:'Thanh toán đơn PUR-config-5', amount:-540000, createdAt:'2026-08-16T11:20:00+07:00', status:'SUCCESS' },
    { id:'TX-20260812-06', type:'POINT_REDEEM', description:'Dùng points giảm giá đơn thuê', amount:-50000, createdAt:'2026-08-12T09:45:00+07:00', status:'SUCCESS' },
    { id:'TX-20260808-07', type:'TOPUP', description:'Nạp ví bằng MoMo', amount:1000000, createdAt:'2026-08-08T17:15:00+07:00', status:'SUCCESS' },
  ],
  topups:[
    { id:'TOPUP-20260824-01', amount:2000000, method:'Chuyển khoản ngân hàng', createdAt:'2026-08-24T08:10:00+07:00', status:'SUCCESS' },
    { id:'TOPUP-20260810-02', amount:1000000, method:'MoMo', createdAt:'2026-08-10T12:35:00+07:00', status:'SUCCESS' },
    { id:'TOPUP-20260802-03', amount:500000, method:'Thẻ', createdAt:'2026-08-02T17:20:00+07:00', status:'FAILED' },
    { id:'TOPUP-20260728-04', amount:1500000, method:'Chuyển khoản ngân hàng', createdAt:'2026-07-28T10:10:00+07:00', status:'SUCCESS' },
    { id:'TOPUP-20260722-05', amount:700000, method:'MoMo', createdAt:'2026-07-22T15:30:00+07:00', status:'SUCCESS' },
    { id:'TOPUP-20260719-06', amount:300000, method:'Thẻ', createdAt:'2026-07-19T08:40:00+07:00', status:'SUCCESS' },
  ],
  notifications:[
    { id:'notice-1', title:'Thanh toán thành công', message:'Đơn thuê cấu hình 2 đã được ghi nhận và đang chờ provider xác nhận.', createdAt:'2026-08-26T10:22:00+07:00', read:false },
    { id:'notice-2', title:'Số dư ví đã cập nhật', message:'Bạn đã nạp thành công 2.000.000 ₫ vào ví.', createdAt:'2026-08-24T08:12:00+07:00', read:false },
    { id:'notice-3', title:'Tặng points', message:'Bạn nhận thêm 200 points từ chương trình trải nghiệm.', createdAt:'2026-08-22T09:00:00+07:00', read:true },
    { id:'notice-4', title:'Mã giảm giá mới', message:'Voucher RENTORA10 đã được thêm vào tài khoản.', createdAt:'2026-08-21T12:00:00+07:00', read:true },
    { id:'notice-5', title:'Bảo trì hệ thống', message:'Một số thao tác thanh toán mock có thể gián đoạn trong khung giờ bảo trì thử nghiệm.', createdAt:'2026-08-21T18:00:00+07:00', read:true },
    { id:'notice-6', title:'Máy Windows mới', message:'Đã bổ sung Windows 10 Pro và Windows 11 Pro vào danh sách cấu hình.', createdAt:'2026-08-20T08:00:00+07:00', read:true },
  ],
  pointPackages:[
    { id:'POINT-500', name:'Starter', points:500, bonusPoints:0, price:50000 },
    { id:'POINT-2200', name:'Popular', points:2000, bonusPoints:200, price:200000, badge:'Phổ biến' },
    { id:'POINT-6000', name:'Pro', points:5000, bonusPoints:1000, price:500000, badge:'+20% bonus' },
  ],
  pointHistory:[
    { id:'P-01', description:'Mua gói Popular', points:2200, createdAt:'2026-08-18T14:10:00+07:00', status:'SUCCESS' },
    { id:'P-02', description:'Thưởng trải nghiệm', points:200, createdAt:'2026-08-22T09:00:00+07:00', status:'SUCCESS' },
    { id:'P-03', description:'Dùng points giảm đơn thuê', points:-500, createdAt:'2026-08-12T09:45:00+07:00', status:'SUCCESS' },
    { id:'P-04', description:'Hoàn points đơn hủy', points:300, createdAt:'2026-08-09T11:20:00+07:00', status:'SUCCESS' },
    { id:'P-05', description:'Check-in tuần', points:50, createdAt:'2026-08-05T08:00:00+07:00', status:'SUCCESS' },
    { id:'P-06', description:'Đổi points voucher', points:-400, createdAt:'2026-08-01T13:00:00+07:00', status:'SUCCESS' },
  ],
  vouchers:[
    { id:'V-01', code:'RENTORA10', title:'Giảm 10%', description:'Giảm tối đa 200.000 ₫ cho đơn thuê.', discountType:'PERCENT', discountValue:10, minSpend:300000, expiresAt:'2026-09-30T23:59:59+07:00', status:'AVAILABLE' },
    { id:'V-02', code:'POINTS50', title:'Giảm 50.000 ₫', description:'Áp dụng cho đơn từ 250.000 ₫.', discountType:'FIXED', discountValue:50000, minSpend:250000, expiresAt:'2026-10-15T23:59:59+07:00', status:'AVAILABLE' },
    { id:'V-03', code:'NEWUSER', title:'Giảm 15%', description:'Ưu đãi khách hàng mới, tối đa 300.000 ₫.', discountType:'PERCENT', discountValue:15, minSpend:500000, expiresAt:'2026-09-15T23:59:59+07:00', status:'AVAILABLE' },
    { id:'V-04', code:'WELCOME30', title:'Giảm 30.000 ₫', description:'Voucher demo đã sử dụng.', discountType:'FIXED', discountValue:30000, minSpend:100000, expiresAt:'2026-09-01T23:59:59+07:00', status:'USED' },
    { id:'V-05', code:'JULY20', title:'Giảm 20%', description:'Voucher tháng 7 đã hết hạn.', discountType:'PERCENT', discountValue:20, minSpend:300000, expiresAt:'2026-07-31T23:59:59+07:00', status:'EXPIRED' },
    { id:'V-06', code:'SERVER100', title:'Giảm 100.000 ₫', description:'Áp dụng cho hóa đơn server từ 1 triệu.', discountType:'FIXED', discountValue:100000, minSpend:1000000, expiresAt:'2026-11-30T23:59:59+07:00', status:'AVAILABLE' },
  ],
};
