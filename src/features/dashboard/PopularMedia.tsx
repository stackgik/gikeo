import Media from "../../ui/Media";
import usePopularMedia from "./usePopularMedia";

const PopularMedia = () => {
  // prettier-ignore
  const { active, setActive, popularData, isPopularDataLoading, popularError } = usePopularMedia();

  return (
    <Media
      active={active}
      setActive={setActive}
      data={popularData}
      isLoadingData={isPopularDataLoading}
      error={popularError}
      tag={"popular"}
      switchVal1={"tv"}
      switchVal2={"movie"}
    />
  );
};

export default PopularMedia;
