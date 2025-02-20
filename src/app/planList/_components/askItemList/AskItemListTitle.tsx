const AskItemListTitle = () => {
  const listMenuTitle = [
    {
      id: 1,
      title: "제목",
      mr: "pr-[469px]",
    },
    {
      id: 2,
      title: "작성일",
      mr: "pr-[84px]",
    },
    {
      id: 3,
      title: "상태",
      mr: "pr-0",
    },
  ];
  return (
    <div className="w-full border-t-[2px] border-[#353535] border-b border-b-[#EEEEEE]">
      <div className="w-full h-[56px] bg-[#FCFFF2] flex items-center pl-[305px] pr-[44px]">
        {listMenuTitle.map((menu) => (
          <div
            key={menu.id}
            className={`flex justify-center items-center ${menu.mr} `}
          >
            <p className="leading-none font-medium">{menu.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskItemListTitle;
