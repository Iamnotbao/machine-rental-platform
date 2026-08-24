export const ROUTES = {
  home: '/',
  machines: '/machines',
  machineDetail: '/machines/:id',
  machineBooking: '/machines/:id/booking',
  cart: '/cart',
  checkout: '/checkout',
  orders: '/orders',
  orderDetail: '/orders/:id',
  profile: '/profile',
  login: '/login',
  register: '/register',
  notFound: '*',
} as const;
