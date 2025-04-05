"use client";

import { PlanDetailDayListProps } from "@/app/planList/types/planListType";
import PlanDetailPlus from "@/utils/svg/planDetail/PlanDetailPlus";
import { useState } from "react";
import PlanDetailDateBar from "./PlanDetailDateBar";
import PlanDetailDayItem from "./PlanDetailDayItem";
import PlanDetailNumber from "./PlanDetailNumber";
import PlanDetailModal from "./planModal/PlanDetailModal";

const PlanDetailDayList = ({
  day,
  isClicked,
  setIsClicked,
}: PlanDetailDayListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("day", day);
  return (
    <>
      <div className="w-full mt-[40px] flex items-end">
        {Array.from({ length: day.length }).map((_, index) => (
          <div key={index}>
            <PlanDetailNumber
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              number={index}
            />
          </div>
        ))}
        <PlanDetailDateBar date={"2025-01-01(목)"} />
      </div>
      <PlanDetailDayItem />
      <div className="w-full flex items-center justify-center -mt-[0px] h-[110px] border border-[#DDDDDD] rounded-b-[10px] bg-[#F2F2F2]">
        <div
          className="size-[48px] flex items-center justify-center rounded-full bg-[#353535] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <PlanDetailPlus />
        </div>
      </div>
      {isOpen && <PlanDetailModal setIsOpen={setIsOpen} />}
    </>
  );
};

export default PlanDetailDayList;
