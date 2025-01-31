import PlanSubTitle from '../PlanSubTitle'

type PlanDateButtonProps = {
  onClick: () => void
  title: string
}

const PlanDateButton = ({ onClick, title }: PlanDateButtonProps) => {
  return (
    <div
      className="flex h-[60px] w-[260px] cursor-pointer items-center justify-center rounded-[10px] border border-[#CCCCCC]"
      onClick={onClick}
    >
      <PlanSubTitle title={title} />
    </div>
  )
}

export default PlanDateButton
