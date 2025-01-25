import Position from '@/components/ui/svg/Position'
import Image from 'next/image'
import Link from 'next/link'

type MenuItemProps = {
  item: {
    addr1: string
    addr2: string
    areacode: number
    booktour: number
    cat1: string
    cat2: string
    cat3: string
    contentid: number
    contenttypeid: number
    cpyrhtDivCd: string
    createdtime: number
    firstimage: string
    firstimage2: string
    mapx: number
    mapy: number
    mlevel: number
    modifiedtime: number
    sigungucode: number
    tel: string
    title: string
  }
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Link href={`/place/${item.contentid}t${item.contenttypeid}`}>
      <div className="relative h-[500px] w-[330px] overflow-hidden rounded-[20px]">
        <Image
          src={item.firstimage ? item.firstimage : '/images/no_image.jpg'}
          style={{ objectFit: 'cover' }}
          fill
          sizes="1"
          alt="메뉴 이미지"
        />
      </div>
      <div className="mt-[20px] w-full max-w-[330px]">
        <p className="text-[22px] font-extrabold">{item.title}</p>
        <div className="flex items-center">
          <Position />
          <p className="ml-[4px] truncate text-[16px] font-medium">{`${item.addr1} ${item.addr2}`}</p>
        </div>
      </div>
    </Link>
  )
}

export default MenuItem
