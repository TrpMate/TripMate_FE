import PlanContent from "./_components/PlanContent";
import PlanListTitle from "./_components/PlanListTitle";

const PlanListPage = () => {
  return (
    <div className="w-full h-full">
      <div className="pt-[100px] pb-[171px] flex flex-col items-center justify-center">
        <div className="w-[1000px] pt-[100px]">
          <PlanListTitle />
          <PlanContent />
        </div>
      </div>
    </div>
  );
};

export default PlanListPage;
