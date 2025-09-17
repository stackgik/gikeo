import Media from "../../ui/Media";
import useTopRatedMedia from "./useTopRatedMedia";

const TopRatedMedia = () => {
  // prettier-ignore
  const { active, setActive, topRatedData, isTopRatedDataLoading, topRatedError } = useTopRatedMedia();

  return (
    <Media
      active={active}
      setActive={setActive}
      data={topRatedData}
      isLoadingData={isTopRatedDataLoading}
      error={topRatedError}
      tag={"top rated"}
      switchVal1={"tv"}
      switchVal2={"movie"}
    />
  );
};

export default TopRatedMedia;
