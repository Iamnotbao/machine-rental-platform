import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
