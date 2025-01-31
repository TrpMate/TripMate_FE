import PlanSubTitle from '../PlanSubTitle'

type PlanInputProps = {
  planTitle: string
  setPlanTitle: (planTitle: string) => void
}

const PlanInput = ({ planTitle, setPlanTitle }: PlanInputProps) => {
  return (
    <div>
      <PlanSubTitle cType="title" title="플랜 이름(20자 이내)" />
      <input
        value={planTitle}
        onChange={(e) => setPlanTitle(e.target.value)}
        className="h-[60px] w-[562px] rounded-[10px] border border-[#CCCCCC] pl-5 outline-none"
      />
    </div>
  )
}

export default PlanInput
