import { Dispatch, SetStateAction } from "react";
import PlanSubTitle from "../PlanSubTitle";
import PlanCalendar from "./PlanCalendar";
import { PlanDataTypes } from "./PlanCreateContent";
import PlanDateButton from "./PlanDateButton";

type PlanDateSelectProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedDate: PlanDataTypes;
  setSelectedDate: Dispatch<SetStateAction<PlanDataTypes>>;
  onClick: () => void;
};

const PlanDateSelect = ({
  isOpen,
  setIsOpen,
  selectedDate,
  setSelectedDate,
  onClick,
}: PlanDateSelectProps) => {
  return (
    <div className="w-full mt-[25px]">
      <PlanSubTitle cType="title" title="여행 기간" />
      <div className="w-full relative flex justify-between items-center">
        {isOpen && <div className="w-full h-[60px] absolute top-0" />}
        <PlanDateButton onClick={onClick} title={selectedDate.startDate} />
        <p>-</p>
        <PlanDateButton onClick={onClick} title={selectedDate.endDate} />
        {isOpen && (
          <div className="w-full absolute top-[115px] flex justify-center items-center">
            <PlanCalendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setIsOpen={setIsOpen}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanDateSelect;
