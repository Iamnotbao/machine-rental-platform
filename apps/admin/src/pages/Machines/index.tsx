import { Link, useParams } from 'react-router-dom';
import { Button } from '@machine-rental/ui';
import { ResourceDetailPage, ResourceListPage } from '@/pages/shared/ResourceListPage';
import { ADMIN_ROUTES, resolveRoute } from '@/constants/route.constants';
import { MACHINE_STATUSES } from '@/constants/status.constants';
import { formatCurrency } from '@/utils/formatCurrency';
const rows = [
  {
    id: 'M-1024',
    cells: ['M-1024', 'Mini Excavator', 'Earthmoving', MACHINE_STATUSES[0], formatCurrency(185)],
    statusIndex: 3,
    href: resolveRoute(ADMIN_ROUTES.machineDetail, 'M-1024'),
  },
  {
    id: 'M-1023',
    cells: ['M-1023', 'Electric Scissor Lift', 'Access', MACHINE_STATUSES[2], formatCurrency(120)],
    statusIndex: 3,
    href: resolveRoute(ADMIN_ROUTES.machineDetail, 'M-1023'),
  },
  {
    id: 'M-1022',
    cells: ['M-1022', 'Compact Loader', 'Earthmoving', MACHINE_STATUSES[1], formatCurrency(210)],
    statusIndex: 3,
    href: resolveRoute(ADMIN_ROUTES.machineDetail, 'M-1022'),
  },
];
export function MachineListPage() {
  return (
    <ResourceListPage
      columns={['ID', 'Machine', 'Category', 'Status', 'Daily rate']}
      createLabel="Add machine"
      description="Keep the rental fleet accurate and ready."
      onCreate={() => {
        window.location.href = ADMIN_ROUTES.machineCreate;
      }}
      rows={rows}
      title="Machines"
    />
  );
}
export function MachineCreatePage() {
  return (
    <ResourceDetailPage
      action={<Button>Create machine</Button>}
      fields={[
        ['Name', 'New machine form foundation'],
        ['Category', 'Select a machine category'],
        ['Daily rate', 'Set a rental price'],
        ['Status', MACHINE_STATUSES[0]],
      ]}
      subtitle="A structured form will connect to the machine service in a future phase."
      title="Add machine"
    />
  );
}
export function MachineDetailPage() {
  const { id = 'machine' } = useParams();
  return (
    <ResourceDetailPage
      action={
        <Link to={resolveRoute(ADMIN_ROUTES.machineEdit, id)}>
          <Button variant="secondary">Edit machine</Button>
        </Link>
      }
      fields={[
        ['Machine ID', id],
        ['Status', MACHINE_STATUSES[0]],
        ['Category', 'Earthmoving'],
        ['Daily rate', formatCurrency(185)],
        ['Availability', 'Ready for future availability service'],
      ]}
      subtitle="Machine record foundation"
      title="Mini Excavator"
    />
  );
}
export function MachineEditPage() {
  const { id = 'machine' } = useParams();
  return (
    <ResourceDetailPage
      action={<Button>Save changes</Button>}
      fields={[
        ['Machine ID', id],
        ['Name', 'Editable machine name'],
        ['Category', 'Editable category'],
        ['Status', MACHINE_STATUSES[0]],
      ]}
      subtitle="Editing is prepared for a future mutation service."
      title="Edit machine"
    />
  );
}
