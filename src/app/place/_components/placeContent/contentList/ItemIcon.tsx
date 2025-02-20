import ContentItemIcon from "@/utils/svg/ContentItemIcon";

type ItemIconProps = {
  number: number;
};

const ItemIcon = ({ number }: ItemIconProps) => {
  return (
    <div className="absolute flex items-center gap-1 top-[20px] right-[20px] py-[5px] pl-[13px] pr-[8px] bg-black bg-opacity-10 rounded-[50px]">
      <p className="text-[14px leading-1 font-extrabold] text-white">
        {number}
      </p>
      <ContentItemIcon />
    </div>
  );
};

export default ItemIcon;
