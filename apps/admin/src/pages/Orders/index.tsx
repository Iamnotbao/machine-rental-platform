import { useParams } from 'react-router-dom';
import { ResourceDetailPage, ResourceListPage } from '@/pages/shared/ResourceListPage';
import { ADMIN_ROUTES, resolveRoute } from '@/constants/route.constants';
const rows = [
  {
    id: 'ORD-912',
    cells: ['ORD-912', 'Northstar Build Co.', 'Mini Excavator', '$1,480', 'Paid', 'Jun 09, 2025'],
    href: resolveRoute(ADMIN_ROUTES.orderDetail, 'ORD-912'),
  },
  {
    id: 'ORD-911',
    cells: ['ORD-911', 'Greenline Services', 'Compact Loader', '$980', 'Paid', 'Jun 08, 2025'],
    href: resolveRoute(ADMIN_ROUTES.orderDetail, 'ORD-911'),
  },
];
export function OrderListPage() {
  return (
    <ResourceListPage
      columns={['Order ID', 'Customer', 'Machine', 'Amount', 'Status', 'Created']}
      description="Track commercial activity around every rental."
      rows={rows}
      title="Orders"
    />
  );
}
export function OrderDetailPage() {
  const { id = 'order' } = useParams();
  return (
    <ResourceDetailPage
      fields={[
        ['Order ID', id],
        ['Customer', 'Northstar Build Co.'],
        ['Machine', 'Mini Excavator'],
        ['Rental period', 'Jun 10 – Jun 18'],
        ['Amount', '$1,480'],
        ['Status', 'Paid'],
        ['Created date', 'Jun 09, 2025'],
      ]}
      subtitle="Order record foundation"
      title="Order details"
    />
  );
}
