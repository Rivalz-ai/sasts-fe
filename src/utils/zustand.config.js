import { create } from "zustand";

const useConnection = create((set) => ({
    openMenu: false,
    setOpenMenu: (openMenu) => set({ openMenu }),
}));

export default useConnection;
