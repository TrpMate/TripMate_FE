"use client";

import { useEffect, useState } from "react";
import { useGetTourData } from "../_api";
import { MainItemListProps } from "../types/mainType";
import MainSearch from "./MainSearch/MainSearch";
import MenuItem from "./MenuItem";
import MoreButton from "./MoreButton";
import Skeleton from "./Skeleton";

const MainItemList = () => {
  const [listType, setListType] = useState(12);
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState("");
  const [textOn, setTextOn] = useState(false);
  const { data, isLoading, refetch } = useGetTourData({
    keyword: text,
    arrange: "A",
    numOfRows: 4,
    pageNo: 1,
    contentTypeId: listType,
  });

  useEffect(() => {
    refetch();
  }, [textOn]);

  const handleSearchClick = () => {
    setTextOn(!textOn);
    setText(searchText);
    refetch();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[90px] flex justify-center bg-white">
          <MainSearch
            searchText={searchText}
            setSearchText={setSearchText}
            setListType={setListType}
            onClick={handleSearchClick}
          />
        </div>
        <div className="mt-[111px] flex w-[1440px] flex-wrap justify-start gap-[40px] max-[1460px]:w-[1070px] max-[1090px]:w-[700px] max-[720px]:w-[330px]">
          {isLoading ? (
            <Skeleton length={4} skeletonType="main" />
          ) : (
            data?.map((item: MainItemListProps) => (
              <MenuItem key={item.contentid} item={item} />
            ))
          )}
        </div>
      </div>
      <MoreButton listType={listType} searchText={searchText} />
    </>
  );
};

export default MainItemList;
