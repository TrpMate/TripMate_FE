import Image from 'next/image'
import TripCreateButton from './TripCreateButton'

const TopBanner = () => {
  return (
    <div className="relative h-[600px] w-full">
      <Image src="/images/image.png" fill sizes="1" alt="메인탑이미지" />
      <div className="absolute size-full pt-[255px] text-white">
        <div className="flex w-full justify-center">
          <TripCreateButton
            title="ALONE"
            buttonPosition="left"
            link="https://tripmate-be.shop/oauth2/authorization/naver"
          />
          <div className="mx-[44px] flex flex-col items-center">
            <p className="text-[60px] font-extrabold leading-[75px]">PLAN YOUR TRIP</p>
            <p className="mt-[8px] text-[26px] font-medium leading-[32px]">
              나만의 여행을 계획하세요
            </p>
          </div>
          <TripCreateButton title="TEAM" buttonPosition="right" link="/team" />
        </div>
      </div>
    </div>
  )
}

export default TopBanner
