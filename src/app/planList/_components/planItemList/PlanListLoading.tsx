import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PlanListLoading = () => {
  return (
    <div className="border-y h-[56px] flex items-center gap-[40px]">
      <div className="w-full flex items-center gap-[40px] border-[#EEEEEE]">
        <Skeleton width={27.05} />
        <Skeleton width={464.93} height={20} />
        <Skeleton width={180.36} height={20} />
        <Skeleton containerClassName="flex-1" height={20} />
      </div>
    </div>
  );
};

export default PlanListLoading;
