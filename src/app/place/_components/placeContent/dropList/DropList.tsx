import { useState } from "react";
import DropDown from "./dropMenu/DropDown";
import MenuList from "./dropMenu/MenuList";

type DropListProps = {
  rankingName: { name: string; value: string };
  setRankingName: (value: { name: string; value: string }) => void;
  numOfRowName: { name: string; value: number };
  setNumOfRowName: (value: { name: string; value: number }) => void;
};

const DropList = ({
  rankingName,
  setRankingName,
  numOfRowName,
  setNumOfRowName,
}: DropListProps) => {
  const [numOfRowOpen, setNumOfRowOpen] = useState(false);
  const [rankingOpen, setRankingOpen] = useState(false);

  return (
    <div className="w-full flex gap-[10px] justify-end items-center z-10">
      <div className="relative">
        <DropDown
          type="ranking"
          title={rankingName.name}
          onClick={() => setRankingOpen(!rankingOpen)}
        />
        {rankingOpen && (
          <MenuList
            setRankingOpen={setRankingOpen}
            rankingOpen={rankingOpen}
            setRankingName={setRankingName}
            rankingName={rankingName.name}
          />
        )}
      </div>
      <div className="relative">
        <DropDown
          type="numOfRow"
          title={numOfRowName.name}
          onClick={() => setNumOfRowOpen(!numOfRowOpen)}
        />
        {numOfRowOpen && (
          <MenuList
            setNumOfRowOpen={setNumOfRowOpen}
            numOfRowOpen={numOfRowOpen}
            setNumOfRowName={setNumOfRowName}
            numOfRowName={numOfRowName.name}
          />
        )}
      </div>
    </div>
  );
};

export default DropList;
