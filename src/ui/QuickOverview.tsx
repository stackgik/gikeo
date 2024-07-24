import useMovieDetails from "../features/movies/useMovieDetails";
import Genre from "../ui/Genre";
import Tag from "../ui/Tag";
import CircularRating from "./CircularRating";

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
      <h1 className="text-[4rem] font-bold leading-[4rem] text-grey-0 tablet:text-grey-600 dark:tablet:text-dark-grey-600">
        {title}
      </h1>
      <span className="text-[1.3rem] text-grey-400">
        <em>{tagline}</em>
      </span>
      <div className="flex flex-wrap gap-6">
        {genres.map((genre, index) => (
          <Genre key={index}>{genre.name}</Genre>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <div className="aspect-square w-[70px]">
          <CircularRating rating={formattedRating} />
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        <Tag>plot</Tag>
        <p className="max-w-[50rem] text-[1.4rem] leading-[1.9] text-grey-100 tablet:text-grey-600 dark:tablet:text-dark-grey-600">
          {plot ? plot : "The plot was not provided"}
        </p>
      </div>
    </div>
  );
};

export default QuickOverview;
