'use client'

import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import Skeleton from './Skeleton'
import { getData } from '../_api'

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

  const getListData = async () => {
    try {
      setIsLoading(true)
      const data = await getData({ numOfRows: 4, pageNo: 1, keyword: '서울', arrange: 'A' })
      if (data.status === 200) {
        setTourList(data.data.response.body.items.item)
        setIsLoading(false)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getListData()
  }, [])

  if (isLoading)
    return (
      <div className="mt-[111px] flex w-full flex-wrap justify-center gap-[40px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
        ;
      </div>
    )

  return (
    <div className="mt-[111px] flex w-full flex-wrap justify-center gap-[40px]">
      {tourList.map((item) => (
        <MenuItem key={item.contentid} item={item} />
      ))}
    </div>
  )
}

export default MainItemList
