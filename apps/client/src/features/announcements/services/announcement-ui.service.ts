import { adminAnnouncements } from '@/features/announcements/data/announcement.mock';
import type { AdminAnnouncement } from '@/features/announcements/types';

const wait = (milliseconds = 120) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

export const announcementUiService = {
  async listActive(): Promise<AdminAnnouncement[]> {
    await wait();
    return adminAnnouncements
      .filter((item) => item.active)
      .sort((left, right) => left.priority - right.priority);
  },
};
