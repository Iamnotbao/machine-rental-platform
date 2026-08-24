import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import FloatingActions 
from "@/components/common/FloatingActions/FloatingActions";

export function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
       <FloatingActions />
    </div>
  );
}
