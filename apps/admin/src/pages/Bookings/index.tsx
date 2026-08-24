import { useParams } from 'react-router-dom';
import { ResourceDetailPage, ResourceListPage } from '@/pages/shared/ResourceListPage';
import { ADMIN_ROUTES, resolveRoute } from '@/constants/route.constants';
import { BOOKING_STATUSES } from '@/constants/status.constants';
const rows = [
  {
    id: 'BK-1048',
    cells: [
      'BK-1048',
      'Northstar Build Co.',
      'Mini Excavator',
      'Jun 10 – Jun 18',
      BOOKING_STATUSES[1],
      'Paid',
    ],
    statusIndex: 4,
    href: resolveRoute(ADMIN_ROUTES.bookingDetail, 'BK-1048'),
  },
  {
    id: 'BK-1047',
    cells: [
      'BK-1047',
      'Elm Workshop',
      'Scissor Lift',
      'Jun 12 – Jun 15',
      BOOKING_STATUSES[0],
      'Pending',
    ],
    statusIndex: 4,
    href: resolveRoute(ADMIN_ROUTES.bookingDetail, 'BK-1047'),
  },
];
export function BookingListPage() {
  return (
    <ResourceListPage
      columns={['Booking ID', 'Customer', 'Machine', 'Rental period', 'Status', 'Payment']}
      description="Review reservations and their rental periods."
      rows={rows}
      title="Bookings"
    />
  );
}
export function BookingDetailPage() {
  const { id = 'booking' } = useParams();
  return (
    <ResourceDetailPage
      fields={[
        ['Booking ID', id],
        ['Customer', 'Northstar Build Co.'],
        ['Machine', 'Mini Excavator'],
        ['Rental period', 'Jun 10 – Jun 18'],
        ['Status', BOOKING_STATUSES[1]],
        ['Payment status', 'Paid'],
      ]}
      subtitle="Booking record foundation"
      title="Booking details"
    />
  );
}
