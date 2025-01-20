type SearchMenuListProps = {
  setCategoryName: (name: string) => void
  setMenuOpen: (open: boolean) => void
  setListType?: (listType: number) => void
}

const SearchMenuList = ({ setCategoryName, setMenuOpen, setListType }: SearchMenuListProps) => {
  const CategoryList = [
    { name: '관광지', code: 12 },
    { name: '문화시설', code: 14 },
    { name: '축제공연행사', code: 15 },
    { name: '여행코스', code: 25 },
    { name: '레포츠', code: 28 },
    { name: '숙박', code: 32 },
    { name: '쇼핑', code: 38 },
    { name: '음식점', code: 39 },
  ]
  return (
    <div className="absolute top-[60px] z-20 flex w-[160px] flex-col items-center rounded-[20px] border bg-white py-3">
      {CategoryList.map((category) => (
        <div
          className="cursor-pointer py-[6px] font-medium"
          key={category.code}
          onClick={() => {
            setCategoryName(category.name)
            setMenuOpen(false)
            setListType && setListType(category.code)
          }}
        >
          {category.name}
        </div>
      ))}
    </div>
  )
}

export default SearchMenuList
