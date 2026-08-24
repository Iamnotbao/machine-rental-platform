let selectedMachineId: string | null = null;
export const bookingStore = {
  getSelectedMachineId: () => selectedMachineId,
  setSelectedMachineId: (id: string | null) => {
    selectedMachineId = id;
  },
};
