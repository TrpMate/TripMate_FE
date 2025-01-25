type PlanButtonProps = {
  bType?: "create";
  title: string;
};

const PlanButton = ({ bType, title }: PlanButtonProps) => {
  return (
    <div
      className={`w-full flex justify-center ${
        bType === "create" ? "bg-[#353535]" : "bg-[#D0FF00]"
      } rounded-[60px] py-[19px] cursor-pointer`}
    >
      <div className="flex items-center h-[27px]">
        <p className="text-[22px] leading-none text-white font-medium">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PlanButton;
