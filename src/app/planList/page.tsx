import PlanCreateButton from './_components/PlanCreateButton'
import PlanItemList from './_components/planitemList/PlanItemList'
import PlanListMenuButton from './_components/PlanListMenuButton'
import PlanListTitle from './_components/PlanListTitle'

const PlanListPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-[171px] pt-[100px]">
      <div className="w-[1000px] pt-[100px]">
        <PlanListTitle />
        <PlanListMenuButton />
        <PlanCreateButton />
        <PlanItemList />
      </div>
    </div>
  )
}

export default PlanListPage
