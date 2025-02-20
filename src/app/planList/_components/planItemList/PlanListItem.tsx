import PlanListDelete from "@/utils/svg/PlanListDelete";
import Link from "next/link";
import { PlanItem } from "./PlanItemList";

type PlanListItemProps = {
  item: PlanItem;
  onClick: () => void;
};

const PlanListItem = ({ item, onClick }: PlanListItemProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16).replace("T", " ").replace(/-/g, ".");
  };
  const formattedDate = formatDate(item.createdAt);

  return (
    <div className="border-y h-[56px] flex items-center gap-[40px] pr-[20.04px]">
      <Link
        href={{
          pathname: `/planList/${item.id}
        `,
          query: { day: item.startDate },
        }}
        className="w-full flex items-center gap-[40px] border-[#EEEEEE]"
      >
        <div className="flex items-center justify-end w-[27.05px]">
          <p className="font-medium text-[#353535] leading-none">{item.id}</p>
        </div>
        <div className="w-[464.93px] h-[20px] flex items-center">
          <p className="font-medium text-[#353535] leading-none">
            {item.courseName}
          </p>
        </div>
        <div className="w-[180.36px] h-[20px] flex items-center justify-center">
          <p className="font-medium text-[#353535] leading-none text-nowrap">
            {item.startDate} - {item.endDate}
          </p>
        </div>
        <div className="w-[123.25px] h-[20px] flex items-center justify-center">
          <p className="text-[#AAAAAA] font-medium leading-none text-nowrap">
            {formattedDate}
          </p>
        </div>
      </Link>
      <div className="cursor-pointer " onClick={onClick}>
        <PlanListDelete />
      </div>
    </div>
  );
};

export default PlanListItem;
