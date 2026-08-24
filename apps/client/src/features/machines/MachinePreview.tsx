import { Badge, Card } from '@machine-rental/ui';
import type { Machine } from '@/types/machine';
import { formatCurrency } from '@machine-rental/utils';

export function MachinePreview({ machine }: { machine: Machine }) {
  return (
    <Card>
      <Badge>{machine.status}</Badge>
      <h2>{machine.name}</h2>
      <p>{formatCurrency(machine.dailyRate)} per day</p>
    </Card>
  );
}
