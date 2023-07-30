import { create } from 'zustand';

const useScreenStore = create((set) => ({
  mobile: false,
  isMobile: () => {
    set({ mobile: window?.matchMedia('(max-width: 1000px)')?.matches || false })
  }
}));

export default useScreenStore;
