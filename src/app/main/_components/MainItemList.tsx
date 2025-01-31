'use client'

import { useEffect, useState } from 'react'
import { getData } from '../_api'
import MainSearch from './MainSearch/MainSearch'
import MenuItem from './MenuItem'
import MoreButton from './MoreButton'
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
      setTourList(data ?? [])
      console.log(data)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTourList()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[90px] flex justify-center bg-white">
          <MainSearch
            searchText={searchText}
            setSearchText={setSearchText}
            setListType={setListType}
            onClick={getTourList}
          />
        </div>
        <div className="mt-[111px] flex w-[1440px] flex-wrap justify-start gap-[40px] max-[1460px]:w-[1070px] max-[1090px]:w-[700px] max-[720px]:w-[330px]">
          {isLoading ? (
            <Skeleton length={4} skeletonType="main" />
          ) : (
            tourList.map((item) => <MenuItem key={item.contentid} item={item} />)
          )}
        </div>
      </div>
      <MoreButton listType={listType} searchText={searchText} />
    </>
  )
}

export default MainItemList
