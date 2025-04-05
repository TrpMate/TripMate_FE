export type PlanDetailModalProps = {
  dayId: number;
  setIsOpen: (isOpen: boolean) => void;
};

export type PlanModalTitleProps = {
  title: string;
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

export type PlanModalButtonProps = {
  onClick: () => void;
};

export type PlanSearchModalProps = {
  closeOnClick: () => void;
  searchTitle: string;
  setSearchText: (text: string) => void;
  listType: number;
  setListType: (type: number) => void;
  setListOpen: (isOpen: boolean) => void;
  setData: (data: {
    contentid: string,
    contenttypeid: string,
    name: string,
    address: string,
    phone: string
  }) => void;
};

export type SearchModalImageProps = {
  image: string;
};

export type SearchModalTextProps = {
  item: {
    title: string;
    addr1: string;
    tel: string;
  };
};

export type SearchModalButtonProps = {
  onClick: () => void;
};
