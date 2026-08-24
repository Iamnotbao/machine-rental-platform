import type { MACHINE_STATUSES } from '@/constants/status.constants';
export type MachineStatus = (typeof MACHINE_STATUSES)[number];
export interface Machine {
  id: string;
  name: string;
  status: MachineStatus;
  dailyRate: number;
}
