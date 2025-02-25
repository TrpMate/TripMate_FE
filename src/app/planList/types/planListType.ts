export type PlanCreateButtonProps = {
  link: string;
  title: string;
};

export type PlanListMenuButtonProps = {
  isOpen: number;
  setIsOpen: (id: number) => void;
};

export type PlanItem = {
  courseName: string;
  createdAt: string;
  endDate: string;
  id: number;
  public: boolean;
  startDate: string;
  updatedAt: string;
};

export type PlanListItemProps = {
  item: PlanItem;
  onClick: () => void;
};

export type PlanDetailDateBarProps = {
  date: string;
};

export type PlanDetailDayListProps = {
  day: string;
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
};

export type PlanDetailNumberProps = {
  number: number;
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
};
