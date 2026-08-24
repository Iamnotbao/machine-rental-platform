import { useState } from 'react';
import { navigationStore } from '@/store/navigation/navigation.store';
export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(navigationStore.isSidebarOpen());
  const setOpen = (open: boolean) => {
    navigationStore.setSidebarOpen(open);
    setIsOpen(open);
  };
  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(!isOpen),
  };
};
