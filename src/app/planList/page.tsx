import PlanCreateButton from "./_components/PlanCreateButton";
import PlanItemList from "./_components/planitemList/PlanItemList";
import PlanListMenuButton from "./_components/PlanListMenuButton";
import PlanListTitle from "./_components/PlanListTitle";

const PlanListPage = () => {
  return (
    <div className="pt-[100px] pb-[171px] flex flex-col items-center justify-center">
      <div className="w-full pt-[100px] px-[443px]">
        <PlanListTitle />
        <PlanListMenuButton />
        <PlanCreateButton />
        <PlanItemList />
      </div>
    </div>
  );
};

export default PlanListPage;
