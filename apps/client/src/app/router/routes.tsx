import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/Home';
import AuthPage from '@/pages/Auth';
import { MachinesPage, MachineDetailPage } from '@/pages/Machines';
import BookingPage from '@/pages/Booking';
import CheckoutPage from '@/pages/Checkout';
import OrderSuccessPage from '@/pages/OrderSuccess';
import AccountPage from '@/pages/Account';
import { NotFoundPage } from '@/pages/NotFound';
import { ROUTES } from '@/constants/route.constants';

export const routes = [
  { path: ROUTES.home, element: <HomePage /> },
  { path: ROUTES.auth, element: <AuthPage /> },
  { path: ROUTES.machines, element: <MachinesPage /> },
  { path: ROUTES.providerMachines, element: <MachinesPage /> },
  { path: ROUTES.machineDetail, element: <MachineDetailPage /> },
  { path: ROUTES.booking, element: <BookingPage /> },
  { path: ROUTES.checkout, element: <CheckoutPage /> },
  { path: ROUTES.orderSuccess, element: <OrderSuccessPage /> },
  { path: ROUTES.account, element: <AccountPage /> },
  { path: ROUTES.notFound, element: <NotFoundPage /> },
];

export const router = createBrowserRouter(routes);
