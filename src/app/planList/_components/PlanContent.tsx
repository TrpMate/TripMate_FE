"use client";

import { useAlertOpen } from "@/store/alertStore";
import AskList from "./askItemList/AskList";
import PlanCreateButton from "./PlanCreateButton";
import PlanItemList from "./planItemList/PlanItemList";
import PlanListMenuButton from "./PlanListMenuButton";

const PlanContent = () => {
  const { isOpen, setIsOpen } = useAlertOpen();
  console.log("isOpen", isOpen);
  return (
    <div className="pt-[30px]">
      <PlanListMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen === 2 && (
        <>
          <PlanCreateButton link="/plan" title="플랜 생성하기" />
          <PlanItemList />
        </>
      )}
      {isOpen === 3 && (
        <>
          <PlanCreateButton link="/" title="문의하기" />
          <AskList />
        </>
      )}
    </div>
  );
};

export default PlanContent;
