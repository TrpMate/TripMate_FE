"use client";

import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import { useRef, useState } from "react";
import { MainSearchProps } from "../../types/mainType";
import Categories from "./Categories";
import MainSearchInput from "./MainSearchInput";
import SearchButton from "./SearchButton";
import SearchMenuList from "./SearchMenuList";

const MainSearch = ({
  searchText,
  setSearchText,
  onClick,
  setListType,
}: MainSearchProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("전체");
  const categoryRef = useRef<HTMLDivElement>(null);

  useOnclickOutside(categoryRef, () => {
    setMenuOpen(false);
  });

  return (
    <div className="w-[560px] h-[60px] bg-white flex items-center py-[13px] border-[#353535] rounded-[10px] border-[2px] pr-[12px] relative">
      {menuOpen && (
        <div className="w-full h-[60px] absolute top-0 z-10 cursor-pointer" />
      )}
      <Categories
        categoryName={categoryName}
        onClick={() => setMenuOpen(true)}
      />
      <div className="w-[1.5px] h-full bg-[#CCCCCC]" />
      <MainSearchInput
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
        closeOnClick={() => {
          if (searchText === "") return;
          setSearchText("");
        }}
        searchOnClick={onClick}
      />
      <SearchButton onClick={onClick} />
      {menuOpen && (
        <SearchMenuList
          ref={categoryRef}
          setListType={setListType}
          setCategoryName={setCategoryName}
          setMenuOpen={setMenuOpen}
        />
      )}
    </div>
  );
};

export default MainSearch;
