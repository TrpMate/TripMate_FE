import { Ref } from "react";

export type ParamsType = {
  numOfRows: number;
  pageNo: number;
  keyword?: string;
  arrange: string;
  contentTypeId?: number;
};

export type CategoriesProps = {
  categoryName: string;
  onClick: () => void;
};

export type CloseButtonProps = {
  searchText: string;
  onClick: () => void;
};

export type MainSearchProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  onClick: () => void;
  setListType?: (listType: number) => void;
};

export type MainSearchInputProps = {
  searchText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  closeOnClick: () => void;
  searchOnClick: () => void;
};

export type SearchButtonProps = {
  onClick: () => void;
};

export type SearchMenuListProps = {
  ref: Ref<HTMLDivElement>;
  setCategoryName: (name: string) => void;
  setMenuOpen: (open: boolean) => void;
  setListType?: (listType: number) => void;
};

export type MainItemListProps = {
  addr1: string;
  addr2: string;
  areacode: number;
  booktour: number;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: number;
  contenttypeid: number;
  cpyrhtDivCd: string;
  createdtime: number;
  firstimage: string;
  firstimage2: string;
  mapx: number;
  mapy: number;
  mlevel: number;
  modifiedtime: number;
  sigungucode: number;
  tel: string;
  title: string;
};

export type MenuItemProps = {
  item: MainItemListProps;
};

export type MoreButtonProps = {
  listType: number;
  searchText: string;
};

export type SkeletonType = {
  length: number;
  skeletonType: "main" | "place";
};

export type TripCreateButtonProps = {
  title: string;
  buttonPosition: string;
  link: string;
};

export type TripTitleProps = {
  title: string;
  link: string;
};
