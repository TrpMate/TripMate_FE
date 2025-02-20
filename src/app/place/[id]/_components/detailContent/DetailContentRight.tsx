import DetailContentText from "./DetailContentText";

type DetailContentRightProps = {
  contentList: string[];
  data: {
    title: string;
    addr1: string;
    addr2: string;
    homepage: string;
  };
};

const DetailContentRight = ({ contentList, data }: DetailContentRightProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-[20px] items-start justify-start mr-[80px]">
        {contentList.slice(3, 5).map((content, index) => (
          <DetailContentText key={index} cType="title" title={content} />
        ))}
      </div>
      <div className="flex flex-col gap-[20px] items-start">
        <DetailContentText
          cType="content"
          title={`${data.addr1} ${data.addr2}`}
        />
        <div className="flex items-center h-[33px]">
          {data.homepage && (
            <DetailContentText cType="content" title={data.title} />
          )}
          &nbsp;&nbsp;
          <p
            className="text-[20px] leading-none font-medium underline"
            dangerouslySetInnerHTML={{
              __html: data.homepage ? data.homepage : "-",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailContentRight;
