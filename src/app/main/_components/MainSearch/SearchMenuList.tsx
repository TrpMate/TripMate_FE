import { CategoryList } from "@/utils/Menu";
import { SearchMenuListProps } from "../../types/mainType";

const SearchMenuList = ({
  ref,
  setCategoryName,
  setMenuOpen,
  setListType,
}: SearchMenuListProps) => {
  return (
    <div
      ref={ref}
      className="absolute top-[60px] flex flex-col py-3 items-center bg-white border rounded-[20px] w-[160px] z-20"
    >
      {CategoryList.map((category) => (
        <div
          className="cursor-pointer font-medium py-[6px]"
          key={category.code}
          onClick={() => {
            setCategoryName(category.name);
            setMenuOpen(false);
            if (setListType) {
              setListType(category.code);
            }
          }}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default SearchMenuList;
