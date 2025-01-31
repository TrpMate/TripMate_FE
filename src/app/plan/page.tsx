import Link from 'next/link'
import PlanButton from './_components/PlanButton'
import PlanCreateContent from './_components/planCreate/PlanCreateContent'
import PlanInProgressText from './_components/PlanInProgressText'
import PlanTitle from './_components/PlanTitle'

const PlanPage = () => {
  return (
    <div className="pt-[100px]">
      <div className="flex w-full flex-col items-center justify-center pb-[200px] pt-[150px]">
        <PlanTitle />
        <PlanCreateContent />
        <PlanInProgressText />
        <Link href={'/'} className="mt-[22px] w-[562px]">
          <PlanButton title="내 플랜 보러가기" />
        </Link>
      </div>
    </div>
  )
}

export default PlanPage
