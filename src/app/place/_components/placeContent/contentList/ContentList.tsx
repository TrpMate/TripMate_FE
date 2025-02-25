import { ContentListProps } from "@/app/place/types/placeType";
import ContentItem from "./ContentItem";

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
