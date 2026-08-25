import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MachineFilter } from '@/features/machines/components/MachineFilter/MachineFilter';
import { MachineCarousel } from '@/features/machines/components/MachineCarousel/MachineCarousel';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';

export default function MachinesPage() {
  const { providerId } = useParams<{ providerId?: string }>();
  const [ram, setRam] = useState('all');
  const [cpu, setCpu] = useState('all');
  const [priceSort, setPriceSort] = useState('default');

  const filtered = useMemo(() => {
    let result = providerId
      ? machineConfigs.filter((machine) => {
          const value = String(
            machine.providerId ?? machine.provider ?? machine.providerSlug ?? '',
          ).toLowerCase();
          return value === providerId.toLowerCase();
        })
      : [...machineConfigs];

    if (ram !== 'all') result = result.filter((x) => x.specs.ram === ram);
    if (cpu !== 'all') result = result.filter((x) => x.specs.cpu === cpu);

    if (priceSort === 'asc') result.sort((a, b) => a.pricing.week - b.pricing.week);
    if (priceSort === 'desc') result.sort((a, b) => b.pricing.week - a.pricing.week);

    return result;
  }, [providerId, ram, cpu, priceSort]);

  return (
    <>
      <h1>Danh sách cấu hình máy chủ</h1>
      <MachineFilter
        ram={ram}
        cpu={cpu}
        priceSort={priceSort}
        onRamChange={setRam}
        onCpuChange={setCpu}
        onPriceSortChange={setPriceSort}
      />
      <MachineCarousel machines={filtered} />
    </>
  );
}