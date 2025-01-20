import React from 'react'

type SearchMenuListProps = {
  setCategoryName: (name: string) => void
  setMenuOpen: (open: boolean) => void
}

const SearchMenuList = ({ setCategoryName, setMenuOpen }: SearchMenuListProps) => {
  const categoryList: any = []
  return (
    <div className="absolute top-[60px] z-20 flex w-[160px] flex-col items-center rounded-[20px] border bg-white py-3">
      {categoryList.map((category: any, index: number) => (
        <div
          className="cursor-pointer py-[6px] font-medium"
          key={index}
          onClick={() => {
            setCategoryName(category.name)
            setMenuOpen(false)
          }}
        >
          {category.name}
        </div>
      ))}
    </div>
  )
}

export default SearchMenuList
