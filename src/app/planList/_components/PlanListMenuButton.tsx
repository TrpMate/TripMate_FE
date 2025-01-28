const PlanListMenuButton = () => {
  const buttonList = [
    { id: 1, name: "내 정보" },
    { id: 2, name: "내 플랜 보기" },
    { id: 3, name: "문의" },
  ];
  return (
    <div className="pt-[30px] flex justify-center gap-[10px] items-center">
      {buttonList.map((button) => (
        <div
          key={button.id}
          className="rounded-[30px] border border-[#CCCCCC] py-[10.5px] px-[19px]"
        >
          <div className="h-[20px] flex items-center">
            <p className="leading-none">{button.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanListMenuButton;
