import MediaCard from "../../ui/MediaCard";
import SortBy from "../../ui/SortBy";
import useDiscoverMovies from "./useDiscoverMovies";

import Button from "../../ui/Button";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { SkeletonCard } from "../../ui/SkeletonCard";

const AllMovies = () => {
  const {
    allMoviesData,
    isAllMoviesLoading,
    allMoviesError,
    pageNum,
    setPageNum,
    totalPages,
  } = useDiscoverMovies();

  const sortByData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
  ];

  const hasPreviousPage = pageNum > 1;
  const hasNextPage = totalPages > pageNum;

  // function scrollToTop() {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  const handleNextPage = () => {
    setPageNum((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPageNum((prev) => prev - 1);
  };

  if (allMoviesError) return <p>Something happened...</p>;

  return (
    <>
      <section className="mx-auto flex w-[130rem] flex-col gap-12 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-grey-800 dark:text-dark-grey-800">
            Explore Movies
          </h1>
          <div>
            <SortBy options={sortByData} />
          </div>
        </div>

        {isAllMoviesLoading ? (
          <div className="grid h-fit w-full grid-cols-5 gap-x-6 gap-y-8">
            {Array.from({ length: 20 }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          allMoviesData.length > 0 && (
            <div className="grid h-fit w-full grid-cols-5 gap-x-6 gap-y-8">
              {allMoviesData.map((movie) => (
                <MediaCard
                  mediaData={movie}
                  key={movie.id}
                  mediaType={"movie"}
                />
              ))}
            </div>
          )
        )}
      </section>
      {!isAllMoviesLoading && totalPages > 1 && (
        <div className="mx-auto my-12 flex w-[130rem] items-center justify-end gap-8">
          <Button
            size={"medium"}
            disabled={!hasPreviousPage}
            className={
              "rounded-md border border-grey-200 dark:border-dark-grey-200 dark:text-dark-grey-800"
            }
            onClick={handlePreviousPage}
          >
            <HiOutlineArrowLeft />
            <span>Previous</span>
          </Button>

          <Button
            size={"medium"}
            disabled={!hasNextPage}
            className={
              "flex gap-4 rounded-md border border-grey-200 dark:border-dark-grey-200 dark:text-dark-grey-800"
            }
            onClick={handleNextPage}
          >
            <span>Next</span>
            <HiOutlineArrowRight />
          </Button>
        </div>
      )}
    </>
  );
};

export default AllMovies;
