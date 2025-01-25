import Link from "next/link";
import PlanButton from "./_components/PlanButton";
import PlanCreateContent from "./_components/planCreate/PlanCreateContent";
import PlanInProgressText from "./_components/PlanInProgressText";
import PlanTitle from "./_components/PlanTitle";

const PlanPage = () => {
  return (
    <div className="pt-[100px]">
      <div className="pt-[150px] pb-[200px] w-full flex flex-col items-center justify-center">
        <PlanTitle />
        <PlanCreateContent />
        <PlanInProgressText />
        <Link href={"/"} className="w-[562px] mt-[22px]">
          <PlanButton title="내 플랜 보러가기" />
        </Link>
      </div>
    </div>
  );
};

export default PlanPage;
