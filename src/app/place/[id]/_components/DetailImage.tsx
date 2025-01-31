import Image from 'next/image'
type DetailImageProps = {
  image: string
}

const DetailImage = ({ image }: DetailImageProps) => {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={image ? image : '/images/detail_no_image.png'}
        fill
        sizes="1"
        style={{ objectFit: 'cover' }}
        alt="디테일 이미지"
        priority
      />
    </div>
  )
}

export default DetailImage
