"use client";

import { useDeletePlan, useGetPlanList } from "../../_api";
import PlanItemListTitle from "./PlanItemListTitle";
import PlanListItem from "./PlanListItem";
import PlanListPagination from "./PlanListPagination";

export type PlanItem = {
  courseName: string;
  createdAt: string;
  endDate: string;
  id: number;
  public: boolean;
  startDate: string;
  updatedAt: string;
};

const PlanItemList = () => {
  const { data, isLoading, refetch } = useGetPlanList();
  const { mutate } = useDeletePlan();

  return (
    <div className="w-full pt-[30px]">
      <PlanItemListTitle />
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <div className="flex flex-col-reverse">
          {data?.map((item) => (
            <PlanListItem
              key={item.id}
              item={item}
              onClick={() =>
                mutate(item.id, {
                  onSuccess: () => {
                    console.log("성공");
                    refetch();
                  },
                })
              }
            />
          ))}
        </div>
      )}
      <PlanListPagination />
    </div>
  );
};

export default PlanItemList;
