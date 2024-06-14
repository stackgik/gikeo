import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPopularMedia } from "../../services/apiPopularMedia";
import { type SimilarMoviesResponse } from "../../services/apiMovies";

const usePopularMedia = () => {
  const [active, setActive] = useState("tv");
  const {
    data: popularData,
    isLoading: isPopularDataLoading,
    error: popularError,
  } = useQuery<SimilarMoviesResponse, Error>({
    queryKey: ["popular", active],
    queryFn: () => getPopularMedia(active),
    retry: false,
  });

  return {
    popularData,
    isPopularDataLoading,
    popularError,
    active,
    setActive,
  };
};

export default usePopularMedia;
