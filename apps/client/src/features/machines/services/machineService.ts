import { machineConfigs } from '../data/machine-config.mock';
import type { MachineConfig } from '../types';

export const machineService = {
  async getMachines(): Promise<MachineConfig[]> {
    return machineConfigs;
  },

  async getMachineById(id: string): Promise<MachineConfig | undefined> {
    return machineConfigs.find((item) => item.id === id);
  },
};
