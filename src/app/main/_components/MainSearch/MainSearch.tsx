'use client'

import { useState } from 'react'
import Categories from './Categories'
import CloseButton from './CloseButton'
import MainSearchInput from './MainSearchInput'
import SearchButton from './SearchButton'
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

  return (
    <div className="relative flex h-[60px] items-center rounded-[10px] border-[2px] border-[#353535] bg-white py-[13px] pr-[12px]">
      <Categories categoryName={categoryName} onClick={() => setMenuOpen(!menuOpen)} />
      <div className="h-full w-[1px] bg-[#CCCCCC]" />
      <MainSearchInput searchText={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <CloseButton
        searchText={searchText}
        onClick={() => {
          if (searchText === '') return
          setSearchText('')
        }}
      />
      <SearchButton onClick={onClick} />
      {menuOpen && (
        <SearchMenuList
          setListType={setListType}
          setCategoryName={setCategoryName}
          setMenuOpen={setMenuOpen}
        />
      )}
    </div>
  )
}

export default MainSearch
