import PlaceDownArrow from "@/utils/svg/PlaceDownArrow";
import PlanDetailDelete from "@/utils/svg/PlanDetailDelete";
import PlanDetailMove from "@/utils/svg/PlanDetailMove";
import PlanDetailSetting from "@/utils/svg/PlanDetailSetting";
import PlanDetailDateBar from "./PlanDetailDateBar";
import PlanDetailNumber from "./PlanDetailNumber";

type PlanDetailDayListProps = {
  day: string;
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
};

const PlanDetailDayList = ({
  day,
  isClicked,
  setIsClicked,
}: PlanDetailDayListProps) => {
  return (
    <>
      <div className="w-full mt-[40px] flex items-end">
        {Array.from({ length: Number(day) }).map((_, index) => (
          <div key={index}>
            <PlanDetailNumber
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              number={index}
            />
          </div>
        ))}
        <PlanDetailDateBar date={"2025-01-01(목)"} />
      </div>
      <div className="w-full px-5 py-[15px] flex border border-t-[#EEEEEE] border-x-[#DDDDDD] items-center">
        <PlanDetailMove />
        <div className="flex items-center pl-[17px] pr-[33px] gap-10">
          <div className="font-medium">
            <p>pm1:00</p>
            <p>~pm5:30</p>
          </div>
          <div className="flex gap-[12px] pl-[18.5px] pr-[12px] py-[9.5px] items-center border border-[#CCCCCC] rounded-[10px]">
            <p>관광지</p>
            <PlaceDownArrow />
          </div>
          <div className="font-medium flex flex-col gap-[10px]">
            <div className="flex h-5 items-center">
              <p className="leading-none">&nbsp;·&nbsp;</p>
              <p className="leading-none">보리나라 학원농장</p>
            </div>
            <div className="flex h-5  items-center">
              <p className="leading-none">&nbsp;·&nbsp;</p>
              <p className="leading-none">보리나라 학원농장 주소입니다</p>
            </div>
            <div className="flex h-5  items-center">
              <p className="leading-none">&nbsp;·&nbsp;</p>
              <p className="leading-none">
                &nbsp;보리나라 학원농장 연락처 입니다
              </p>
            </div>
          </div>
          <div className="h-5">
            <p className="font-medium leading-none text-[#AAAAAA]">
              메모(설정 버튼에서 수정가능)
            </p>
          </div>
        </div>
        <PlanDetailSetting />
        <PlanDetailDelete />
      </div>
    </>
  );
};

export default PlanDetailDayList;
