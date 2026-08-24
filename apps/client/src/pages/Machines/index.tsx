import { Link, useParams } from 'react-router-dom';
import { Badge, Button, Card } from '@machine-rental/ui';
import { ROUTES } from '@/constants/route.constants';
import { MACHINE_STATUSES } from '@/constants/status.constants';
import styles from './page.module.css';

const sampleMachines = [
  { id: 'mini-excavator', name: 'Mini Excavator', dailyRate: '$185/day' },
  { id: 'scissor-lift', name: 'Electric Scissor Lift', dailyRate: '$120/day' },
];
export function MachinesPage() {
  return (
    <section>
      <p className="eyebrow">Catalog foundation</p>
      <h1>Machines</h1>
      <div className={styles.grid}>
        {sampleMachines.map((machine) => (
          <Card key={machine.id}>
            <Badge>{MACHINE_STATUSES[0]}</Badge>
            <h2>{machine.name}</h2>
            <p>{machine.dailyRate}</p>
            <Link to={ROUTES.machineDetail.replace(':id', machine.id)}>
              <Button variant="secondary">View machine</Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
export function MachineDetailPage() {
  const { id } = useParams();
  return (
    <section>
      <p className="eyebrow">Machine detail</p>
      <h1>{id?.replaceAll('-', ' ')}</h1>
      <p>This route is ready for a future machine service and availability view.</p>
      <Link to={ROUTES.machineBooking.replace(':id', id ?? 'machine')}>
        <Button>Start booking</Button>
      </Link>
    </section>
  );
}
