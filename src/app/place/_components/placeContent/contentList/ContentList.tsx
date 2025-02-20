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
    <>
      {tourList.map((item) => (
        <ContentItem
          href={`/place/${item.contentid}t${item.contenttypeid}`}
          key={item.contentid}
          src={item.firstimage ? item.firstimage : "/images/no_image.png"}
          title={item.title}
          content="dddd"
        />
      ))}
    </>
  );
};

export default ContentList;
