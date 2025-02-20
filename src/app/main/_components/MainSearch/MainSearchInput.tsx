import React from "react";
import CloseButton from "./CloseButton";
import SearchButton from "./SearchButton";

type MainSearchInputProps = {
  searchText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  closeOnClick: () => void;
  searchOnClick: () => void;
};

const MainSearchInput = ({
  searchText,
  onChange,
  onKeyDown,
  closeOnClick,
  searchOnClick,
}: MainSearchInputProps) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchText}
        className="pl-[16px] font-medium text-[18px] outline-none w-[373px]"
        placeholder="검색어를 입력하세요"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <CloseButton searchText={searchText} onClick={closeOnClick} />
      <SearchButton onClick={searchOnClick} />
    </div>
  );
};

export default MainSearchInput;
