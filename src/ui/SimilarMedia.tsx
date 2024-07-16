import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Tag from "./Tag";
import useMovieDetails from "../features/movies/useMovieDetails";
import MediaCard from "./MediaCard";
import { useParams } from "react-router-dom";
import { SkeletonCard } from "./SkeletonCard";

const SimilarMedia = () => {
  // prettier-ignore
  const { movieDetails, isMovieDetailsLoading, movieDetailsError } = useMovieDetails();
  const { mediaType } = useParams<string>();

  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";

  const { similarMoviesData } = movieDetails || {};

  const refinedSimilarMovies = similarMoviesData?.results?.map((el) => ({
    id: el.id,
    title: el.title || el.name || el.original_name,
    image: el.poster_path,
    averageRating: el.vote_average,
    releaseDate: el.release_date || el.first_air_date || el.last_air_date,
    language: el.original_language,
  }));

  if (!refinedSimilarMovies?.length) return "";

  return (
    <section className="mx-auto w-[1300px]">
      <Tag>{`Similar ${mediaType}S`}</Tag>
      {!refinedSimilarMovies?.length ? (
        <p className="mt-6 text-[1.5rem] font-medium dark:text-dark-grey-500">
          {`Oh oh! There is no similar ${mediaType === "tv" ? "TV shows" : mediaType} to display`}
        </p>
      ) : (
        <Swiper
          loop={false}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={5.3}
          className="mb-8 mt-16 w-full"
        >
          {isMovieDetailsLoading
            ? ["a", "b", "c", "d", "e", "f"].map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonCard />
                </SwiperSlide>
              ))
            : refinedSimilarMovies?.map((similarMovie) => (
                <SwiperSlide key={similarMovie.id}>
                  <MediaCard mediaData={similarMovie} mediaType={"movie"} />
                </SwiperSlide>
              ))}
        </Swiper>
      )}
    </section>
  );
};

export default SimilarMedia;
