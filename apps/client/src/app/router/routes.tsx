import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProtectedRoute } from '@/app/router/ProtectedRoute';
import { PublicRoute } from '@/app/router/PublicRoute';
import { ROUTES } from '@/constants/route.constants';
import { OrderDetailPage, OrdersPage, ProfilePage } from '@/pages/Account';
import { LoginPage, RegisterPage } from '@/pages/Auth';
import { BookingPage, CartPage } from '@/pages/Booking';
import BillingPage from '@/pages/Billing';
import CheckoutPage from '@/pages/Checkout';
import OrderSuccessPage from '@/pages/OrderSuccess';
import PaymentHistoryPage from '@/pages/PaymentHistory';
import { PaymentFailedPage, PaymentSuccessPage } from '@/pages/PaymentResult';
import PurchasePage from '@/pages/Purchase';
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
      { path: '/machines/:id', element: <MachineDetailPage /> },
      { path: '/machine/:id', element: <MachineDetailPage /> },
      { path: ROUTES.machineBooking, element: <BookingPage /> },
      { path: ROUTES.booking, element: <BookingPage /> },
      { path: ROUTES.purchase, element: <PurchasePage /> },
      { path: ROUTES.checkout, element: <CheckoutPage /> },
      { path: ROUTES.paymentSuccess, element: <PaymentSuccessPage /> },
      { path: ROUTES.paymentFailed, element: <PaymentFailedPage /> },
      { path: ROUTES.paymentHistory, element: <PaymentHistoryPage /> },
      { path: ROUTES.billing, element: <BillingPage /> },
      { path: ROUTES.orderSuccess, element: <OrderSuccessPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: ROUTES.cart, element: <CartPage /> },
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