import { createClientApi } from "@/shared/api/client-api";
import { useMutation } from "@tanstack/react-query";
import { Cookies } from "react-cookie";

export async function postPlan(postData: any) {
  try {
    const cookie = new Cookies();
    const api = createClientApi();
    const response = await api.post(
      "/course",
      {
        courseName: postData.planTitle,
        startDate: postData.startDate,
        endDate: postData.endDate,
        isPublic: true,
      },
      {
        headers: {
          Authorization: cookie.get("token"),
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
    throw new Error("error");
  }
}

export const useCreatePlan = () => {
  const mutationFn = (postData: any) => postPlan(postData);
  return useMutation({ mutationFn });
};
