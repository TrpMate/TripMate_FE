import PlanSubTitle from "../PlanSubTitle";

type PlanDateButtonProps = {
  onClick: () => void;
  title: string;
};

const PlanDateButton = ({ onClick, title }: PlanDateButtonProps) => {
  return (
    <div
      className="w-[260px] h-[60px] rounded-[10px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <PlanSubTitle title={title} />
    </div>
  );
};

export default PlanDateButton;
