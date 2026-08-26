import HomePage from '@/pages/Home';
import AuthPage from '@/pages/Auth';
import MachinesPage, { MachineDetailPage } from '@/pages/Machines';
import BookingPage from '@/pages/Booking';
import CheckoutPage from '@/pages/Checkout';
import OrderSuccessPage from '@/pages/OrderSuccess';
import AccountPage from '@/pages/Account';
import NotFoundPage from '@/pages/NotFound';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/machines', element: <MachinesPage /> },
  { path: '/machines/:id', element: <MachineDetailPage /> },
  { path: '/booking', element: <BookingPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/order-success', element: <OrderSuccessPage /> },
  { path: '/account', element: <AccountPage /> },
  { path: '*', element: <NotFoundPage /> },
];
