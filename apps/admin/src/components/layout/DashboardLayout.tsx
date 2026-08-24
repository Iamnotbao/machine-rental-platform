import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { ToastRegion } from '@/components/feedback/ToastRegion';
import { useSidebar } from '@/hooks/useSidebar';
import styles from './dashboard-layout.module.css';
export function DashboardLayout() {
  const sidebar = useSidebar();
  return (
    <div className={styles.layout}>
      <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.close} />
      <div className={styles.content}>
        <Topbar onMenuClick={sidebar.toggle} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <ToastRegion />
    </div>
  );
}
