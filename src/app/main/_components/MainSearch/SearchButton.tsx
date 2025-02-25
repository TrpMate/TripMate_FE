import SearchIcon from "@/utils/svg/SearchIcon";
import { SearchButtonProps } from "../../types/mainType";

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <div className="ml-[10px]">
      <div className="cursor-pointer" onClick={onClick}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchButton;
