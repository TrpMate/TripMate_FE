export type PlanDetailModalProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export type PlanModalTitleProps = {
  onClick: () => void;
};

export type PlanModalSelectProps = {
  data: {
    name: string;
    address: string;
    phone: string;
  };
  onClick: () => void;
};
