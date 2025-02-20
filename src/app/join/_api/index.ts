import { createClientApi } from "@/shared/api/client-api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { JoinData } from "../page";

export const userNicknameCheck = async (nickname: string) => {
  try {
    const api = createClientApi();
    const response = await api.get(
      `/user/check-duplicate/nickname=${nickname}`
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const userJoin = async (data: JoinData) => {
  console.log("data", data);
  try {
    const api = createClientApi();
    const response = await api.post("/user/signup", {
      username: data.name,
      password: data.password,
      nickname: data.nickname,
      email: data.email,
    });
    console.log("response", response);
    if (response.status === 200) {
      console.log("response", response);
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const useNicknameCheck = (nickname: string) => {
  const queryFn = () => userNicknameCheck(nickname);
  return useQuery({
    queryKey: ["nicknameCheck", nickname],
    queryFn,
    enabled: false,
  });
};

export const useJoin = () => {
  const mutationFn = (data: JoinData) => userJoin(data);
  return useMutation({ mutationFn });
};
