import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';
import { AuthPage } from '@/pages/Auth';
import { MachinesPage } from '@/pages/Machines/MachinesPage';
import { MachineDetailPage } from '@/pages/Machines/MachineDetailPage';
import { CheckoutPage } from '@/pages/Checkout';
import { OrderSuccessPage } from '@/pages/OrderSuccess';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/login', element: <AuthPage /> },
  { path: '/machines', element: <MachinesPage /> },
  { path: '/machines/:id', element: <MachineDetailPage /> },
  { path: '/booking', element: <CheckoutPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/order-success', element: <OrderSuccessPage /> },
]);
