"use client";

import NevMenuIcon from "@/utils/svg/NevMenuIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
const NavLoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useRouter();
  const cookies = new Cookies();
  const logout = () => {
    cookies.remove("token");
    cookies.remove("refreshToken");
    setIsLoggedIn(false);
    navigate.push("/");
  };

  useEffect(() => {
    const token = cookies.get("token");
    setIsLoggedIn(!!token);
    const handleCookieChange = () => {
      const token = cookies.get("token");
      setIsLoggedIn(!!token);
    };
    cookies.addChangeListener(handleCookieChange);
    return () => {
      cookies.removeChangeListener(handleCookieChange);
    };
  }, [cookies]);

  return (
    <>
      {!isLoggedIn ? (
        <Link href={"/login"}>
          <div className="w-[162.5px] flex justify-end self-start">
            <div className="h-[40px] border border-[rgba(0,0,0,0.5)] hover:bg-[#FBFFE6] group hover:border-[#AED400] rounded-[38px] flex items-center justify-center leading-0 px-[22px] py-[9px]">
              <p className="font-bold text-[18px] group-hover:text-[#AED400] text-[#353535] leading-[22px]">
                Login
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="w-[162.5px] flex gap-[10px] justify-end">
          <div className="w-10 h-10 rounded-full group hover:border-[#AED400] hover:bg-[#FBFFE6] cursor-pointer flex items-center justify-center border border-[#777777]">
            <NevMenuIcon />
          </div>
          <div
            className="h-[40px] hover:bg-[#FBFFE6] group hover:border-[#AED400] border cursor-pointer border-[rgba(0,0,0,0.5)] rounded-[38px] flex items-center justify-center leading-0 px-[22px] py-[9px]"
            onClick={logout}
          >
            <p className="font-bold text-[18px] group-hover:text-[#AED400] text-[#353535] leading-[22px]">
              Logout
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavLoginButton;
