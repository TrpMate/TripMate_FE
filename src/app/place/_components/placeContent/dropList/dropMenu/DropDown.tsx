import PlaceDownArrow from '@/components/ui/svg/PlaceDownArrow'

type DropDownProps = {
  type: 'ranking' | 'numOfRow'
  onClick: () => void
  title: string
}

const DropDown = ({ type, onClick, title }: DropDownProps) => {
  const buttonWidth = {
    ranking: 'w-[130px] gap-[21px]',
    numOfRow: 'w-[170px] gap-[15px]',
  }
  return (
    <div
      className={`${buttonWidth[type]} relative flex cursor-pointer items-center rounded-[10px] border border-[#CCCCCC] py-[17px] pl-[19px] pr-[12px]`}
      onClick={onClick}
    >
      <div className="flex h-[25px] items-center">
        <p className="text-nowrap text-[20px] font-medium leading-none text-[#333333]">{title}</p>
      </div>
      <PlaceDownArrow />
    </div>
  )
}

export default DropDown
