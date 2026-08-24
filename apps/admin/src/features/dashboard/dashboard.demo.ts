import { BOOKING_STATUSES, MACHINE_STATUSES, PAYMENT_STATUSES } from '@/constants/status.constants';
export const dashboardDemo = {
  kpis: [
    { label: 'Total machines', value: 248, trend: '+12.5%', note: 'vs. last month', icon: '▣' },
    { label: 'Active rentals', value: 86, trend: '+4.2%', note: 'currently on hire', icon: '◷' },
    { label: 'Pending bookings', value: 18, trend: '+8.1%', note: 'require review', icon: '◌' },
    { label: 'Monthly revenue', value: 58400, trend: '+16.8%', note: 'vs. last month', icon: '↗' },
  ],
  machineStatuses: [
    { label: MACHINE_STATUSES[0], value: 122 },
    { label: MACHINE_STATUSES[1], value: 24 },
    { label: MACHINE_STATUSES[2], value: 86 },
    { label: MACHINE_STATUSES[3], value: 16 },
  ],
  bookings: [
    {
      id: 'BK-1048',
      customer: 'Northstar Build Co.',
      machine: 'Mini Excavator',
      status: BOOKING_STATUSES[1],
      amount: '$1,480',
    },
    {
      id: 'BK-1047',
      customer: 'Elm Workshop',
      machine: 'Scissor Lift',
      status: BOOKING_STATUSES[0],
      amount: '$720',
    },
    {
      id: 'BK-1046',
      customer: 'Harbor Civil',
      machine: 'Compact Loader',
      status: BOOKING_STATUSES[2],
      amount: '$2,100',
    },
  ],
  orders: [
    {
      id: 'ORD-912',
      customer: 'Northstar Build Co.',
      status: PAYMENT_STATUSES[1],
      amount: '$1,480',
    },
    { id: 'ORD-911', customer: 'Greenline Services', status: PAYMENT_STATUSES[1], amount: '$980' },
    { id: 'ORD-910', customer: 'Elm Workshop', status: PAYMENT_STATUSES[0], amount: '$720' },
  ],
} as const;
