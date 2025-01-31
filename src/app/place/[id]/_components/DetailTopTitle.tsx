type DetailTopTitleProps = {
  data: {
    title: string
    addr1: string
  }
}

const DetailTopTitle = ({ data }: DetailTopTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-[100px]">
      <div className="flex h-[70px] items-center justify-center">
        <p className="text-[56px] font-medium leading-none">{data.title}</p>
      </div>
      <div className="mt-[10px] flex h-[25px] items-center justify-center">
        <p className="text-[20px] leading-none text-[#AAAAAA]">{data.addr1}</p>
      </div>
      <div className="mt-10 flex items-center justify-center rounded-[30px] border border-[#CCCCCC] px-10 py-[17.5px]">
        <div className="flex h-[25px] items-center justify-center">
          <p className="text-[20px] leading-none">내 플랜에 추가하기 +</p>
        </div>
      </div>
    </div>
  )
}

export default DetailTopTitle
