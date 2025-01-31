import Link from 'next/link'

const PlanCreateButton = () => {
  return (
    <Link href={'/plan'} className="flex w-full justify-end pt-[30px]">
      <div className="rounded-[30px] border border-[#CCCCCC] px-[39px] py-[16.5px]">
        <div className="flex h-[25px] items-center">
          <p className="text-[20px] leading-none">플랜 생성하기</p>
        </div>
      </div>
    </Link>
  )
}

export default PlanCreateButton
