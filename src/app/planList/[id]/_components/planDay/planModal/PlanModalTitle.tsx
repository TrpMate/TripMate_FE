import H27Title from "@/components/subTitle/H27Title";
import PlanModalClose from "@/utils/svg/planDetail/PlanModalClose";
import { PlanModalTitleProps } from "../../../types/planDetailType";

const PlanModalTitle = ({ title, onClick }: PlanModalTitleProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <H27Title title={title} />
      <div onClick={onClick} className="cursor-pointer">
        <PlanModalClose />
      </div>
    </div>
  );
};

export default PlanModalTitle;
