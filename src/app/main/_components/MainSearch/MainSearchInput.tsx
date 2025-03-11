import { MainSearchInputProps } from "../../types/mainType";
import CloseButton from "./CloseButton";

const MainSearchInput = ({
  searchText,
  onChange,
  onKeyDown,
  closeOnClick,
}: MainSearchInputProps) => {
  return (
    <div className="w-full flex items-center">
      <input
        type="text"
        value={searchText}
        className="pl-[16px] font-medium text-[18px] outline-none w-full"
        placeholder="검색어를 입력하세요"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <CloseButton searchText={searchText} onClick={closeOnClick} />
    </div>
  );
};

export default MainSearchInput;
