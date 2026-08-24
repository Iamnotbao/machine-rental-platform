import { Link } from 'react-router-dom';
import { Button } from '@machine-rental/ui';
import { PageHeading } from '@/components/common/PageHeading';
import { SectionCard } from '@/components/common/SectionCard';
import { DataTable } from '@/components/table/DataTable';
import { KpiCard } from '@/features/dashboard/KpiCard';
import { dashboardDemo } from '@/features/dashboard/dashboard.demo';
import { DEMO_DATA_NOTICE } from '@/constants/app.constants';
import { ADMIN_ROUTES, resolveRoute } from '@/constants/route.constants';
import { formatCurrency } from '@/utils/formatCurrency';
import styles from './dashboard.module.css';

export function DashboardPage() {
  const { kpis, machineStatuses, bookings, orders } = dashboardDemo;
  const totalMachines = machineStatuses.reduce((sum, item) => sum + item.value, 0);
  return (
    <div>
      <PageHeading
        eyebrow="Operations overview"
        title="Good morning, Morgan"
        description="A clear view of the rental operation, ready for your next decision."
        action={
          <Link to={ADMIN_ROUTES.machineCreate}>
            <Button>Add machine</Button>
          </Link>
        }
      />
      <div className={styles.notice}>
        ◌ <span>{DEMO_DATA_NOTICE}. These figures are placeholders for the future API.</span>
      </div>
      <div className={styles.kpis}>
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>
      <div className={styles.twoColumn}>
        <SectionCard description="Illustrative monthly trend" title="Revenue overview">
          <div className={styles.chart}>
            <div className={styles.chartValue}>{formatCurrency(58400)}</div>
            <div className={styles.bars}>
              {[42, 58, 48, 74, 62, 86, 70, 94, 78, 88, 72, 100].map((height, index) => (
                <div className={styles.barGroup} key={index}>
                  <div className={styles.bar} style={{ height: `${height}%` }} />
                  <span>
                    {
                      [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ][index]
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>
        <SectionCard description="Across the current demo inventory" title="Machine status">
          <div className={styles.statusList}>
            {machineStatuses.map((item) => (
              <div className={styles.statusRow} key={item.label}>
                <div>
                  <span className={`${styles.dot} ${styles[item.label.toLowerCase()]}`} />
                  {item.label}
                </div>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className={styles.statusTotal}>{totalMachines} total machines</div>
        </SectionCard>
      </div>
      <div className={styles.twoColumn}>
        <SectionCard
          description="Latest requests"
          title="Recent bookings"
          action={<Link to={ADMIN_ROUTES.bookings}>View all</Link>}
        >
          <DataTable
            columns={['Booking', 'Customer', 'Machine', 'Status']}
            emptyLabel="No bookings yet"
            rows={bookings.map((booking) => ({
              id: booking.id,
              cells: [booking.id, booking.customer, booking.machine, booking.status],
              statusIndex: 3,
              href: resolveRoute(ADMIN_ROUTES.bookingDetail, booking.id),
            }))}
          />
        </SectionCard>
        <SectionCard
          description="Latest transactions"
          title="Recent orders"
          action={<Link to={ADMIN_ROUTES.orders}>View all</Link>}
        >
          <DataTable
            columns={['Order', 'Customer', 'Amount']}
            emptyLabel="No orders yet"
            rows={orders.map((order) => ({
              id: order.id,
              cells: [order.id, order.customer, order.amount],
              href: resolveRoute(ADMIN_ROUTES.orderDetail, order.id),
            }))}
          />
        </SectionCard>
      </div>
      <SectionCard title="Quick actions">
        <div className={styles.quickActions}>
          <Link to={ADMIN_ROUTES.machineCreate}>
            Add a machine <span>→</span>
          </Link>
          <Link to={ADMIN_ROUTES.bookings}>
            Review bookings <span>→</span>
          </Link>
          <Link to={ADMIN_ROUTES.reports}>
            Open reports <span>→</span>
          </Link>
        </div>
      </SectionCard>
    </div>
  );
}
