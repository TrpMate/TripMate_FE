"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import PlanDetailTop from "./_components/detailTop/PlanDetailTop";
import PlanDetailDayList from "./_components/planDay/PlanDetailDayList";
import PlanDetailChat from "./_components/PlanDetailChat";
import PlanDetailMap from "./_components/PlanDetailMap";

const PlanDetailContent = () => {
  const params = useSearchParams();
  const day = params.get("day");
  const [isClicked, setIsClicked] = useState(0);
  console.log(isClicked);

  return (
    <div className="pt-[100px] pb-[45px] flex flex-col items-center justify-center">
      <div className=" flex items-center justify-center">
        <div className="pt-[100px] w-[1440px]">
          <PlanDetailTop />
          <div className="pt-[40px] w-full flex items-start justify-between">
            <div className="w-[1000px]">
              <PlanDetailMap />
              <PlanDetailDayList
                day={day!}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
              />
            </div>
            <PlanDetailChat />
          </div>
        </div>
      </div>
      <div
        className="px-[39px] py-[16.5px] mt-[45px] border border-[#CCCCCC] rounded-[30px] cursor-pointer"
        onClick={() => console.log("저장하기")}
      >
        <div className="flex items-center h-[25px]">
          <p className="text-[20px] font-medium">저장하기</p>
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
