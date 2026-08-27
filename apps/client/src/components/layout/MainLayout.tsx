import { Outlet } from 'react-router-dom';
import { AnnouncementBanner } from '@/features/announcements/components/AnnouncementBanner';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import FloatingActions from '@/components/common/FloatingActions/FloatingActions';

export function MainLayout() {
  return (
    <div className="app-shell">
      <AnnouncementBanner />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
