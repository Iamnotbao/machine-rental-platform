import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProtectedRoute } from '@/app/router/ProtectedRoute';
import { PublicRoute } from '@/app/router/PublicRoute';
import { ROUTES } from '@/constants/route.constants';
import { OrderDetailPage, OrdersPage, ProfilePage } from '@/pages/Account';
import { LoginPage, RegisterPage } from '@/pages/Auth';
import { BookingPage, CartPage, CheckoutPage } from '@/pages/Booking';
import { ErrorPage } from '@/pages/Error';
import { HomePage } from '@/pages/Home';
import { MachinesPage, MachineDetailPage } from '@/pages/Machines';
import { NotFoundPage } from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.machines, element: <MachinesPage /> },
      { path: '/machine/:providerId', element: <MachinesPage /> },
      { path: '/machines/:providerId', element: <MachinesPage /> },
      { path: '/machines/config/:id', element: <MachineDetailPage /> },
      { path: ROUTES.machineBooking, element: <BookingPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: ROUTES.cart, element: <CartPage /> },
          { path: ROUTES.checkout, element: <CheckoutPage /> },
          { path: ROUTES.orders, element: <OrdersPage /> },
          { path: ROUTES.orderDetail, element: <OrderDetailPage /> },
          { path: ROUTES.profile, element: <ProfilePage /> },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          { path: ROUTES.login, element: <LoginPage /> },
          { path: ROUTES.register, element: <RegisterPage /> },
        ],
      },
    ],
  },
  { path: ROUTES.notFound, element: <NotFoundPage /> },
]);