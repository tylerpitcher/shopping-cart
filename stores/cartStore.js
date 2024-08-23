import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: {},
  count: 0,
  add: (item) => set((state) => {
    const items = state.items;
    const id = item.priceId;

    if (id in state.items) {
      items[id].quantity++;
      return { items, count: state.count + 1 };
    }

    return { 
      items: { 
        ...state.items, 
        [id]: { title: item.title, price: item.price, quantity: item.quantity || 1 } 
      },
      count: state.count + (item.quantity || 1)
    };
  }),
  remove: (item) => set((state) => {
    const items = state.items; 
    const id = item.priceId;

    if (items[id]?.quantity > 1) {
      items[id].quantity--;
    } else {
      delete items[id];
    }

    return { 
      count: state.count > 0 ? state.count - 1 : 0,
      items,
    }; 
  }),
  clear: () => set({ items: {}, count: 0 }),
}));

export default useCartStore;
