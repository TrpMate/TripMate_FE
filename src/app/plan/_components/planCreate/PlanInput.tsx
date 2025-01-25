import PlanSubTitle from "../PlanSubTitle";

type PlanInputProps = {
  planTitle: string;
  setPlanTitle: (planTitle: string) => void;
};

const PlanInput = ({ planTitle, setPlanTitle }: PlanInputProps) => {
  return (
    <div>
      <PlanSubTitle cType="title" title="플랜 이름(20자 이내)" />
      <input
        value={planTitle}
        onChange={(e) => setPlanTitle(e.target.value)}
        className="pl-5 w-[562px] h-[60px] outline-none rounded-[10px] border border-[#CCCCCC]"
      />
    </div>
  );
};

export default PlanInput;
