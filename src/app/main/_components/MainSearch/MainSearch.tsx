"use client";

import React, { useState } from "react";
import Categories from "./Categories";
import SearchMenuList from "./SearchMenuList";
import CloseButton from "./CloseButton";
import SearchButton from "./SearchButton";
import MainSearchInput from "./MainSearchInput";

const MainSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("카테고리");

  return (
    <div className="mt-[90px] flex justify-center bg-white">
      <div className="h-[60px] flex items-center py-[13px] border-[#353535] rounded-[10px] border-[2px] pr-[12px] relative">
        <Categories
          categoryName={categoryName}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className="w-[1px] h-full bg-[#CCCCCC]" />
        <MainSearchInput
          searchText={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <CloseButton
          searchText={searchText}
          onClick={() => {
            if (searchText === "") return;
            setSearchText("");
          }}
        />
        <SearchButton onClick={() => console.log("서치")} />
        {menuOpen && (
          <SearchMenuList
            setCategoryName={setCategoryName}
            setMenuOpen={setMenuOpen}
          />
        )}
      </div>
    </div>
  );
};

export default MainSearch;
