"use client";

import DetailTitle from "./DetailTitle";
import MemberButton from "./MemberButton";
import PlanDetailTopDate from "./PlanDetailTopDate";
import PlanTopEditIcon from "./PlanTopEditIcon";

type PlanDetailTopProps = {
  title: string;
  startDate: string;
  endDate: string;
};

const PlanDetailTop = ({ title, startDate, endDate }: PlanDetailTopProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center">
        <DetailTitle title={title} />
        <PlanDetailTopDate startDate={startDate} endDate={endDate} />
        <PlanTopEditIcon onClick={() => { }} />
      </div>
      <MemberButton />
    </div>
  );
};

export default PlanDetailTop;
