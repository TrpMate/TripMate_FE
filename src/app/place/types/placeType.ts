import { MainItemListProps } from "@/app/main/types/mainType";
import { Dispatch, Ref, SetStateAction } from "react";

export type getDetailDataProps = {
  data: {
    contentId: number;
    contentTypeId: number;
  };
};

export type PlaceBannerProps = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  setListType: Dispatch<SetStateAction<number>>;
  onClick: () => void;
};

export type ContentItemProps = {
  href: string;
  src: string;
  title: string;
  content: string;
};

export type ContentListProps = {
  tourList: MainItemListProps[];
};

export type ItemIconProps = {
  number: number;
};

export type DropListProps = {
  rankingName: { name: string; value: string };
  setRankingName: (value: { name: string; value: string }) => void;
  numOfRowName: { name: string; value: number };
  setNumOfRowName: (value: { name: string; value: number }) => void;
};

export type DropDownProps = {
  dropOpen: boolean;
  type: "ranking" | "numOfRow";
  onClick: () => void;
  title: string;
};

export type DropItemProps = {
  type: "ranking" | "numOfRow";
  name?: string;
  list: { id: number; name: string }[];
  onClick: (name: string) => () => void;
};

export type MenuListProps = {
  ref: Ref<HTMLDivElement>;
  numOfRowOpen?: boolean;
  numOfRowName?: string;
  rankingName?: string;
  setNumOfRowOpen?: (open: boolean) => void;
  setRankingOpen?: (open: boolean) => void;
  setRankingName?: (value: { name: string; value: string }) => void;
  setNumOfRowName?: (value: { name: string; value: number }) => void;
};
