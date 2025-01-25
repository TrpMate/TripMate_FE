import PlaceRightArrow from '@/components/ui/svg/PlaceRightArrow'
import Image from 'next/image'
import Link from 'next/link'
import ItemIcon from './ItemIcon'

type ContentItemProps = {
  href: string
  src: string
  title: string
  content: string
}

const ContentItem = ({ href, src, title, content }: ContentItemProps) => {
  return (
    <Link href={href} className="relative w-[330px] overflow-hidden rounded-[30px] border">
      <ItemIcon number={100} />
      <div className="relative h-[360px] w-full">
        <Image
          src={src}
          fill
          className="-z-10 rounded-[30px]"
          sizes="1"
          style={{ objectFit: 'cover' }}
          alt="플레이스 이미지"
        />
      </div>
      <div className="flex items-center justify-between px-[21px] py-[25px]">
        <div className="max-w-[245px]">
          <p className="leading-1 truncate text-[22px] font-medium">{title}</p>
          <p className="leading-1 mt-[5px] text-[14px] font-medium text-[#353535]">{content}</p>
        </div>
        <PlaceRightArrow />
      </div>
    </Link>
  )
}

export default ContentItem
