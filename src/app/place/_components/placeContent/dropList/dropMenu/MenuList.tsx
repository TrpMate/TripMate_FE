import DropItem from "./DropItem";

type MenuListProps = {
  rankingOpen?: boolean;
  numOfRowOpen?: boolean;
  numOfRowName?: string;
  rankingName?: string;
  setNumOfRowOpen?: (open: boolean) => void;
  setRankingOpen?: (open: boolean) => void;
  setRankingName?: (value: { name: string; value: string }) => void;
  setNumOfRowName?: (value: { name: string; value: number }) => void;
};

const MenuList = ({
  rankingOpen,
  numOfRowOpen,
  numOfRowName,
  rankingName,
  setRankingOpen,
  setNumOfRowOpen,
  setRankingName,
  setNumOfRowName,
}: MenuListProps) => {
  const numOfRowList = [
    { id: 1, name: "8개씩 보기", value: 8 },
    { id: 2, name: "40개씩 보기", value: 40 },
    { id: 3, name: "100개씩 보기", value: 100 },
  ];

  const rankingList = [
    { id: 1, name: "제목순", value: "A" },
    { id: 2, name: "수정일순", value: "C" },
    { id: 3, name: "생성일순", value: "D" },
  ];

  return (
    <div className="absolute top-[70px]">
      {numOfRowOpen ? (
        <DropItem
          type="numOfRow"
          name={numOfRowName!}
          list={numOfRowList}
          onClick={(name) => {
            return () => {
              setNumOfRowName!({
                name: numOfRowList.find((item) => item.name === name)!.name,
                value: numOfRowList.find((item) => item.name === name)!.value,
              });
              setNumOfRowOpen!(false);
            };
          }}
        />
      ) : (
        <DropItem
          type="ranking"
          name={rankingName!}
          list={rankingList}
          onClick={(name) => {
            return () => {
              setRankingName!({
                name: rankingList.find((item) => item.name === name)!.name,
                value: rankingList.find((item) => item.name === name)!.value,
              });
              setRankingOpen!(false);
            };
          }}
        />
      )}
    </div>
  );
};

export default MenuList;
