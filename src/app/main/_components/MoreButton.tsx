import Link from 'next/link'

type MoreButtonProps = {
  listType: number
  searchText: string
}

const MoreButton = ({ listType, searchText }: MoreButtonProps) => {
  return (
    <div className="mb-[107px] mt-[60px] flex justify-center">
      <Link
        href={{
          pathname: '/place',
          query: {
            ct: listType,
            kd: searchText,
          },
        }}
      >
        <div className="self-start rounded-[30px] border px-[36px] py-[18px]">
          <p className="text-[20px] font-medium">여행지 더보기 +</p>
        </div>
      </Link>
    </div>
  )
}

export default MoreButton
