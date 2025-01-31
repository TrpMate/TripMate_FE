const PlanItemListTitle = () => {
  const listMenuTitle = [
    {
      id: 1,
      title: '플랜이름',
      width: 'w-[464.93px]',
    },
    {
      id: 2,
      title: '여행기간',
      width: 'w-[180.36px]',
    },
    {
      id: 3,
      title: '생성일자',
      width: 'w-[123.25px]',
    },
  ]
  return (
    <div className="border-b border-t-2 border-[#353535] border-b-[#EEEEEE]">
      <div className="flex h-[56px] items-center gap-[40.08px] bg-[#FCFFF2] pl-[67.13px] pr-[84.17px]">
        {listMenuTitle.map((menu) => (
          <div key={menu.id} className={`flex items-center justify-center ${menu.width}`}>
            <p className="font-medium leading-none">{menu.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanItemListTitle
