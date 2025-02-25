import { MainSearchInputProps } from "../../types/mainType";
import CloseButton from "./CloseButton";
import SearchButton from "./SearchButton";

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
