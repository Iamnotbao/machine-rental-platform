import type { AdminAnnouncement } from '@/features/announcements/types';

export const adminAnnouncements: AdminAnnouncement[] = [
  {
    id: 'announcement-1',
    label: 'THÔNG BÁO',
    message: 'Hệ thống đang chạy dữ liệu demo. Các giao dịch thanh toán hiện tại không phát sinh tiền thật.',
    active: true,
    priority: 1,
  },
  {
    id: 'announcement-2',
    label: 'CẬP NHẬT',
    message: 'Một số cấu hình máy chủ mới đã được bổ sung vào danh sách provider để khách hàng trải nghiệm luồng đặt thuê.',
    active: true,
    priority: 2,
  },
];
