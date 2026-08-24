export interface FeaturedMachine {
  id: string;
  name: string;
  category: string;
  description: string;
  dailyRate: string;
  accent: 'orange' | 'blue' | 'green';
}

// Presentation-only data. A future machine service will replace this module with API-backed data.
export const featuredMachines: FeaturedMachine[] = [
  {
    id: 'compact-excavator',
    name: 'Compact Excavator',
    category: 'Earthmoving',
    description: 'Powerful digging performance in a compact footprint.',
    dailyRate: 'From $185 / day',
    accent: 'orange',
  },
  {
    id: 'electric-scissor-lift',
    name: 'Electric Scissor Lift',
    category: 'Access equipment',
    description: 'Quiet, reliable vertical access for indoor projects.',
    dailyRate: 'From $120 / day',
    accent: 'blue',
  },
  {
    id: 'wheel-loader',
    name: 'Wheel Loader',
    category: 'Material handling',
    description: 'Move more material with confident all-day capability.',
    dailyRate: 'From $240 / day',
    accent: 'green',
  },
];
