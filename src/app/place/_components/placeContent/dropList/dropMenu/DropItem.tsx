type DropItemProps = {
  type: "ranking" | "numOfRow";
  name?: string;
  list: { id: number; name: string }[];
  onClick: (name: string) => () => void;
};

const DropItem = ({ type, name, list, onClick }: DropItemProps) => {
  const buttonWidth = {
    ranking: "w-[130px]",
    numOfRow: "w-[170px]",
  };
  return (
    <div
      className={`${buttonWidth[type]} border flex flex-col justify-start border-[#CCCCCC] gap-[25px] pl-[19px] rounded-[10px] bg-white py-[28px]`}
    >
      {list.map((item) => (
        <div
          key={item.id}
          className="flex items-center h-[25px]"
          onClick={onClick(item.name)}
        >
          <p
            className={`${
              name === item.name ? "text-[#333333]" : "text-[#CCCCCC]"
            } text-[20px] leading-none font-medium cursor-pointer`}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DropItem;
