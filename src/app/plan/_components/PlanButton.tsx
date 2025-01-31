type PlanButtonProps = {
  bType?: 'create'
  title: string
}

const PlanButton = ({ bType, title }: PlanButtonProps) => {
  return (
    <div
      className={`flex w-full justify-center ${
        bType === 'create' ? 'bg-[#353535]' : 'bg-[#D0FF00]'
      } cursor-pointer rounded-[60px] py-[19px]`}
    >
      <div className="flex h-[27px] items-center">
        <p className="text-[22px] font-medium leading-none text-white">{title}</p>
      </div>
    </div>
  )
}

export default PlanButton
