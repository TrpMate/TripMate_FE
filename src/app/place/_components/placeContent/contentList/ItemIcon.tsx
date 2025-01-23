import ContentItemIcon from '@/components/ui/svg/ContentItemIcon'

type ItemIconProps = {
  number: number
}

const ItemIcon = ({ number }: ItemIconProps) => {
  return (
    <div className="absolute right-[20px] top-[20px] flex items-center gap-1 rounded-[50px] bg-black bg-opacity-10 py-[5px] pl-[13px] pr-[8px]">
      <p className="text-[14px leading-1 font-extrabold] text-white">{number}</p>
      <ContentItemIcon />
    </div>
  )
}

export default ItemIcon
