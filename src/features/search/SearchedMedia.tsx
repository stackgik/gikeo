import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Button from "../../ui/Button";
import { SkeletonCard } from "../../ui/SkeletonCard";
import { useSearchQuery } from "./useSearchQuery";
import MediaCard from "../../ui/MediaCard";

const SearchedMedia = () => {
  // prettier-ignore
  const { queryResults, isQueryResultsLoading, queryResultsError, page, setPage,query } = useSearchQuery();
  if (queryResultsError) return <p>{queryResultsError.message}</p>;

  const { results } = queryResults || {};
  const queryData = results?.map((el) => ({
    id: el.id,
    title: el.title || el.name || el.original_name,
    image: el.poster_path,
    averageRating: el.vote_average,
    releaseDate: el.release_date || el.first_air_date || el.last_air_date,
    language: el.original_language,
    mediaType: el.media_type,
  }));
  const totalPages = queryResults?.total_pages || 1;
  const hasPreviousPage = page > 1;
  const hasNextPage = totalPages > page;

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <section className="mx-auto flex w-custom-min-width flex-col gap-12 py-8">
        {isQueryResultsLoading ? (
          ""
        ) : (
          <h1 className="text-4xl font-bold text-grey-800 dark:text-dark-grey-800">
            {queryResults?.results.length === 0
              ? `Aww...looks like we couldn't find shows by "${query}"`
              : "Your search results are here..."}
          </h1>
        )}

        {isQueryResultsLoading ? (
          <div className="grid h-fit w-full grid-cols-5 gap-x-6 gap-y-8">
            {Array.from({ length: 20 }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : queryData?.length === 0 ? (
          <img
            src="/assets/no-results.png"
            alt="no results"
            className="mx-auto block w-[600px]"
          />
        ) : (
          <div className="grid h-fit w-full grid-cols-5 gap-x-6 gap-y-8">
            {queryData?.map((el) => (
              <MediaCard mediaData={el} key={el.id} mediaType={el.mediaType} />
            ))}
          </div>
        )}
      </section>
      {!isQueryResultsLoading && totalPages > 1 && (
        <div className="mx-auto my-12 flex w-[130rem] items-center justify-end gap-8">
          <Button
            size={"medium"}
            disabled={!hasPreviousPage}
            variation={"secondary"}
            onClick={handlePreviousPage}
            extraClass={"flex gap-4"}
          >
            <HiOutlineChevronLeft />
            <span>Previous</span>
          </Button>

          <Button
            size={"medium"}
            variation={"secondary"}
            disabled={!hasNextPage}
            onClick={handleNextPage}
            extraClass={"flex gap-4"}
          >
            <span>Next</span>
            <HiOutlineChevronRight />
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchedMedia;
