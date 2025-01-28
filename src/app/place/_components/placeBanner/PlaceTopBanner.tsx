import Image from 'next/image'
import PlaceBannerTitle from './PlaceBannerTitle'

const PlaceTopBanner = () => {
  return (
    <div>
      <div className="relative flex h-[370px] w-full justify-center overflow-hidden">
        <div className="flex flex-col items-center pb-[85px] pt-[100px]">
          <PlaceBannerTitle />
        </div>
        <Image
          src={'/images/area_bg.png'}
          fill
          sizes="1"
          alt="배너이미지"
          className="-z-10"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  )
}

export default PlaceTopBanner
