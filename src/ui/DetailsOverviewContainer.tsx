import { ReactNode } from "react";
import useMovieDetails from "../features/movies/useMovieDetails";

const DetailsOverviewContainer = ({ children }: { children: ReactNode }) => {
  // prettier-ignore
  const { movieDetails, isMovieDetailsLoading, movieDetailsError } = useMovieDetails();

  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";

  const result = movieDetails?.basicDetailsData;

  const { backdrop } = {
    backdrop: result?.backdrop_path,
  };
  const backdropURL = `https://image.tmdb.org/t/p/original/${backdrop}`;
  const containerStyle = {
    backgroundImage: `linear-gradient(
      rgba(17, 24, 39, 0.9),
      rgba(17, 24, 39, 0.9)
    ), url(${backdropURL})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="flex h-fit items-center justify-center py-12"
      style={containerStyle}
    >
      {children}
    </section>
  );
};

export default DetailsOverviewContainer;
