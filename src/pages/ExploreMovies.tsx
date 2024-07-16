import AllMedia from "../features/movies/AllMedia";
import useDiscoverMedia from "../features/movies/useDiscoverMedia";
import { getAllMovies } from "../services/apiMovies";
const ExploreMovies = () => {
  const {
    allMediaData,
    isAllMediaLoading,
    allMediaError,
    pageNum,
    setPageNum,
    totalPages,
  } = useDiscoverMedia(getAllMovies, "all_movies");

  return (
    <AllMedia
      allMediaData={allMediaData}
      isAllMediaLoading={isAllMediaLoading}
      allMediaError={allMediaError}
      pageNum={pageNum}
      setPageNum={setPageNum}
      totalPages={totalPages}
      mediaType={"movie"}
    />
  );
};
export default ExploreMovies;
