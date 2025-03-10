import H22Title from "@/components/subTitle/H22Title";

const PlanMemo = () => {
  return (
    <div className="mt-10">
      <H22Title title="플랜 메모" />
      <div className="mt-5 font-medium">
        <textarea className="resize-none w-full min-h-[150px] rounded-[10px] bg-[#F2F2F2] outline-none p-5" />
      </div>
    </div>
  );
};

export default PlanMemo;
