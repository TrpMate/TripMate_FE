import PlanListDelete from '@/components/ui/svg/PlanListDelete'
import Link from 'next/link'

type PlanListItemProps = {
  item: {
    id: number
    title: string
    date: string
    createdDate: string
  }
  onClick: () => void
}

const PlanListItem = ({ item, onClick }: PlanListItemProps) => {
  return (
    <div className="flex h-[56px] items-center gap-[40px] border-y pr-[20.04px]">
      <Link href={'/planView'} className="flex w-full items-center gap-[40px] border-[#EEEEEE]">
        <div className="flex w-[27.05px] items-center justify-end">
          <p className="font-medium leading-none text-[#353535]">{item.id}</p>
        </div>
        <div className="flex h-[20px] w-[464.93px] items-center">
          <p className="font-medium leading-none text-[#353535]">{item.title}</p>
        </div>
        <div className="flex h-[20px] w-[180.36px] items-center justify-center">
          <p className="text-nowrap font-medium leading-none text-[#353535]">{item.date}</p>
        </div>
        <div className="flex h-[20px] w-[123.25px] items-center justify-center">
          <p className="text-nowrap font-medium leading-none text-[#AAAAAA]">{item.createdDate}</p>
        </div>
      </Link>
      <div className="cursor-pointer" onClick={onClick}>
        <PlanListDelete />
      </div>
    </div>
  )
}

export default PlanListItem
