import Link from 'next/link'

const Footer = () => {
  return (
    <div className="h-[170px] bg-[#F1F1F1] px-[30px] py-[40px]">
      <div>
        <p className="text-[22px] font-bold leading-[27px]">TripMate</p>
        <Link href="/">
          <p className="mt-[20px] text-[16px] font-bold leading-[20px]">
            이용약관 | 개인정보처리방침
          </p>
        </Link>
        <p className="mt-[6px] text-[14px] font-bold leading-[17px] text-[#AAAAAA]">
          Copyright © 2024 TripMate All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
