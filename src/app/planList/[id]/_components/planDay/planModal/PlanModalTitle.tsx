import H27Title from "@/components/subTitle/H27Title";
import PlanModalClose from "@/utils/svg/planDetail/PlanModalClose";
import { PlanModalTitleProps } from "../../../types/planDetailType";

const PlanModalTitle = ({ onClick }: PlanModalTitleProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <H27Title title="플랜 수정" />
      <div onClick={onClick} className="cursor-pointer">
        <PlanModalClose />
      </div>
    </div>
  );
};

export default PlanModalTitle;
