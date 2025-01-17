import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[170px] bg-[#F1F1F1] py-[40px] px-[30px]">
      <div>
        <p className="text-[22px] leading-[27px] font-bold">TripMate</p>
        <Link href="/">
          <p className="text-[16px] leading-[20px] mt-[20px] font-bold">
            이용약관 | 개인정보처리방침
          </p>
        </Link>
        <p className="mt-[6px] text-[14px] text-[#AAAAAA] font-bold leading-[17px]">
          Copyright © 2024 TripMate All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
