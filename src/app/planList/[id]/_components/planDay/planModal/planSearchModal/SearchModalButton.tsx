import { SearchModalButtonProps } from "@/app/planList/[id]/types/planDetailType";

const SearchModalButton = ({ onClick }: SearchModalButtonProps) => {
  return (
    <div
      className="border border-[#CCCCCC] rounded-[30px] px-[19px] py-[10px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center h-[20px]">
        <p className="leading-none font-medium">선택</p>
      </div>
    </div>
  );
};

export default SearchModalButton;
