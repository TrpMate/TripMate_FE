"use client";

import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";
import Skeleton from "./Skeleton";

type MainItemListProps = {
  addr1: string;
  addr2: string;
  areacode: number;
  booktour: number;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: number;
  contenttypeid: number;
  cpyrhtDivCd: string;
  createdtime: number;
  firstimage: string;
  firstimage2: string;
  mapx: number;
  mapy: number;
  mlevel: number;
  modifiedtime: number;
  sigungucode: number;
  tel: string;
  title: string;
};

const MainItemList = () => {
  const [tourList, setTourList] = useState<MainItemListProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getTourList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://tripmate-be.shop/tourAPI/tour-searchKeyword`,
        {
          params: {
            numOfRows: 4,
            pageNo: 1,
            keyword: "서울",
            arrange: "A",
          },
        }
      );
      if (response.status === 200) {
        setTourList(response.data.response.body.items.item);
        console.log(response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTourList();
  }, []);

  if (isLoading)
    return (
      <div className="w-full flex justify-center gap-[40px] flex-wrap mt-[111px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
        ;
      </div>
    );

  return (
    <div className="w-full flex justify-center gap-[40px] flex-wrap mt-[111px]">
      {tourList.map((item) => (
        <MenuItem key={item.contentid} item={item} />
      ))}
    </div>
  );
};

export default MainItemList;
