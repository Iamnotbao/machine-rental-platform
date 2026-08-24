import type { MACHINE_STATUSES } from '@/constants/status.constants';
export type MachineStatus = (typeof MACHINE_STATUSES)[number];
export interface AdminMachine {
  id: string;
  name: string;
  category: string;
  status: MachineStatus;
  dailyRate: number;
}
