export interface CartItem {
  machineId: string;
  quantity: number;
}
let items: CartItem[] = [];
export const cartStore = {
  getItems: () => items,
  setItems: (next: CartItem[]) => {
    items = next;
  },
};
