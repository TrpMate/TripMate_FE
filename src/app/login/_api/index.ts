import { createClientApi } from "@/shared/api/client-api";
import { useMutation } from "@tanstack/react-query";
import { emailLoginData } from "../page";

type LoginData = {
  code: string;
  socialType: string;
};

export const postLogin = async ({ code, socialType }: LoginData) => {
  try {
    const api = createClientApi();
    const response = await api.post("/oauth/token", {
      authorizationCode: code,
      socialType,
    });

    if (response.status === 200) {
      return response;
    }
    return null;
  } catch (error) {
    console.log("error", error);
    throw new Error("로그인에 실패했습니다.");
  }
};

export const userEmailLogin = async (data: emailLoginData) => {
  try {
    const api = createClientApi();
    const response = await api.post("/auth/login", {
      email: data.email,
      password: data.password,
    });
    if (response.status === 200) {
      return response.headers;
    }
    return null;
  } catch (error) {
    console.log("error", error);
    throw new Error("로그인에 실패했습니다.");
  }
};

export const useEmailLogin = () => {
  const mutationFn = (data: emailLoginData) => userEmailLogin(data);
  return useMutation({
    mutationFn,
    onError: (data) => {
      console.log("error", data);
    },
  });
};

export const useKakaoLogin = () => {
  const mutationFn = (data: LoginData) =>
    postLogin({ code: data.code, socialType: data.socialType });
  return useMutation({
    mutationFn,
  });
};
