import Link from "next/link";

type PlanCreateButtonProps = {
  link: string;
  title: string;
};

const PlanCreateButton = ({ link, title }: PlanCreateButtonProps) => {
  return (
    <div className="w-full pt-[30px] flex justify-end">
      <Link href={link}>
        <div className="rounded-[30px] border border-[#CCCCCC] px-[39px] py-[16.5px]">
          <div className="flex items-center h-[25px]">
            <p className="text-[20px] leading-none">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlanCreateButton;
