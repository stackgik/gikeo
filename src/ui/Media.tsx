import { Dispatch, SetStateAction } from "react";
import Tag from "./Tag";
import Switch from "./Switch";
import { SkeletonCard } from "./SkeletonCard";
import MediaCard from "./MediaCard";

interface TrendingMediaProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  data: SimilarMoviesResponse | undefined;
  isLoadingData: boolean;
  error: Error | null;
  tag: string;
  switchVal1: string;
  switchVal2: string;
}

const Media = ({
  active,
  setActive,
  data,
  isLoadingData,
  error,
  tag,
  switchVal1,
  switchVal2,
}: TrendingMediaProps) => {
  if (error)
    return (
      <p className="text-center text-[1.4rem] font-medium dark:text-dark-grey-500">
        {error.message}
      </p>
    );

  const cleanedData = data?.results?.map((el) => ({
    id: el.id,
    title: el.title || el.name || el.original_name,
    image: el.poster_path,
    averageRating: el.vote_average,
    releaseDate: el.release_date || el.first_air_date || el.last_air_date,
    language: el.original_language,
    mediaType: el.media_type || active,
  }));

  return (
    <>
      <div className="mx-auto mt-24 flex w-custom-min-width items-center justify-between">
        <Tag>{tag}</Tag>
        <Switch
          setActive={setActive}
          active={active}
          value1={switchVal1}
          value2={switchVal2}
        />
      </div>

      <section className="scrollbar-hide mx-auto my-16 flex w-custom-min-width gap-4 overflow-x-scroll">
        {isLoadingData
          ? ["a", "b", "c", "d", "e", "f"].map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : cleanedData?.map((el) => (
              <MediaCard key={el.id} mediaData={el} mediaType={el.mediaType} />
            ))}
      </section>
    </>
  );
};

export default Media;
