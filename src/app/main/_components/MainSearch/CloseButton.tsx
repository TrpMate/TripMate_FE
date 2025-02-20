import SearchCloseIcon from "@/utils/svg/SearchCloseIcon";
import React from "react";

type CloseButtonProps = {
  searchText: string;
  onClick: () => void;
};

const CloseButton = ({ searchText, onClick }: CloseButtonProps) => {
  return (
    <div
      className={`${searchText ? "cursor-pointer opacity-100" : "opacity-0"}`}
      onClick={onClick}
    >
      <SearchCloseIcon />
    </div>
  );
};

export default CloseButton;
