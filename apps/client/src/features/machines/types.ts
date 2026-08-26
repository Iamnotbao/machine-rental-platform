export interface MachineConfig {
  id: string;
  providerId: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  location: string;
  os: string;
  bandwidth: string;
  specs: { cpu: string; ram: string; gpu: string; storage: string };
  pricing: { test24h: number; week: number; month: number };
  availableCount: number;
}

export type MachineInstanceStatus = 'available' | 'rented';

export interface MachineInstance {
  id: string;
  configId: string;
  name: string;
  status: MachineInstanceStatus;
  location: string;
}
