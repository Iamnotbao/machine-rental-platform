import { useParams } from 'react-router-dom';
import { machineConfigs } from '@/features/machines/data/machine-config.mock';
import { machineInstances } from '@/features/machines/data/machine-instance.mock';
import { MachineInstanceCard } from '@/features/machines/components/MachineInstanceCard/MachineInstanceCard';
import styles from './page.module.css';

export default function MachineDetailPage() {
  const { id } = useParams();
  const config = machineConfigs.find((x) => x.id === id);

  if (!config) return <p>Không tìm thấy cấu hình máy.</p>;

  const instances = machineInstances.filter(
    (instance) => instance.configId === id && instance.status === 'available',
  );

  return (
    <main className={styles.page}>
      <h1>{config.name}</h1>
      <p>{config.description}</p>
      <section>
        {instances.length ? (
          instances.map((instance) => (
            <MachineInstanceCard key={instance.id} instance={instance} />
          ))
        ) : (
          <p>Hiện chưa có máy available cho cấu hình này.</p>
        )}
      </section>
    </main>
  );
}