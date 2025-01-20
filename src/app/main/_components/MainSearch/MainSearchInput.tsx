import React from "react";

type MainSearchInputProps = {
  searchText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const MainSearchInput = ({ searchText, onChange }: MainSearchInputProps) => {
  return (
    <input
      type="text"
      value={searchText}
      className="pl-[16px] font-medium text-[16px] outline-none w-[373px]"
      placeholder="검색어를 입력하세요"
      onChange={onChange}
    />
  );
};

export default MainSearchInput;
