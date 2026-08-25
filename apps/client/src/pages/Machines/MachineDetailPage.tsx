import { useParams } from 'react-router-dom';

import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import { machineInstances } from '@/features/machines/data/machine-instance.mock';
import { MachineInstanceCard } from '@/features/machines/components/MachineInstanceCard/MachineInstanceCard';

export default function MachineDetailPage() {
  const { id } = useParams();

  const config = machineConfigs.find(item => item.id === id);

  if (!config) {
    return <div>Không tìm thấy cấu hình</div>;
  }

  const servers = machineInstances.filter(
    item => item.configId === config.id && item.status === 'available'
  );

  return (
    <section>
      <h1>{config.name}</h1>
      <p>{config.description}</p>

      <h2>Thông số</h2>
      <p>CPU: {config.specs.cpu}</p>
      <p>RAM: {config.specs.ram}</p>
      <p>GPU: {config.specs.gpu}</p>
      <p>SSD: {config.specs.storage}</p>

      <h2>Máy đang khả dụng ({servers.length})</h2>

      <div>
        {servers.map(server => (
          <MachineInstanceCard
            key={server.id}
            machine={server}
          />
        ))}
      </div>
    </section>
  );
}