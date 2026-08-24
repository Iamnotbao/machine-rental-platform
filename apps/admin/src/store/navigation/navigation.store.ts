let sidebarOpen = false;
export const navigationStore = {
  isSidebarOpen: () => sidebarOpen,
  setSidebarOpen: (open: boolean) => {
    sidebarOpen = open;
  },
};
