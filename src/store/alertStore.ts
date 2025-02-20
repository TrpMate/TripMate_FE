import { create } from "zustand";

type AlertOpenType = {
  isOpen: number;
  setIsOpen: (isOpen: number) => void;
};

export const useAlertOpen = create<AlertOpenType>((set) => ({
  isOpen: 2,
  setIsOpen: (isOpen: number) => set({ isOpen }),
}));
