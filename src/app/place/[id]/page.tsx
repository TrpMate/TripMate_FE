"use client";

import { useParams } from "next/navigation";
import { useGetDetailData } from "../_api";
import DetailImage from "./_components/DetailImage";
import DetailMap from "./_components/DetailMap";
import DetailOverview from "./_components/DetailOverview";
import DetailTopTitle from "./_components/DetailTopTitle";
import DetailContentLeft from "./_components/detailContent/DetailContentLeft";
import DetailContentRight from "./_components/detailContent/DetailContentRight";
import DetailSkeleton from "./_components/detailSkeleton/DetailSkeleton";

type DetailData = {
  addr1: string;
  addr2: string;
  areacode: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  cpyrhtDivCd: string;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  homepage: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  overview: string;
  sigungucode: string;
  tel: string;
  telname: string;
  title: string;
  zipcode: string;
};

const DetailPage = () => {
  const params = useParams();
  const { data, isLoading } = useGetDetailData({
    data: {
      contentId: Number.parseInt(params.id!.toString()!.split("t")[0]),
      contentTypeId: Number.parseInt(params.id!.toString()!.split("t")[1]),
    },
  });
  const contentList = [
    "장소명",
    "문의 및 안내",
    "이용시간",
    "주소",
    "홈페이지",
  ];
  return (
    <>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        data.map((data: DetailData) => (
          <div key={data.contentid} className="pt-[100px]">
            <DetailTopTitle data={data} />
            <DetailImage image={data.firstimage} />
            <div className="pt-[100px] pb-[200px] px-[240px] ">
              <DetailOverview overview={data.overview} />
              <DetailMap mapy={data.mapy} mapx={data.mapx} />
              <div className="pt-[100px] flex items-start gap-[191px]">
                <DetailContentLeft contentList={contentList} data={data} />
                <DetailContentRight contentList={contentList} data={data} />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default DetailPage;
