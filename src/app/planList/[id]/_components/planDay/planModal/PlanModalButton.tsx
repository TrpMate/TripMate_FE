import { PlanModalButtonProps } from "../../../types/planDetailType";

const PlanModalButton = ({ onClick }: PlanModalButtonProps) => {
  return (
    <div
      className="mt-10 flex items-center justify-center bg-[#353535] rounded-[60px] py-5 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center h-[25px] font-medium">
        <p className="text-[20px] text-white leading-none">저장하기</p>
      </div>
    </div>
  );
};

export default PlanModalButton;
