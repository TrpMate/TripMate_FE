"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import BannerAuth from "./BannerAuth";
import BannerMainItem from "./BannerMainItem";
const TopBanner = () => {
  const pathName = usePathname();

  return (
    <div className="w-full h-[600px] relative">
      <Image
        src={"/images/image.png"}
        fill
        sizes="1"
        className="-z-10"
        alt="메인탑이미지"
        priority
      />
      <div className="pt-[255px]">
        {pathName === "/" ? (
          <BannerMainItem />
        ) : (
          <BannerAuth pathName={pathName} />
        )}
      </div>
    </div>
  );
};

export default TopBanner;
