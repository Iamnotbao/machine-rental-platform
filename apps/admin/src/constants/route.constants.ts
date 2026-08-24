export const ADMIN_ROUTES = {
  login: '/login',
  dashboard: '/dashboard',
  machines: '/machines',
  machineCreate: '/machines/create',
  machineDetail: '/machines/:id',
  machineEdit: '/machines/:id/edit',
  bookings: '/bookings',
  bookingDetail: '/bookings/:id',
  orders: '/orders',
  orderDetail: '/orders/:id',
  customers: '/customers',
  customerDetail: '/customers/:id',
  payments: '/payments',
  reports: '/reports',
  settings: '/settings',
  notFound: '*',
} as const;

export const resolveRoute = (route: string, id: string): string => route.replace(':id', id);
