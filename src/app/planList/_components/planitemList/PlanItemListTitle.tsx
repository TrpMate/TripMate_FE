const PlanItemListTitle = () => {
  const listMenuTitle = [
    {
      id: 1,
      title: "플랜이름",
      width: "w-[464.93px]",
    },
    {
      id: 2,
      title: "여행기간",
      width: "w-[180.36px]",
    },
    {
      id: 3,
      title: "생성일자",
      width: "w-[123.25px]",
    },
  ];
  return (
    <div className="border-t-[2px] border-[#353535] border-b border-b-[#EEEEEE]">
      <div className="h-[56px] bg-[#FCFFF2] flex gap-[40.08px] items-center pl-[67.13px] pr-[84.17px]">
        {listMenuTitle.map((menu) => (
          <div
            key={menu.id}
            className={`flex justify-center items-center ${menu.width}`}
          >
            <p className="leading-none font-medium">{menu.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanItemListTitle;
