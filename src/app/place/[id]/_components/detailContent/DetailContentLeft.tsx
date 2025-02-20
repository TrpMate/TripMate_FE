import DetailContentText from "./DetailContentText";

type DetailContentLeftProps = {
  contentList: string[];
  data: {
    addr1: string;
    telname: string;
    tel: string;
    title: string;
  };
};

const DetailContentLeft = ({ contentList, data }: DetailContentLeftProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-[20px] items-start justify-start mr-[54px]">
        {contentList.slice(0, 3).map((content, index) => (
          <DetailContentText key={index} cType="title" title={content} />
        ))}
      </div>
      <div className="flex flex-col gap-[20px] items-start">
        <DetailContentText cType="content" title={data.title} />
        <DetailContentText
          cType="content"
          title={data.telname || data.tel ? `${data.telname} ${data.tel}` : "-"}
        />
        <DetailContentText cType="content" title={data.addr1} />
      </div>
    </div>
  );
};

export default DetailContentLeft;
