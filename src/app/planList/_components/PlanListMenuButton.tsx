'use client'

import { useState } from 'react'

const PlanListMenuButton = () => {
  const [isClicked, setIsClicked] = useState(0)
  const buttonList = [
    { id: 1, name: '내 정보' },
    { id: 2, name: '내 플랜 보기' },
    { id: 3, name: '문의' },
  ]
  return (
    <div className="flex items-center justify-center gap-[10px] pt-[30px]">
      {buttonList.map((button) => (
        <div
          key={button.id}
          className={`rounded-[30px] border ${
            isClicked === button.id ? 'border-[#AED400] bg-[#FBFFE6]' : 'border-[#CCCCCC] bg-white'
          } cursor-pointer px-[19px] py-[10.5px]`}
          onClick={() => setIsClicked(button.id)}
        >
          <div className="flex h-[20px] items-center">
            <p
              className={`leading-none ${isClicked === button.id ? 'text-[#AED400]' : 'text-black'}`}
            >
              {button.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlanListMenuButton
