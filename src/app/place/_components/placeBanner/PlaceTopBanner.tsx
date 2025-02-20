import Image from "next/image";
import PlaceBannerTitle from "./PlaceBannerTitle";

const PlaceTopBanner = () => {
  return (
    <div>
      <div className="w-full h-[370px] flex justify-center relative overflow-hidden">
        <div className="flex flex-col items-center pt-[100px] pb-[85px]">
          <PlaceBannerTitle />
        </div>
        <Image
          src={"/images/area_bg.png"}
          fill
          sizes="1"
          alt="배너이미지"
          className="-z-10"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
};

export default PlaceTopBanner;
