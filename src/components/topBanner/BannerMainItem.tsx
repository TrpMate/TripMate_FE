import TripCreateButton from "@/app/main/_components/TripCreateButton";

const BannerMainItem = () => {
  return (
    <div className="flex justify-center items-center text-white">
      <TripCreateButton title="ALONE" buttonPosition="left" link={`/`} />
      <div className="flex flex-col items-center mx-[44px]">
        <p className="font-extrabold text-[60px] leading-[75px]">
          PLAN YOUR TRIP
        </p>
        <p className="font-medium text-[26px] leading-[32px] mt-[8px]">
          나만의 여행을 계획하세요
        </p>
      </div>
      <TripCreateButton title="TEAM" buttonPosition="right" link="/" />
    </div>
  );
};

export default BannerMainItem;
