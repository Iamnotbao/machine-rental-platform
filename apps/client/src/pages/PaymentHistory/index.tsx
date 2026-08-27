import { Navigate } from 'react-router-dom';
import { ROUTES } from '@/constants/route.constants';

export default function PaymentHistoryPage() {
  return <Navigate replace to={`${ROUTES.profile}?tab=payments`} />;
}
