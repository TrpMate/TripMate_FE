type DetailContentTextProps = {
  cType: 'title' | 'content'
  title: string
}

const DetailContentText = ({ cType, title }: DetailContentTextProps) => {
  const cTypeList = {
    title: 'text-[#888888]',
    content: 'text-black',
  }

  return (
    <div className="flex h-[33px] items-center">
      <p
        className={`${cTypeList[cType]} ${
          cType === 'title' ? 'text-nowrap' : 'text-wrap'
        } text-[20px] font-medium leading-none`}
      >
        {title}
      </p>
    </div>
  )
}

export default DetailContentText
