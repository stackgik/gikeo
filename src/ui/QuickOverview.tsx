import useMovieDetails from "../features/movies/useMovieDetails";
import Genre from "../ui/Genre";
import Tag from "../ui/Tag";
import CircularRating from "./CircularRating";
import PlayButton from "./PlayButton";

const QuickOverview = () => {
  // prettier-ignore
  const { movieDetails, isMovieDetailsLoading, movieDetailsError } = useMovieDetails();

  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";
  if (!movieDetails) return "blah blah blah";

  const { basicDetailsData } = movieDetails;

  const { title, tagline, genres, rating, releaseDate, plot } = {
    title:
      basicDetailsData.original_title ||
      basicDetailsData.original_name ||
      basicDetailsData.name,
    tagline: basicDetailsData.tagline,
    genres: basicDetailsData.genres,
    rating: basicDetailsData.vote_average,
    releaseDate:
      basicDetailsData.release_date ||
      basicDetailsData.first_air_date ||
      basicDetailsData.last_air_date,
    plot: basicDetailsData.overview,
  };

  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : "N/A";
  const formattedRating = rating ? +rating.toFixed(1) : 0;

  return (
    <div className="flex flex-col gap-10">
      <Tag>{releaseYear}</Tag>
      <h1 className="text-[4rem] font-bold text-grey-0">{title}</h1>
      <span className="text-[1.3rem] text-grey-400">
        <em>{tagline}</em>
      </span>
      <div className="flex gap-6">
        {genres.map((genre, index) => (
          <Genre key={index}>{genre.name}</Genre>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <div className="aspect-square w-[70px]">
          <CircularRating rating={formattedRating} />
        </div>
        <div className="trailerContainer group flex cursor-pointer items-center gap-8">
          <PlayButton />
          <span className="text-[1.4rem] text-grey-100 transition-all duration-700 ease-in-out group-hover:text-red-500">
            Watch Trailer
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        <Tag>plot</Tag>
        <p className="w-[50rem] text-[1.4rem] leading-[1.9] text-grey-100">
          {plot}
        </p>
      </div>
    </div>
  );
};

export default QuickOverview;
