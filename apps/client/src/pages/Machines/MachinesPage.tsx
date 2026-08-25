import { useState } from 'react';

import { MachineFilter } from '@/features/machines/components/MachineFilter/MachineFilter';

import { MachineCarousel } from '@/features/machines/components/MachineCarousel/MachineCarousel';

import { machines } from '@/features/machines/data/machine.mock';

export function MachinesPage() {
  const [category, setCategory] = useState('all');

  const [ram, setRam] = useState('all');

  const [cpu, setCpu] = useState('all');

  const [price, setPrice] = useState('all');

  const filteredMachines = machines.filter((machine) => {
    if (category !== 'all' && machine.category !== category) {
      return false;
    }

    if (ram !== 'all' && machine.specs.ram !== ram) {
      return false;
    }

    if (cpu !== 'all' && machine.specs.cpu !== cpu) {
      return false;
    }

    if (price === 'low' && machine.pricing.week >= 500000) {
      return false;
    }

    if (price === 'high' && machine.pricing.week < 500000) {
      return false;
    }

    return true;
  });

  return (
    <section>
      <h1>Danh sách máy chủ</h1>

      <MachineFilter
        category={category}

        setCategory={setCategory}

        ram={ram}

        setRam={setRam}

        cpu={cpu}

        setCpu={setCpu}

        price={price}

        setPrice={setPrice}
      />

      <MachineCarousel machines={filteredMachines} />
    </section>
  );
}
