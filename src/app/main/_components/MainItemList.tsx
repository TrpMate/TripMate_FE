'use client'

import { useEffect, useState } from 'react'
import { getData } from '../_api'
import MainSearch from './MainSearch/MainSearch'
import MenuItem from './MenuItem'
import Skeleton from './Skeleton'

type MainItemListProps = {
  addr1: string
  addr2: string
  areacode: number
  booktour: number
  cat1: string
  cat2: string
  cat3: string
  contentid: number
  contenttypeid: number
  cpyrhtDivCd: string
  createdtime: number
  firstimage: string
  firstimage2: string
  mapx: number
  mapy: number
  mlevel: number
  modifiedtime: number
  sigungucode: number
  tel: string
  title: string
}

const MainItemList = () => {
  const [tourList, setTourList] = useState<MainItemListProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [listType, setListType] = useState(12)
  const [searchText, setSearchText] = useState('')
  const getTourList = async () => {
    try {
      setIsLoading(true)
      const data = await getData({
        keyword: searchText,
        arrange: 'A',
        numOfRows: 4,
        pageNo: 1,
        contentTypeId: listType,
      })
      setIsLoading(false)
      setTourList(data.response.body.items.item ?? [])
      console.log(data.response.body.items.item)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTourList()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[90px] flex justify-center bg-white">
        <MainSearch
          searchText={searchText}
          setSearchText={setSearchText}
          setListType={setListType}
          onClick={getTourList}
        />
      </div>
      {isLoading ? (
        <div className="mt-[111px] flex flex-wrap justify-center gap-[40px]">
          <Skeleton />
        </div>
      ) : (
        <div className="w-full">
          <div className="mt-[111px] flex flex-wrap justify-center gap-[40px]">
            {tourList.map((item) => (
              <MenuItem key={item.contentid} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MainItemList
