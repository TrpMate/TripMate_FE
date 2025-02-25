import { Dispatch, SetStateAction } from "react";

export type PostPlanProps = {
  planTitle: string;
  startDate: string;
  endDate: string;
};

export type PlanButtonProps = {
  bType?: "create";
  title: string;
};

export type PlanSubTitleProps = {
  cType?: string;
  title: string;
};

export type PlanDataTypes = {
  planTitle: string;
  startDate: string;
  endDate: string;
};

export type PlanCalendarProps = {
  selectedDate: PlanDataTypes;
  setSelectedDate: Dispatch<SetStateAction<PlanDataTypes>>;
  setIsOpen: (isOpen: boolean) => void;
};

export type PlanDateButtonProps = {
  onClick: () => void;
  title: string;
};

export type PlanDateSelectProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedDate: PlanDataTypes;
  setSelectedDate: Dispatch<SetStateAction<PlanDataTypes>>;
  onClick: () => void;
};

export type PlanInputProps = {
  planTitle: string;
  setPlanTitle: (planTitle: string) => void;
};
