import { planList } from "@/utils/Menu";
import { useState } from "react";
import AreaItem from "./AreaItem";

type PlaceAreaListProps = {
  setMenuName: (name: string) => void;
};

const PlaceAreaList = ({ setMenuName }: PlaceAreaListProps) => {
  const [isClick, setIsClick] = useState(0);
  return (
    <div className="mt-[40px] flex gap-[10px]">
      {planList.map((item, index) => (
        <AreaItem
          key={index}
          index={index}
          item={item}
          isClick={isClick}
          onClick={() => {
            setIsClick(index);
            setMenuName(item.name);
          }}
        />
      ))}
    </div>
  );
};

export default PlaceAreaList;
