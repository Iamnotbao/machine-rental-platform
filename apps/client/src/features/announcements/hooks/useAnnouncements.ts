import { useQuery } from '@tanstack/react-query';
import { announcementUiService } from '@/features/announcements/services/announcement-ui.service';

export function useAnnouncements() {
  return useQuery({
    queryKey: ['client-admin-announcements'],
    queryFn: () => announcementUiService.listActive(),
  });
}
