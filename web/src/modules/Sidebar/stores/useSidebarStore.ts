import { create } from 'zustand';

type TUseSidebarStore = {
  isSidebarOpened: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const useSidebarStore = create<TUseSidebarStore>((set) => ({
  isSidebarOpened: false,
  openSidebar: () => set({ isSidebarOpened: true }),
  closeSidebar: () => set({ isSidebarOpened: false }),
}));
