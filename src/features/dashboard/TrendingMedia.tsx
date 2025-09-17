import Media from "../../ui/Media";
import useTrendingMedia from "./useTrendingMedia";

const TrendingMedia = () => {
  // prettier-ignore
  const { active, setActive, trendingData, isTrendingDataLoading, trendingError } = useTrendingMedia();

  return (
    <Media
      active={active}
      setActive={setActive}
      data={trendingData}
      isLoadingData={isTrendingDataLoading}
      error={trendingError}
      tag={"trending"}
      switchVal1={"day"}
      switchVal2={"week"}
    />
  );
};

export default TrendingMedia;
