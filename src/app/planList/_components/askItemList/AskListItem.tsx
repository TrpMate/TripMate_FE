import Link from "next/link";

const AskListItem = () => {
  return (
    <Link
      href={"/"}
      className="border-y h-[56px] flex justify-between items-center pr-[30px]"
    >
      <div className="flex items-center gap-[40.08px]">
        <div className="flex items-center justify-end w-[27.05px]">
          <p className="font-medium text-[#353535] leading-none">{1}</p>
        </div>
        <div className="w-[464.93px] h-[20px] flex items-center ">
          <p className="font-medium text-[#353535] leading-none">sdsdsds</p>
        </div>
      </div>
      <div className="flex items-center gap-[29.75px]">
        <div className="w-[123.25px] h-[20px] flex items-center justify-center">
          <p className="text-[#AAAAAA] font-medium leading-none text-nowrap">
            2025.01.01 13:00
          </p>
        </div>
        <div className="w-[56px] flex justify-center items-center">
          <p className="text-[#D47C00]">확인중</p>
        </div>
      </div>
    </Link>
  );
};

export default AskListItem;
