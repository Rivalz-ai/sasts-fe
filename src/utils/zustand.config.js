import { create } from "zustand";

const useConnection = create((set) => ({
    openMenu: false,
    chartType: 'DAY',
    setOpenMenu: (openMenu) => set({ openMenu }),
    setChartType: (chartType) => set({ chartType }),
}));

export default useConnection;
