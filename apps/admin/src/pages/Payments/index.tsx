import { ResourceListPage } from '@/pages/shared/ResourceListPage';
import { PAYMENT_STATUSES } from '@/constants/status.constants';
const rows = [
  {
    id: 'PAY-642',
    cells: [
      'PAY-642',
      'ORD-912',
      'Northstar Build Co.',
      '$1,480',
      'Card',
      PAYMENT_STATUSES[1],
      'Jun 09, 2025',
    ],
    statusIndex: 5,
  },
  {
    id: 'PAY-641',
    cells: [
      'PAY-641',
      'ORD-911',
      'Greenline Services',
      '$980',
      'Bank transfer',
      PAYMENT_STATUSES[1],
      'Jun 08, 2025',
    ],
    statusIndex: 5,
  },
];
export function PaymentListPage() {
  return (
    <ResourceListPage
      columns={['Payment ID', 'Order ID', 'Customer', 'Amount', 'Method', 'Status', 'Date']}
      description="Review payment status before a rental is activated."
      rows={rows}
      title="Payments"
    />
  );
}
