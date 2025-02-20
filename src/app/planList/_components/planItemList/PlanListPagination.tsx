import PlanListLeft from "@/utils/svg/PlanListLeft";
import PlanListLeftEnd from "@/utils/svg/PlanListLeftEnd";
import PlanListRight from "@/utils/svg/PlanListRight";
import PlanListRightEnd from "@/utils/svg/PlanListRightEnd";

const PlanListPagination = () => {
  return (
    <div className="w-full flex justify-center pt-[41px]">
      <div className="flex items-center gap-[10px]">
        <div className="cursor-pointer" onClick={() => {}}>
          <PlanListLeftEnd />
        </div>
        <div className="cursor-pointer" onClick={() => {}}>
          <PlanListLeft />
        </div>
        <div
          className="w-[29px] h-[29px] bg-[#353535] flex items-center justify-center rounded-full cursor-pointer"
          onClick={() => {}}
        >
          <div className="flex items-center h-[17px]">
            <p className="text-white text-[14px]">1</p>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => {}}>
          <PlanListRight />
        </div>
        <div className="cursor-pointer" onClick={() => {}}>
          <PlanListRightEnd />
        </div>
      </div>
    </div>
  );
};

export default PlanListPagination;
