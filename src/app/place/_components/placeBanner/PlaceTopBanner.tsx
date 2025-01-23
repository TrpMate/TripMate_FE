"use client";

import MainSearch from "@/app/main/_components/MainSearch/MainSearch";
import Image from "next/image";
import PlaceBannerTitle from "./PlaceBannerTitle";

type PlaceTopBannerProps = {
  keyword: string;
  setKeyword: (value: string) => void;
  listType: number;
  setListType: (value: number) => void;
  onClick: () => void;
};

const PlaceTopBanner = ({
  keyword,
  setKeyword,
  listType,
  setListType,
  onClick,
}: PlaceTopBannerProps) => {
  return (
    <div>
      <div className="w-full h-[370px] flex items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center pt-[100px] pb-[85px]">
          <PlaceBannerTitle />
          <div className="mt-[55px] ">
            <MainSearch
              searchText={keyword}
              setSearchText={setKeyword}
              setListType={setListType}
              onClick={onClick}
            />
          </div>
        </div>
        <Image
          src={"/images/area_bg.png"}
          fill
          sizes="1"
          alt="배너이미지"
          className="-z-10"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
};

export default PlaceTopBanner;
