import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { accountUiService } from '@/features/account/services/account-ui.service';
import type { AccountDashboard } from '@/features/account/types';

const accountDashboardKey = ['client-account-dashboard'] as const;

export function useAccountDashboard() {
  return useQuery({ queryKey: accountDashboardKey, queryFn: () => accountUiService.dashboard() });
}

export function useUpdateAccountProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accountUiService.updateProfile,
    onSuccess: (profile) => {
      queryClient.setQueryData<AccountDashboard>(accountDashboardKey, (current) =>
        current ? { ...current, profile } : current,
      );
    },
  });
}
