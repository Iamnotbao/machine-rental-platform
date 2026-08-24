export const PERMISSIONS = {
  dashboardView: 'dashboard:view',
  machinesView: 'machines:view',
  machinesManage: 'machines:manage',
  bookingsView: 'bookings:view',
  bookingsManage: 'bookings:manage',
  ordersView: 'orders:view',
  customersView: 'customers:view',
  paymentsView: 'payments:view',
  reportsView: 'reports:view',
  settingsManage: 'settings:manage',
} as const;
export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
