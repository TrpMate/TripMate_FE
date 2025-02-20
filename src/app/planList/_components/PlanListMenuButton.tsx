type PlanListMenuButtonProps = {
  isOpen: number;
  setIsOpen: (id: number) => void;
};

const PlanListMenuButton = ({ isOpen, setIsOpen }: PlanListMenuButtonProps) => {
  const buttonList = [
    { id: 1, name: "내 정보" },
    { id: 2, name: "내 플랜 보기" },
    { id: 3, name: "문의" },
  ];

  return (
    <>
      <div className="flex justify-center gap-[10px] items-center">
        {buttonList.map((button) => (
          <div
            key={button.id}
            className={`rounded-[30px] border ${
              isOpen === button.id
                ? "border-[#AED400] bg-[#FBFFE6]"
                : "border-[#CCCCCC] bg-white"
            } py-[10.5px] px-[19px] cursor-pointer`}
            onClick={() => {
              setIsOpen(button.id);
            }}
          >
            <div className="h-[20px] flex items-center">
              <p
                className={`leading-none ${
                  isOpen === button.id ? "text-[#AED400]" : "text-black"
                }`}
              >
                {button.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlanListMenuButton;
