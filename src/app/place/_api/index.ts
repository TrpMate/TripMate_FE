import { createClientApi } from "@/shared/api/client-api";
import { useQuery } from "@tanstack/react-query";

type getDetailDataProps = {
  data: {
    contentId: number;
    contentTypeId: number;
  };
};

export const getDetailData = async ({ data }: getDetailDataProps) => {
  const api = createClientApi();
  const response = await api.get("/tourAPI/tour-detailCommon", {
    params: {
      contentId: data.contentId,
      contentTypeId: data.contentTypeId,
    },
  });
  if (response.status === 200) {
    return response.data.response.body.items.item;
  }
};

export const useGetDetailData = (data: getDetailDataProps) => {
  const queryFn = () => getDetailData({ data: data.data });
  return useQuery({ queryKey: ["detailData", data], queryFn });
};
