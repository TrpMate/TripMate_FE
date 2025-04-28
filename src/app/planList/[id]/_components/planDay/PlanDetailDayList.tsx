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
  const [selectedDay, setSelectedDay] = useState(1);
  const [courseDataMap, setCourseDataMap] = useState<{
    [key: number]: CourseDataType;
  }>({});

  type CourseDataType = {
    courseDayId: number;
    placeName: string;
    category: string;
    contentTypeId: string;
    visitStartTime: string;
    visitEndTime: string;
    mapX: number;
    mapY: number;
    address?: string;
    phoneNumber?: string;
    memo?: string;
  };

  const emptyCourseData: CourseDataType = {
    courseDayId: 0,
    placeName: "",
    category: "",
    contentTypeId: "",
    visitStartTime: "",
    visitEndTime: "",
    mapX: 0,
    mapY: 0,
    address: "",
    phoneNumber: "",
    memo: "",
  };

  const handleCourseDataChange = (
    dayNum: number,
    newCourseData: CourseDataType
  ) => {
    setCourseDataMap((prev) => ({
      ...prev,
      [dayNum]: newCourseData,
    }));
  };
  return (
    <>
      <div className="w-full mt-[40px] flex items-end">
        {Array.from({ length: day?.length }).map((_, index) => (
          <div key={index} onClick={() => setSelectedDay(index + 1)}>
            <PlanDetailNumber
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              number={index}
            />
          </div>
        ))}
        {day?.map(
          (day, index) =>
            isClicked === index && (
              <PlanDetailDateBar key={index} date={`${day.dayDate}(목)`} />
            )
        )}
      </div>
      {day.map(
        (d) =>
          selectedDay === d.dayNum && (
            <div key={d.dayNum}>
              {courseDataMap[d.dayNum] && (
                <PlanDetailDayItem
                  courseData={courseDataMap[d.dayNum] ?? emptyCourseData}
                />
              )}
              <div className="w-full flex items-center justify-center -mt-[0px] h-[110px] border border-[#DDDDDD] rounded-b-[10px] bg-[#F2F2F2]">
                <div
                  className="size-[48px] flex items-center justify-center rounded-full bg-[#353535] cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <PlanDetailPlus />
                </div>
              </div>
              {isOpen && (
                <PlanDetailModal
                  dayId={d.dayNum}
                  setIsOpen={setIsOpen}
                  onSave={(newData: CourseDataType) =>
                    handleCourseDataChange(d.dayNum, newData)
                  }
                />
              )}
            </div>
          )
      )}
    </>
  );
};

export default PlanDetailDayList;
