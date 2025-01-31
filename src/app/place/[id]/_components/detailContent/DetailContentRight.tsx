import DetailContentText from './DetailContentText'

type DetailContentRightProps = {
  contentList: string[]
  data: {
    title: string
    addr1: string
    addr2: string
    homepage: string
  }
}

const DetailContentRight = ({ contentList, data }: DetailContentRightProps) => {
  return (
    <div className="flex items-center">
      <div className="mr-[80px] flex flex-col items-start justify-start gap-[20px]">
        {contentList.slice(3, 5).map((content, index) => (
          <DetailContentText key={index} cType="title" title={content} />
        ))}
      </div>
      <div className="flex flex-col items-start gap-[20px]">
        <DetailContentText cType="content" title={`${data.addr1} ${data.addr2}`} />
        <div className="flex h-[33px] items-center">
          {data.homepage && <DetailContentText cType="content" title={data.title} />}
          &nbsp;&nbsp;
          <p
            className="text-[20px] font-medium leading-none underline"
            dangerouslySetInnerHTML={{
              __html: data.homepage ? data.homepage : '-',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailContentRight
