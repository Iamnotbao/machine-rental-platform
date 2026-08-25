import { useMemo, useState } from 'react';

import { MachineFilter } from '@/features/machines/components/MachineFilter/MachineFilter';
import { MachineCarousel } from '@/features/machines/components/MachineCarousel/MachineCarousel';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';

export default function MachinesPage() {
  const [ram, setRam] = useState('all');
  const [cpu, setCpu] = useState('all');
  const [priceSort, setPriceSort] = useState('default');

  const filtered = useMemo(() => {
    let result = [...machineConfigs];

    if (ram !== 'all') result = result.filter(x => x.specs.ram === ram);
    if (cpu !== 'all') result = result.filter(x => x.specs.cpu === cpu);

    if (priceSort === 'asc') result.sort((a,b)=>a.pricing.week-b.pricing.week);
    if (priceSort === 'desc') result.sort((a,b)=>b.pricing.week-a.pricing.week);

    return result;
  }, [ram,cpu,priceSort]);

  return (
    <section>
      <h1>Danh sách cấu hình máy chủ</h1>

      <MachineFilter
        ram={ram}
        setRam={setRam}
        cpu={cpu}
        setCpu={setCpu}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
      />

      <MachineCarousel machines={filtered}/>
    </section>
  );
}