type PlanDetailNumberProps = {
  number: number;
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
};

const PlanDetailNumber = ({
  number,
  isClicked,
  setIsClicked,
}: PlanDetailNumberProps) => {
  return (
    <div>
      <div
        className={`${
          isClicked === number
            ? "border-[#DDDDDD] border-b-transparent text-[#AED400] bg-[#FCFFF2]"
            : " text-[#AAAAAA] border-transparent border-b-[#DDDDDD] bg-white"
        } border rounded-t-[20px] px-[30px] py-[15px] cursor-pointer`}
        onClick={() => setIsClicked(number)}
      >
        <div className="flex items-center h-5">
          <p className=" font-medium leading-none">DAY{number + 1}</p>
        </div>
      </div>
      <div
        className={`h-10 bg-[#FCFFF2] ${
          number === 0 ? "border-l" : ""
        } border-[#DDDDDD]`}
      />
    </div>
  );
};

export default PlanDetailNumber;
