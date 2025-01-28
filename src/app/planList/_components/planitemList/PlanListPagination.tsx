import PlanListLeft from '@/components/ui/svg/PlanListLeft'
import PlanListLeftEnd from '@/components/ui/svg/PlanListLeftEnd'
import PlanListRight from '@/components/ui/svg/PlanListRight'
import PlanListRightEnd from '@/components/ui/svg/PlanListRightEnd'

const PlanListPagination = () => {
  return (
    <div className="flex w-full justify-center pt-[41px]">
      <div className="flex items-center gap-[10px]">
        <div className="cursor-pointer" onClick={() => {}}>
          <PlanListLeftEnd />
        </div>
        <div className="cursor-pointer" onClick={() => {}}>
          <PlanListLeft />
        </div>
        <div
          className="flex h-[29px] w-[29px] cursor-pointer items-center justify-center rounded-full bg-[#353535]"
          onClick={() => {}}
        >
          <div className="flex h-[17px] items-center">
            <p className="text-[14px] text-white">1</p>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => {}}>
          <PlanListRight />
        </div>
        <div className="cursor-pointer" onClick={() => {}}>
          <PlanListRightEnd />
        </div>
      </div>
    </div>
  )
}

export default PlanListPagination
