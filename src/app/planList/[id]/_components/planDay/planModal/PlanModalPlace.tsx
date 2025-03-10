import H22Title from "@/components/subTitle/H22Title";
import { placeList } from "@/utils/Menu";
import { useState } from "react";

const PlanModalPlace = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="mt-10">
      <H22Title title="분류 선택" />
      <div className="mt-5 flex items-center gap-2">
        {placeList.map((place) => (
          <div
            key={place.id}
            className={`px-[19px] py-[10px] border ${
              selectedItem === place.name
                ? "border-[#AED400] bg-[#FBFFE6]"
                : "border-[#CCCCCC] bg-white"
            } rounded-[30px] cursor-pointer`}
            onClick={() => setSelectedItem(place.name)}
          >
            <div className="flex items-center h-5 ">
              <p
                className={`${
                  selectedItem === place.name
                    ? "text-[#AED400]"
                    : "text-[#353535]"
                }`}
              >
                {place.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanModalPlace;
