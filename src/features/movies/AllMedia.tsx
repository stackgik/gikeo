import MediaCard from "../../ui/MediaCard";
import SortBy from "../../ui/SortBy";
import Button from "../../ui/Button";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { SkeletonCard } from "../../ui/SkeletonCard";

// prettier-ignore
const AllMedia = ({  allMediaData,  isAllMediaLoading,  allMediaError,  pageNum,  setPageNum,  totalPages, mediaType }: IAllMedia) => {

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

  const handleNextPage = () => {
    setPageNum((prev:number) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPageNum((prev:number) => prev - 1);
  };

  if (allMediaError) return <p className="text-[1.4rem] text-center font-medium dark:text-dark-grey-500">{allMediaError.message}</p>;

  return (
    <>
      <section className="mx-auto flex w-custom-min-width flex-col gap-12 py-8">
        <div className="flex items-center justify-between mobile:flex-col mobile:gap-8 mobile:justify-start">
          <h1 className="text-4xl font-bold text-grey-800 dark:text-dark-grey-800 mobile:self-start">
           {`Explore ${mediaType === 'tv' ? 'TV Shows' : 'Movies'}`}
          </h1>
          <div className="mobile:self-start">
            {isAllMediaLoading || allMediaError ? "" : <SortBy options={sortByData} />}
          </div>
        </div>

        {isAllMediaLoading ? (
          <div className="grid h-fit w-full grid-cols-6 gap-x-6 gap-y-8 miniDesktop:grid-cols-5 PC:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2">
            {Array.from({ length: 20 }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          allMediaData.length > 0 && (
            <div className="grid h-fit w-full grid-cols-6 gap-x-6 gap-y-8 miniDesktop:grid-cols-5 PC:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2">
              {allMediaData.map((media) => (
                <MediaCard
                  mediaData={media}
                  key={media.id}
                  mediaType={mediaType}
                />
              ))}
            </div>
          )
        )}
      </section>
      {!isAllMediaLoading && totalPages > 1 && (
        <div className="mx-auto my-12 flex w-custom-min-width items-center justify-end gap-8">
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

export default AllMedia;
