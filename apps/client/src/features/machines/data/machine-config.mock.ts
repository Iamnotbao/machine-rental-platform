import type { MachineConfig } from '../types';

export const machineConfigs: MachineConfig[] = [
  {
    id: 'config-1',

    name: 'Máy chủ vật lý - Cấu hình 1',

    category: 'Máy chủ vật lý',

    description: 'Máy chủ ổn định cho website, ứng dụng và hệ thống doanh nghiệp nhỏ.',

    images: ['/images/machines/server-1.jpg'],

    specs: {
      cpu: '12 Core 24 Thread',

      ram: '64GB',

      gpu: '2GB',

      storage: '256GB SSD',
    },

    pricing: {
      test24h: 80000,

      week: 325000,

      month: 1100000,
    },

    availableCount: 3,
  },

  {
    id: 'config-2',

    name: 'Máy chủ vật lý - Cấu hình 2',

    category: 'Máy chủ vật lý',

    description: 'Cấu hình nâng cấp với GPU mạnh hơn.',

    images: ['/images/machines/server-2.jpg'],

    specs: {
      cpu: '12 Core 24 Thread',

      ram: '64GB',

      gpu: '4GB',

      storage: '256GB SSD',
    },

    pricing: {
      test24h: 80000,

      week: 350000,

      month: 1200000,
    },

    availableCount: 4,
  },

  {
    id: 'config-3',

    name: 'Máy chủ vật lý - Cấu hình 3',

    category: 'Máy chủ vật lý',

    description: 'Server hiệu năng cao cho doanh nghiệp.',

    images: ['/images/machines/server-3.jpg'],

    specs: {
      cpu: '28 Core 56 Thread',

      ram: '128GB',

      gpu: '2GB',

      storage: '512GB SSD',
    },

    pricing: {
      test24h: 100000,

      week: 525000,

      month: 2000000,
    },

    availableCount: 2,
  },
];
