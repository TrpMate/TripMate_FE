import ContentItem from "./ContentItem";

type ContentListProps = {
  tourList: {
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
  }[];
};

const ContentList = ({ tourList }: ContentListProps) => {
  return (
    <div className="w-full pt-[40px] pb-[150px] flex justify-center items-center gap-[40px] flex-wrap">
      {tourList.map((item) => (
        <ContentItem
          key={item.contentid}
          src={item.firstimage ? item.firstimage : "/images/no_image.png"}
          title={item.title}
          content="dddd"
        />
      ))}
    </div>
  );
};

export default ContentList;
