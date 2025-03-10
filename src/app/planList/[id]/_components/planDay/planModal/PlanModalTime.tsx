import H22Title from "@/components/subTitle/H22Title";
import PlanModalDownArrow from "@/utils/svg/planDetail/PlanModalDownArrow";

const PlanModalTime = () => {
  return (
    <div className="mt-[33px] font-medium">
      <H22Title title="시간 설정" />
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center h-[17px]">
            <p className="text-[14px] text-[#AAAAAA] leading-none">시작 시간</p>
          </div>
          <div className="flex py-[10px] pl-4 pr-[9px] border border-[#CCCCCC] rounded-[10px]">
            <div className="flex items-center h-[20px] gap-[5px]">
              <p className="leading-none">00시</p>
              <PlanModalDownArrow />
            </div>
          </div>
          <div className="flex py-[10px] pl-4 pr-[9px] border border-[#CCCCCC] rounded-[10px]">
            <div className="flex items-center h-[20px] gap-[5px]">
              <p className="leading-none">00분</p>
              <PlanModalDownArrow />
            </div>
          </div>
          <div className="text-[14px] leading-none">~</div>
          <div className="flex items-center h-[17px]">
            <p className="text-[14px] text-[#AAAAAA] leading-none">종료 시간</p>
          </div>
          <div className="flex py-[10px] pl-4 pr-[9px] border border-[#CCCCCC] rounded-[10px]">
            <div className="flex items-center h-[20px] gap-[5px]">
              <p className="leading-none">00시</p>
              <PlanModalDownArrow />
            </div>
          </div>
          <div className="flex py-[10px] pl-4 pr-[9px] border border-[#CCCCCC] rounded-[10px]">
            <div className="flex items-center h-[20px] gap-[5px]">
              <p className="leading-none">00분</p>
              <PlanModalDownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanModalTime;
