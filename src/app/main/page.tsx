import MainBackground from './_components/MainBackground'
import MainItemList from './_components/MainItemList'
import MoreButton from './_components/MoreButton'
import TopBanner from './_components/TopBanner'

const MainPage = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <MainBackground />
      <TopBanner />
      <MainItemList />
      <MoreButton />
    </div>
  )
}
export default MainPage
