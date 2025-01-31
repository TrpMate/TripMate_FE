type PlanSubTitleProps = {
  cType?: string
  title: string
}

const PlanSubTitle = ({ cType, title }: PlanSubTitleProps) => {
  return (
    <div className={`flex h-[22px] items-center ${cType === 'title' ? 'mb-[15px]' : 'mb-0'}`}>
      <p className="text-[18px] font-medium leading-none text-[#353535]">{title}</p>
    </div>
  )
}

export default PlanSubTitle
