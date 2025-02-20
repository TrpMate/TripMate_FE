import PlanDetailEdit from "@/utils/svg/PlanDetailEdit";

type PlanTopEditIconProps = {
  onClick: () => void;
};

const PlanTopEditIcon = ({ onClick }: PlanTopEditIconProps) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <PlanDetailEdit />
    </div>
  );
};

export default PlanTopEditIcon;
