"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import PlanDetailTop from "./_components/detailTop/PlanDetailTop";
import PlanDetailDayList from "./_components/planDay/PlanDetailDayList";
import PlanDetailChat from "./_components/PlanDetailChat";
import PlanDetailMap from "./_components/PlanDetailMap";
import { useGetPlanDetail, useGetPlanDetailCourse } from "../_api";

const PlanDetailContent = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const { data, isLoading } = useGetPlanDetail(Number(id));
  const { data: courseData } = useGetPlanDetailCourse(Number(id));
  const [isClicked, setIsClicked] = useState(0);
  console.log('데이터', courseData);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pt-[100px] pb-[45px] flex flex-col items-center justify-center">
      <div className=" flex items-center justify-center">
        <div className="pt-[100px] w-[1440px]">
          <PlanDetailTop title={data.courseName} startDate={data.startDate} endDate={data.endDate} />
          <div className="pt-[40px] w-full flex items-start justify-between">
            <div className="w-[1000px]">
              <PlanDetailMap />
              <PlanDetailDayList
                day={data!}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
              />
            </div>
            <PlanDetailChat />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[10px] font-medium">
        <div
          className="px-[39px] py-[16.5px] mt-[45px] border border-[#CCCCCC] rounded-[30px] cursor-pointer"
          onClick={() => console.log("저장하기")}
        >
          <div className="flex items-center h-[25px]">
            <p className="text-[20px]">인쇄하기</p>
          </div>
        </div>
        <div
          className="px-[39px] py-[16.5px] mt-[45px] border border-black bg-black rounded-[30px] cursor-pointer"
          onClick={() => console.log("저장하기")}
        >
          <div className="flex items-center h-[25px]">
            <p className="text-[20px] text-white">전체 저장하기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlanDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlanDetailContent />
    </Suspense>
  );
};

export default PlanDetailPage;
