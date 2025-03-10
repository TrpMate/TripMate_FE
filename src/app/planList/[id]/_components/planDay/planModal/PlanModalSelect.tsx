import H22Title from "@/components/subTitle/H22Title";
import { PlanModalSelectProps } from "../../../types/planDetailType";

const PlanModalSelect = ({ data, onClick }: PlanModalSelectProps) => {
  return (
    <div className="mt-10">
      <H22Title title="장소 설정" />
      <div className="mt-5 flex items-center justify-between">
        {data.name && (
          <div className="font-medium w-[328px] flex flex-col gap-[5px]">
            <div className="flex h-[19px] items-center">
              <p className="leading-none font-bold">{data.name}</p>
            </div>
            <div className="flex h-[19px] items-center">
              <p className="leading-none">{data.address}</p>
            </div>
            <div className="flex h-[19px] items-center">
              <p className="leading-none">{data.phone}</p>
            </div>
          </div>
        )}
        <div
          className="px-[19px] py-[10px] border border-[#CCCCCC] rounded-[30px] cursor-pointer"
          onClick={onClick}
        >
          <div className="flex items-center h-5">
            <p className="leading-none text-[#353535]">장소 검색</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanModalSelect;
