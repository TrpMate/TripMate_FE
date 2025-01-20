import Position from '@/components/ui/svg/Position'
import React from 'react'

const Skeleton = () => {
  return (
    <div>
      <div className="relative h-[500px] w-[330px] overflow-hidden rounded-[20px] bg-gray-200"></div>
      <div className="mt-[20px]">
        <p className="h-[40px] w-[200px] bg-gray-200 text-[22px] font-extrabold"></p>
        <div className="mt-2 flex items-center">
          <Position />
          <p className="ml-[4px] h-[20px] w-[300px] bg-gray-200 text-[16px] font-medium"></p>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
