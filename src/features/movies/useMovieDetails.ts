import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  type MovieDetailsResponse,
  getMovieDetails,
  getMovieTrailers,
  TrailerResponse,
} from "../../services/apiMovies";
import { type MovieDetailsProps } from "../../services/apiMovies";

const useMovieDetails = () => {
  const { mediaType, id } = useParams<MovieDetailsProps>();

  const {
    data: movieDetails,
    isLoading: isMovieDetailsLoading,
    error: movieDetailsError,
  } = useQuery<MovieDetailsResponse, Error>({
    queryKey: ["movieDetails", mediaType, id],
    queryFn: () => getMovieDetails({ mediaType, id }),
    enabled: !!mediaType && !!id,
    retry: false,
  });

  const {
    data: trailers,
    error: trailerError,
    isLoading: isTrailersLoading,
  } = useQuery<TrailerResponse, Error>({
    queryKey: ["trailers", mediaType, id],
    queryFn: () => getMovieTrailers({ mediaType, id }),
    enabled: !!mediaType && !!id,
    retry: false,
  });
  // prettier-ignore
  return { movieDetails, isMovieDetailsLoading, movieDetailsError, trailers, trailerError, isTrailersLoading};
};

export default useMovieDetails;
