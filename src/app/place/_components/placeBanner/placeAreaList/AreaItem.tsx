type AreaItemProps = {
  isClick: number;
  index: number;
  onClick: () => void;
  item: {
    name: string;
  };
};

const AreaItem = ({ isClick, index, onClick, item }: AreaItemProps) => {
  return (
    <div
      className={`w-[60px] h-[60px] flex justify-center items-center rounded-full cursor-pointer ${
        isClick === index ? "bg-[#353535]" : "bg-white"
      }`}
      onClick={onClick}
    >
      <p
        className={`${isClick === index ? "text-[#AED400]" : "text-[#353535]"}`}
      >
        {item.name}
      </p>
    </div>
  );
};

export default AreaItem;
