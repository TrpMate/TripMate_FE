type DetailTopTitleProps = {
  data: {
    title: string;
    addr1: string;
  };
};

const DetailTopTitle = ({ data }: DetailTopTitleProps) => {
  return (
    <div className="py-[100px] flex flex-col justify-center items-center">
      <div className="h-[70px] flex items-center justify-center">
        <p className="text-[56px] leading-none font-medium">{data.title}</p>
      </div>
      <div className="mt-[10px] flex justify-center items-center h-[25px]">
        <p className="text-[20px] text-[#AAAAAA] leading-none">{data.addr1}</p>
      </div>
      <div className="mt-10 rounded-[30px] py-[17.5px] px-10 border border-[#CCCCCC] flex items-center justify-center">
        <div className="flex justify-center items-center h-[25px]">
          <p className="text-[20px] leading-none">내 플랜에 추가하기 +</p>
        </div>
      </div>
    </div>
  );
};

export default DetailTopTitle;
