type PlanSubTitleProps = {
  cType?: string;
  title: string;
};

const PlanSubTitle = ({ cType, title }: PlanSubTitleProps) => {
  return (
    <div
      className={`flex items-center h-[22px] ${
        cType === "title" ? "mb-[15px]" : "mb-0"
      }`}
    >
      <p className="text-[#353535] text-[18px] leading-none font-medium">
        {title}
      </p>
    </div>
  );
};

export default PlanSubTitle;
