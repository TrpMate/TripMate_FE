"use client";

import "react-loading-skeleton/dist/skeleton.css";
import { useDeletePlan, useGetPlanList } from "../../_api";
import PlanItemListTitle from "./PlanItemListTitle";
import PlanListItem from "./PlanListItem";
import PlanListLoading from "./PlanListLoading";
import PlanListPagination from "./PlanListPagination";

const PlanItemList = () => {
  const { data, isLoading, refetch } = useGetPlanList();
  const { mutate } = useDeletePlan();
  console.log("data1", data);
  return (
    <div className="w-full pt-[30px]">
      <PlanItemListTitle />
      <div className="flex flex-col-reverse">
        {isLoading ? (
          <PlanListLoading />
        ) : (
          data?.map((item) => (
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
          ))
        )}
      </div>

      <PlanListPagination />
    </div>
  );
};

export default PlanItemList;
