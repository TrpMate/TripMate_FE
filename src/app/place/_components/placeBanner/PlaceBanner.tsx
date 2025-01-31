import MainSearch from '@/app/main/_components/MainSearch/MainSearch'
import { Dispatch, SetStateAction } from 'react'
import PlaceTopBanner from './PlaceTopBanner'

type PlaceBannerProps = {
  keyword: string
  setKeyword: Dispatch<SetStateAction<string>>
  setListType: Dispatch<SetStateAction<number>>
  onClick: () => void
}

const PlaceBanner = ({ keyword, setKeyword, setListType, onClick }: PlaceBannerProps) => {
  return (
    <div className="relative">
      <PlaceTopBanner />
      <div className="absolute top-0 flex size-full justify-center">
        <div className="pt-[225px]">
          <MainSearch
            searchText={keyword}
            setSearchText={setKeyword}
            setListType={setListType}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}

export default PlaceBanner
