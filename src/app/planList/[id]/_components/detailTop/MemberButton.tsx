import Link from "next/link";

const MemberButton = () => {
  return (
    <Link
      href={"/"}
      className="py-[16.5px] px-[39px] rounded-[30px] border border-[#CCCCCC]"
    >
      <div className="flex items-center h-[25px]">
        <p className="text-[20px] font-medium">맴버 관리</p>
      </div>
    </Link>
  );
};

export default MemberButton;
