import React from 'react'

type MainSearchInputProps = {
  searchText: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const MainSearchInput = ({ searchText, onChange, onKeyDown }: MainSearchInputProps) => {
  return (
    <input
      type="text"
      value={searchText}
      className="w-[373px] pl-[16px] text-[18px] font-medium outline-none"
      placeholder="검색어를 입력하세요"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default MainSearchInput
