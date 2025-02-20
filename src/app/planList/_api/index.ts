import { createClientApi } from "@/shared/api/client-api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Cookies } from "react-cookie";
import { PlanItem } from "../_components/planItemList/PlanItemList";
export async function getPlanList() {
  const cookie = new Cookies();
  const api = createClientApi();
  const response = await api.get("/course", {
    headers: {
      Authorization: cookie.get("token"),
    },
  });
  if (response.status === 200) {
    return response.data.data;
  }
}

export const deletePlan = async (id: number) => {
  const cookie = new Cookies();
  const api = createClientApi();
  try {
    const response = await api.delete(`/course/${id}`, {
      headers: {
        Authorization: cookie.get("token"),
      },
    });
    if (response.status === 204) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error("삭제에 실패했습니다.");
  }
};

export const useGetPlanList = () => {
  const queryFn = () => getPlanList();
  return useQuery<PlanItem[]>({ queryKey: ["planList"], queryFn });
};

export const useDeletePlan = () => {
  const mutationFn = (id: number) => deletePlan(id);
  return useMutation({ mutationFn });
};
