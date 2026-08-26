import { useQuery } from '@tanstack/react-query';
import { accountUiService } from '@/features/account/services/account-ui.service';

export function useAccountDashboard() {
  return useQuery({ queryKey:['client-account-dashboard'], queryFn:() => accountUiService.dashboard() });
}
