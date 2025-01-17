import CategoryDownArrow from '@/components/ui/svg/CategoryDownArrow'
import React from 'react'

type CategoriesProps = {
  categoryName: string
  onClick: () => void
}

const Categories = ({ categoryName, onClick }: CategoriesProps) => {
  return (
    <div
      className="relative flex cursor-pointer items-center pl-[22px] pr-[10px]"
      onClick={onClick}
    >
      <p className="mr-[33px] text-[20px] font-medium">{categoryName}</p>
      <CategoryDownArrow />
    </div>
  )
}

export default Categories
