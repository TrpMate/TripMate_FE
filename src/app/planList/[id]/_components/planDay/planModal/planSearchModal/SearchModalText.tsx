import { SearchModalTextProps } from "@/app/planList/[id]/types/planDetailType";

const SearchModalText = ({ item }: SearchModalTextProps) => {
  return (
    <div className="font-medium w-[328px] flex flex-col gap-[5px]">
      <div className="flex h-[19px] items-center">
        <p className="leading-none font-bold">{item.title}</p>
      </div>
      <div className="flex h-[19px] items-center">
        <p className="leading-none truncate">{item.addr1}</p>
      </div>
      <div className="flex h-[19px] items-center">
        <p className="leading-none">{item.tel ? item.tel : "-"}</p>
      </div>
    </div>
  );
};

export default SearchModalText;
