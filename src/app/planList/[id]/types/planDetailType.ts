export type PlanDetailModalProps = {
  dayId: number;
  setIsOpen: (isOpen: boolean) => void;
  onSave: (newData: {
    courseDayId: number;
    placeName: string;
    category: string;
    contentTypeId: string;
    visitStartTime: string;
    visitEndTime: string;
    mapX: number;
    mapY: number;
    address?: string;
    phoneNumber?: string;
    memo?: string;
  }) => void;
};

export type PlanModalTitleProps = {
  title: string;
  onClick: () => void;
};

export type PlanModalSelectProps = {
  data: {
    courseDayId: number;
    placeName: string;
    category: string;
    contentTypeId: string;
    visitStartTime: string;
    visitEndTime: string;
    mapX: number;
    mapY: number;
    address?: string;
    phoneNumber?: string;
    memo?: string;
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
  courseData: {
    courseDayId: number;
    placeName: string;
    category: string;
    contentTypeId: string;
    visitStartTime: string;
    visitEndTime: string;
    mapX: number;
    mapY: number;
    address: string;
    phoneNumber: string;
  };
  setCourseData: (data: {
    courseDayId: number;
    placeName: string;
    category: string;
    contentTypeId: string;
    visitStartTime: string;
    visitEndTime: string;
    mapX: number;
    mapY: number;
    address: string;
    phoneNumber: string;
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
