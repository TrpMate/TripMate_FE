"use client";

import DetailTitle from "./DetailTitle";
import MemberButton from "./MemberButton";
import PlanDetailTopDate from "./PlanDetailTopDate";
import PlanTopEditIcon from "./PlanTopEditIcon";

const PlanDetailTop = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center">
        <DetailTitle />
        <PlanDetailTopDate />
        <PlanTopEditIcon onClick={() => {}} />
      </div>
      <MemberButton />
    </div>
  );
};

export default PlanDetailTop;
