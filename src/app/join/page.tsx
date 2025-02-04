"use client";

import H27Title from "@/components/subTitle/H27Title";
import TopBanner from "@/components/topBanner/TopBanner";
import { useState } from "react";
import JoinInputForm from "./components/JoinInputForm";
import JoinTitle from "./components/JoinTitle";

export type JoinData = {
  email: string;
  name: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};

const JoinPage = () => {
  const [joinData, setJoinData] = useState<JoinData>({
    email: "",
    name: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const isEmailValid = (email: string) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password: string) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(password);
  };

  const isPasswordCheckValid = (password: string, passwordCheck: string) => {
    return password === passwordCheck;
  };

  const handleJoin = async () => {
    if (
      !isEmailValid(joinData.email) ||
      !isPasswordValid(joinData.password) ||
      !isPasswordCheckValid(joinData.password, joinData.passwordCheck)
    ) {
      alert("입력하신 정보를 확인해주세요.");
      return;
    } else {
      console.log("통과");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <TopBanner />
      <div className="pt-[120px] pb-[150px]">
        <JoinTitle />
        <div className="w-[562px] pt-[50px]">
          <JoinInputForm
            joinData={joinData}
            setJoinData={setJoinData}
            isEmailValid={isEmailValid}
            isPasswordValid={isPasswordValid}
            isPasswordCheckValid={isPasswordCheckValid}
          />
          <div className="mt-[50px]">
            <div
              className="w-full h-[65px] flex items-center justify-center rounded-[60px] bg-[#353535] text-white cursor-pointer"
              onClick={handleJoin}
            >
              <H27Title title="가입하기" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
