import { create } from "zustand";

type Search = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

export const useGetKeyword = create<Search>((set) => ({
  keyword: "",
  setKeyword: (keyword: string) => set({ keyword }),
}));
