import PlanDetailDelete from "@/utils/svg/planDetail/PlanDetailDelete";
import PlanDetailEdit from "@/utils/svg/planDetail/PlanDetailEdit";

const PlanDetailDayItem = () => {
  return (
    <div className="w-full px-[30px] py-[15px] flex justify-between border border-t-[#EEEEEE] border-x-[#DDDDDD] items-center">
      <div className="flex items-center gap-[30px]">
        <div className="flex items-center font-medium">
          <p>01:00</p>
          <p>&nbsp;-&nbsp;</p>
          <p>05:30</p>
        </div>
        <p className="text-[#353535] font-medium">관광지</p>
        <div className="font-medium w-[328px] flex flex-col gap-[5px]">
          <div className="flex h-[19px] items-center">
            <p className="leading-none font-bold">보리나라 학원농장</p>
          </div>
          <div className="flex h-[19px] items-center">
            <p className="leading-none">보리나라 학원농장 주소입니다</p>
          </div>
          <div className="flex h-[19px] items-center">
            <p className="leading-none">010-0000-0000</p>
          </div>
        </div>
        <div className="h-5">
          <p className="font-medium leading-none text-[#AAAAAA]">
            메모내용 입니다
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[30px]">
        <div className="flex items-center gap-[5px] border rounded-[30px] px-[19px] py-[10px]">
          <PlanDetailEdit />
          <div className="flex h-5 items-center">
            <p className="font-medium leading-none">수정</p>
          </div>
        </div>
        <PlanDetailDelete />
      </div>
    </div>
  );
};

export default PlanDetailDayItem;
