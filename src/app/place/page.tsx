"use client";

import { useEffect, useState } from "react";
import { getData } from "../main/_api";
import Skeleton from "../main/_components/Skeleton";
import PlaceTopBanner from "./_components/placeBanner/PlaceTopBanner";
import ContentList from "./_components/placeContent/contentList/ContentList";
import DropList from "./_components/placeContent/dropList/DropList";

const PlacePage = () => {
  const [tourList, setTourList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [listType, setListType] = useState(12);
  const [keyword, setKeyword] = useState("");
  const [rankingName, setRankingName] = useState({
    name: "제목순",
    value: "A",
  });
  const [numOfRowName, setNumOfRowName] = useState({
    name: "8개씩 보기",
    value: 8,
  });

  const getTourList = async () => {
    try {
      setIsLoading(true);
      const data = await getData({
        keyword: keyword,
        arrange: rankingName.value,
        numOfRows: numOfRowName.value,
        pageNo: 1,
        contentTypeId: listType,
      });
      setIsLoading(false);
      setTourList(data.response.body.items.item ?? []);
      console.log(data.response.body.items.item);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTourList();
  }, [rankingName, numOfRowName]);

  return (
    <div className="pt-[100px]">
      <PlaceTopBanner
        keyword={keyword}
        setKeyword={setKeyword}
        listType={listType}
        setListType={setListType}
        onClick={getTourList}
      />
      <div className="w-full px-[223px]">
        <div className="w-full flex flex-col items-center justify-center pt-[40px]">
          <DropList
            rankingName={rankingName}
            setRankingName={setRankingName}
            numOfRowName={numOfRowName}
            setNumOfRowName={setNumOfRowName}
          />

          {isLoading ? (
            <div className="w-full flex justify-center gap-[40px] flex-wrap">
              {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} skeletonType="place" />
              ))}
            </div>
          ) : (
            <ContentList tourList={tourList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
