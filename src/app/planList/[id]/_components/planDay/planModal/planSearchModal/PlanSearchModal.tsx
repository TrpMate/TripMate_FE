import { useGetTourData } from "@/app/main/_api";
import MainSearch from "@/app/main/_components/MainSearch/MainSearch";
import { MainItemListProps } from "@/app/main/types/mainType";
import { useEffect, useState } from "react";
import { PlanSearchModalProps } from "../../../../types/planDetailType";
import PlanModalTitle from "../PlanModalTitle";
import SearchModalButton from "./SearchModalButton";
import SearchModalImage from "./SearchModalImage";
import SearchModalText from "./SearchModalText";

const PlanSearchModal = ({
  closeOnClick,
  searchTitle,
  setSearchText,
  listType,
  setListType,
  setListOpen,
  setData,
}: PlanSearchModalProps) => {
  const [text, setText] = useState("");
  const { data, isLoading, refetch } = useGetTourData({
    keyword: text,
    arrange: "A",
    numOfRows: 100,
    pageNo: 1,
    contentTypeId: listType,
  });
  console.log(data);

  const handleSearchClick = () => {
    setText(searchTitle);
    setTimeout(() => {
      refetch();
    }, 0);
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="absolute top-0 left-0 p-10 w-full h-full bg-white rounded-[10px] flex flex-col">
      <PlanModalTitle title="장소 검색" onClick={closeOnClick} />
      <div className="mt-[33px] w-full">
        <MainSearch
          searchText={searchTitle}
          setSearchText={setSearchText}
          setListType={setListType}
          onClick={handleSearchClick}
        />
      </div>
      <div className="mt-10 flex-1 overflow-y-auto scrollbar-hide text-[#353535]">
        {isLoading ? (
          <div>로딩중...</div>
        ) : (
          data?.map((item: MainItemListProps) => (
            <div
              key={item.contentid}
              className="flex px-5 py-[16.5px] border border-[#CCCCCC] border-b-0 first:rounded-t-[10px] last:border-b last:rounded-b-[10px]  justify-between items-center"
            >
              <div className="flex items-center gap-5">
                <SearchModalImage image={item.firstimage} />
                <SearchModalText item={item} />
              </div>
              <SearchModalButton
                onClick={() => {
                  setData({
                    contentid: item.contentid.toString(),
                    contenttypeid: item.contenttypeid.toString(),
                    name: item.title,
                    address: item.addr1,
                    phone: item.tel,
                  });
                  setListOpen(false);
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PlanSearchModal;
