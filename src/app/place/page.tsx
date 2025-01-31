'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { getData } from '../main/_api'
import Skeleton from '../main/_components/Skeleton'
import PlaceBanner from './_components/placeBanner/PlaceBanner'
import ContentList from './_components/placeContent/contentList/ContentList'
import DropList from './_components/placeContent/dropList/DropList'

const PlacePageContent = () => {
  const params = useSearchParams()
  const [tourList, setTourList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [listType, setListType] = useState(Number(params.get('ct')) || 12)
  const [keyword, setKeyword] = useState(params.get('kd')?.toString() ?? '')
  const [rankingName, setRankingName] = useState({
    name: '제목순',
    value: 'A',
  })
  const [numOfRowName, setNumOfRowName] = useState({
    name: '8개씩 보기',
    value: 8,
  })

  const getTourList = async () => {
    try {
      setIsLoading(true)
      const data = await getData({
        keyword: keyword,
        arrange: rankingName.value,
        numOfRows: numOfRowName.value,
        pageNo: 1,
        contentTypeId: listType,
      })
      setIsLoading(false)
      setTourList(data ?? [])
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTourList()
  }, [rankingName, numOfRowName])

  return (
    <div className="pt-[100px]">
      <PlaceBanner
        keyword={keyword}
        setKeyword={setKeyword}
        setListType={setListType}
        onClick={getTourList}
      />
      <div className="flex w-full justify-center px-[30px]">
        <div className="flex w-[1440px] flex-col items-center justify-center pt-[40px] max-[1515px]:w-[1070px] max-[1146px]:w-[700px] max-[776px]:w-[330px]">
          <DropList
            rankingName={rankingName}
            setRankingName={setRankingName}
            numOfRowName={numOfRowName}
            setNumOfRowName={setNumOfRowName}
          />
          <div className="flex flex-wrap items-center justify-start gap-[40px] pb-[150px] pt-[40px]">
            {isLoading ? (
              <Skeleton length={8} skeletonType="place" />
            ) : (
              <ContentList tourList={tourList} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const PlacePage = () => {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <PlacePageContent />
    </Suspense>
  )
}

export default PlacePage
