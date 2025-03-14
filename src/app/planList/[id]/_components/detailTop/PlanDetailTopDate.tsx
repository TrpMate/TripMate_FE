type PlanDetailTopDateProps = {
  startDate: string;
  endDate: string;
};

const PlanDetailTopDate = ({ startDate, endDate }: PlanDetailTopDateProps) => {
  return (
    <div className="ml-[20px] mr-[9px] flex items-center h-[22px]">
      <p className="font-medium text-[18px] leading-none">
        {startDate} - {endDate}
      </p>
    </div>
  );
};

export default PlanDetailTopDate;
