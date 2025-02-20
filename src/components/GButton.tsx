"use client";

import React, { useEffect } from "react";

const GButton = () => {
  const googleLogin = async () => {
    try {
      const url = ` https://accounts.google.com/o/oauth2/v2/auth?client_id=935790641586-mka3tc08fttdofiodu8v295569ntugnj.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login&response_type=token
		&scope=email profile`;
      window.location.href = url;
    } catch (error) {
      console.log("구글 로그인 로그인 에러", error);
    }
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get("access_token");
      if (token) {
        console.log("Access Token:", token);
      }
    }
  }, []);

  return (
    <div className="m-2">
      <div
        className="w-[200px] h-[50px] rounded-xl border flex items-center justify-center cursor-pointer"
        onClick={() => googleLogin()}
      >
        구글 버튼
      </div>
    </div>
  );
};

export default GButton;
