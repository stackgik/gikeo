import AllMedia from "../features/movies/AllMedia";
import useDiscoverMedia from "../features/movies/useDiscoverMedia";
import { getAllTVSeries } from "../services/apiTVSeries";
const ExploreTVShows = () => {
  const {
    allMediaData,
    isAllMediaLoading,
    allMediaError,
    pageNum,
    setPageNum,
    totalPages,
  } = useDiscoverMedia(getAllTVSeries, "all_tvs");

  return (
    <AllMedia
      allMediaData={allMediaData}
      isAllMediaLoading={isAllMediaLoading}
      allMediaError={allMediaError}
      pageNum={pageNum}
      setPageNum={setPageNum}
      totalPages={totalPages}
      mediaType={"tv"}
    />
  );
};
export default ExploreTVShows;
