import useMovieDetails from "../features/movies/useMovieDetails";
import PosterFallback from "/assets/no-poster.png";

const DetailsTumbnail = () => {
  // prettier-ignore
  const { movieDetails, isMovieDetailsLoading, movieDetailsError } = useMovieDetails();

  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";

  const result = movieDetails?.basicDetailsData;

  const { poster } = {
    poster: result?.poster_path,
  };

  const posterUrl =
    poster === null
      ? PosterFallback
      : `https://image.tmdb.org/t/p/original/${poster}`;

  return (
    <figure className="h-[450px] w-[300px] shrink-0 self-start overflow-hidden rounded-md tablet:h-[280px] tablet:w-[190px]">
      <img
        src={posterUrl}
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </figure>
  );
};

export default DetailsTumbnail;
