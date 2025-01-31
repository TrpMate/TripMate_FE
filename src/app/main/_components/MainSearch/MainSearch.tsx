'use client'

import { useOnclickOutside } from '@/hooks/useOnClickOutSide'
import { useRef, useState } from 'react'
import Categories from './Categories'
import MainSearchInput from './MainSearchInput'
import SearchMenuList from './SearchMenuList'

type MainSearchProps = {
  searchText: string
  setSearchText: (text: string) => void
  onClick: () => void
  setListType?: (listType: number) => void
}

const MainSearch = ({ searchText, setSearchText, onClick, setListType }: MainSearchProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoryName, setCategoryName] = useState('카테고리')
  const categoryRef = useRef<HTMLDivElement>(null)

  useOnclickOutside(categoryRef, () => {
    setMenuOpen(false)
  })

  return (
    <div className="relative flex h-[60px] items-center rounded-[10px] border-[2px] border-[#353535] bg-white py-[13px] pr-[12px]">
      {menuOpen && <div className="absolute top-0 z-10 h-[60px] w-full cursor-pointer" />}
      <Categories categoryName={categoryName} onClick={() => setMenuOpen(true)} />
      <div className="h-full w-[1px] bg-[#CCCCCC]" />
      <MainSearchInput
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClick()
          }
        }}
        closeOnClick={() => {
          if (searchText === '') return
          setSearchText('')
        }}
        searchOnClick={onClick}
      />
      {menuOpen && (
        <SearchMenuList
          ref={categoryRef}
          setListType={setListType}
          setCategoryName={setCategoryName}
          setMenuOpen={setMenuOpen}
        />
      )}
    </div>
  )
}

export default MainSearch
