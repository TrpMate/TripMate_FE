type PlanDetailDateBarProps = {
  date: string;
};

const PlanDetailDateBar = ({ date }: PlanDetailDateBarProps) => {
  return (
    <div className="w-full h-[41px] bg-[#FCFFF2] border border-l-0 border-b-0 border-[#DDDDDD] flex items-center justify-end rounded-tr-[10px] pr-5">
      <div className="flex items-center h-5">
        <p className="font-medium text-[#AED400]">{date}</p>
      </div>
    </div>
  );
};

export default PlanDetailDateBar;
