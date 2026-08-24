import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ProtectedRoute } from '@/app/router/ProtectedRoute';
import { ADMIN_ROUTES } from '@/constants/route.constants';
import { LoginPage } from '@/pages/Auth/LoginPage';
import { BookingDetailPage, BookingListPage } from '@/pages/Bookings';
import { AdminErrorPage } from '@/pages/Error';
import { CustomerDetailPage, CustomerListPage } from '@/pages/Customers';
import { DashboardPage } from '@/pages/Dashboard';
import {
  MachineCreatePage,
  MachineDetailPage,
  MachineEditPage,
  MachineListPage,
} from '@/pages/Machines';
import { AdminNotFoundPage } from '@/pages/NotFound';
import { OrderDetailPage, OrderListPage } from '@/pages/Orders';
import { PaymentListPage } from '@/pages/Payments';
import { ReportPage } from '@/pages/Reports';
import { SettingsPage } from '@/pages/Settings';

export const router = createBrowserRouter([
  { path: ADMIN_ROUTES.login, element: <LoginPage /> },
  {
    element: <ProtectedRoute />,
    errorElement: <AdminErrorPage />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Navigate replace to={ADMIN_ROUTES.dashboard} /> },
          { path: ADMIN_ROUTES.dashboard.slice(1), element: <DashboardPage /> },
          { path: ADMIN_ROUTES.machines.slice(1), element: <MachineListPage /> },
          { path: ADMIN_ROUTES.machineCreate.slice(1), element: <MachineCreatePage /> },
          { path: ADMIN_ROUTES.machineDetail.slice(1), element: <MachineDetailPage /> },
          { path: ADMIN_ROUTES.machineEdit.slice(1), element: <MachineEditPage /> },
          { path: ADMIN_ROUTES.bookings.slice(1), element: <BookingListPage /> },
          { path: ADMIN_ROUTES.bookingDetail.slice(1), element: <BookingDetailPage /> },
          { path: ADMIN_ROUTES.orders.slice(1), element: <OrderListPage /> },
          { path: ADMIN_ROUTES.orderDetail.slice(1), element: <OrderDetailPage /> },
          { path: ADMIN_ROUTES.customers.slice(1), element: <CustomerListPage /> },
          { path: ADMIN_ROUTES.customerDetail.slice(1), element: <CustomerDetailPage /> },
          { path: ADMIN_ROUTES.payments.slice(1), element: <PaymentListPage /> },
          { path: ADMIN_ROUTES.reports.slice(1), element: <ReportPage /> },
          { path: ADMIN_ROUTES.settings.slice(1), element: <SettingsPage /> },
        ],
      },
    ],
  },
  { path: ADMIN_ROUTES.notFound, element: <AdminNotFoundPage /> },
]);
