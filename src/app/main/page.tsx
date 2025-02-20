import TopBanner from "../../components/topBanner/TopBanner";
import MainBackground from "./_components/MainBackground";
import MainItemList from "./_components/MainItemList";

const MainPage = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <MainBackground />
      <TopBanner />
      <MainItemList />
    </div>
  );
};

export default MainPage;
