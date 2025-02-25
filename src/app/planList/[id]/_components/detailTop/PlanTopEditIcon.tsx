import { OnClickProps } from "@/app/login/types/loginType";
import PlanDetailEdit from "@/utils/svg/PlanDetailEdit";

const PlanTopEditIcon = ({ onClick }: OnClickProps) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <PlanDetailEdit />
    </div>
  );
};

export default PlanTopEditIcon;
