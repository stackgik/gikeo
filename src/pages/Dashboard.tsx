import Banner from "../features/dashboard/Banner";
import PopularMedia from "../features/dashboard/PopularMedia";
import TopRatedMedia from "../features/dashboard/TopRatedMedia";
import TrendingMedia from "../features/dashboard/TrendingMedia";

const Dashboard = () => {
  return (
    <>
      <Banner />
      <TrendingMedia />
      <TopRatedMedia />
      <PopularMedia />
    </>
  );
};

export default Dashboard;
