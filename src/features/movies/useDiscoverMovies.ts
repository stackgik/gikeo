import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../../services/apiMovies";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

// prettier-ignore
const useDiscoverMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByValue = searchParams.get('sortBy');
  const [pageNum, setPageNum] = useState(1);
  searchParams.set('page', String(pageNum));
  setSearchParams(searchParams);

  const { data, isLoading: isAllMoviesLoading, error:allMoviesError } = useQuery({
    queryKey: ["getAllMovies", sortByValue, pageNum],
    queryFn: () => getAllMovies(sortByValue, pageNum),
    retry: false,
  });

  const allMoviesData = data?.movies ?? [];
  const totalPages = data?.totalPages ?? 1;

  return { allMoviesData, isAllMoviesLoading, allMoviesError, pageNum, setPageNum, totalPages };
};

export default useDiscoverMovies;
