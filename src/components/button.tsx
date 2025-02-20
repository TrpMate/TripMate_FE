"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const KButton = () => {
  const params = useSearchParams();
  const code = params.get("code");
  const kakaoLogin = async () => {
    try {
      const response = await axios.get(
        "https://tripmate-be.shop/oauth2/authorization/kakao"
      );

      console.log("카카오 로그인", response);
    } catch (error) {
      console.log("카카오 로그인 에러", error);
    }
  };

  useEffect(() => {
    if (code) {
      console.log("카카오 인가코드", code);
    }
  }, [code]);

  return (
    <div className="m-2">
      {/* <Link href={"https://tripmate-be.shop/oauth2/authorization/kakao"}> */}
      <div
        className="w-[200px] h-[50px] rounded-xl border flex items-center justify-center cursor-pointer"
        onClick={kakaoLogin}
      >
        카카오 버튼
      </div>
      {/* </Link> */}
    </div>
  );
};

export default KButton;
