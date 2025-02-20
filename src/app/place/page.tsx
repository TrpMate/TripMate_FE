"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { useGetTourData } from "../main/_api";
import Skeleton from "../main/_components/Skeleton";
import PlaceBanner from "./_components/placeBanner/PlaceBanner";
import ContentList from "./_components/placeContent/contentList/ContentList";
import DropList from "./_components/placeContent/dropList/DropList";

const PlacePageContent = () => {
  const params = useSearchParams();
  const [text, setText] = useState(params.get("kd")?.toString() ?? "");
  const [textOn, setTextOn] = useState(false);
  const [listType, setListType] = useState(Number(params.get("ct")) || 12);
  const [keyword, setKeyword] = useState("");
  const [rankingName, setRankingName] = useState({
    name: "제목순",
    value: "A",
  });
  const [numOfRowName, setNumOfRowName] = useState({
    name: "8개씩 보기",
    value: 8,
  });
  const { data, isLoading, refetch } = useGetTourData({
    keyword: text,
    arrange: rankingName.value,
    numOfRows: numOfRowName.value,
    pageNo: 1,
    contentTypeId: listType,
  });

  useEffect(() => {
    refetch();
  }, [textOn, rankingName, numOfRowName]);

  const handleSearchClick = () => {
    setTextOn(!textOn);
    setText(keyword);
    refetch();
  };

  return (
    <div className="pt-[100px]">
      <PlaceBanner
        keyword={keyword}
        setKeyword={setKeyword}
        setListType={setListType}
        onClick={handleSearchClick}
      />
      <div className="flex w-full justify-center px-[30px]">
        <div className="flex w-[1440px] flex-col items-start justify-center pt-[40px] max-[1515px]:w-[1070px] max-[1146px]:w-[700px] max-[776px]:w-[330px]">
          <DropList
            rankingName={rankingName}
            setRankingName={setRankingName}
            numOfRowName={numOfRowName}
            setNumOfRowName={setNumOfRowName}
          />
          <div className="flex flex-wrap items-center justify-start gap-[40px] pb-[150px] pt-[40px]">
            {isLoading ? (
              <Skeleton length={8} skeletonType="place" />
            ) : (
              <ContentList tourList={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PlacePage = () => {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <PlacePageContent />
    </Suspense>
  );
};

export default PlacePage;
