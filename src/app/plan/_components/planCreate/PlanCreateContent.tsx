"use client";

import { useGetPlanList } from "@/app/planList/_api";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCreatePlan } from "../../_api";
import PlanButton from "../PlanButton";
import PlanDateSelect from "./PlanDateSelect";
import PlanInput from "./PlanInput";
export type PlanDataTypes = {
  planTitle: string;
  startDate: string;
  endDate: string;
};

const PlanCreateContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();
  const { mutate } = useCreatePlan();
  const { refetch } = useGetPlanList();
  const [planData, setPlanData] = useState<PlanDataTypes>({
    planTitle: "",
    startDate: format(new Date(), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  });

  const handleCreatePlan = async () => {
    if (planData.planTitle === "") {
      alert("플랜 제목을 입력해주세요.");
      return;
    }
    if (planData.startDate === "") {
      alert("시작 날짜를 선택해주세요.");
      return;
    }
    if (planData.endDate === "") {
      alert("종료 날짜를 선택해주세요.");
      return;
    }
    try {
      mutate(planData, {
        onSuccess: () => {
          refetch();
          navigate.push("/planList");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[61px] flex w-full flex-col items-center">
      <div className="relative flex flex-col items-center">
        <PlanInput
          planTitle={planData.planTitle}
          setPlanTitle={(planTitle) => setPlanData({ ...planData, planTitle })}
        />
        <PlanDateSelect
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClick={() => setIsOpen(true)}
          selectedDate={planData}
          setSelectedDate={setPlanData}
        />
      </div>
      <div className="mt-[35px] w-[562px]">
        <div onClick={handleCreatePlan}>
          <PlanButton bType="create" title="플랜 생성하기" />
        </div>
      </div>
    </div>
  );
};

export default PlanCreateContent;
