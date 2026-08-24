import { useParams } from 'react-router-dom';
import { ResourceDetailPage, ResourceListPage } from '@/pages/shared/ResourceListPage';
import { ADMIN_ROUTES, resolveRoute } from '@/constants/route.constants';
const rows = [
  {
    id: 'CUS-301',
    cells: [
      'CUS-301',
      'Northstar Build Co.',
      'operations@northstar.example',
      'Active',
      '12',
      '$18,420',
      'Jun 09, 2025',
    ],
    href: resolveRoute(ADMIN_ROUTES.customerDetail, 'CUS-301'),
  },
  {
    id: 'CUS-300',
    cells: [
      'CUS-300',
      'Elm Workshop',
      'hello@elm.example',
      'Active',
      '4',
      '$3,200',
      'Jun 08, 2025',
    ],
    href: resolveRoute(ADMIN_ROUTES.customerDetail, 'CUS-300'),
  },
];
export function CustomerListPage() {
  return (
    <ResourceListPage
      columns={['ID', 'Customer', 'Email', 'Status', 'Rentals', 'Total spending', 'Last activity']}
      description="Understand customer relationships and activity."
      rows={rows}
      title="Customers"
    />
  );
}
export function CustomerDetailPage() {
  const { id = 'customer' } = useParams();
  return (
    <ResourceDetailPage
      fields={[
        ['Customer ID', id],
        ['Name', 'Northstar Build Co.'],
        ['Email', 'operations@northstar.example'],
        ['Status', 'Active'],
        ['Rental count', '12'],
        ['Total spending', '$18,420'],
        ['Last activity', 'Jun 09, 2025'],
      ]}
      subtitle="Customer profile foundation"
      title="Customer details"
    />
  );
}
