import { createClientApi } from "@/shared/api/client-api";
import { useMutation } from "@tanstack/react-query";
import { Cookies } from "react-cookie";

export const addPlanDay = async (id: number, data: {
  contentid: string,
  contenttypeid: string,
  name: string,
  address: string,
  phone: string
}) => {
  const cookie = new Cookies();
  const api = createClientApi();
  try {
    const response = await api.post(`/course-places${id}`, {
      courseDayId: id,
      contentId: data.contentid,
      contentTypeId: data.contenttypeid,
      placeTime: "2025-04-05T14:05:03.705Z",
    }, {
      headers: {
        Authorization: cookie.get("token"),
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error("삭제에 실패했습니다.");
  }
};

export const useAddPlanDay = () => {
  const mutationFn = ({ data }: {
    data: {
      id: number,
      data: {
        contentid: string,
        contenttypeid: string,
        name: string,
        address: string,
        phone: string
      }
    }
  }) => addPlanDay(data.id, data.data);
  return useMutation({ mutationFn });
};
