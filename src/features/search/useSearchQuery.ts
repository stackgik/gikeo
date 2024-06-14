import { useQuery } from "@tanstack/react-query";
import { getQueryResults } from "../../services/apiSearch";
import { type SimilarMoviesResponse } from "../../services/apiMovies";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

// prettier-ignore
export const useSearchQuery = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') as string
    const [page, setPage] = useState(1)
    searchParams.set('page', String(page));
  setSearchParams(searchParams);

  const {data: queryResults, isLoading: isQueryResultsLoading, error: queryResultsError} = useQuery<SimilarMoviesResponse, Error>({
    queryKey: ["search", query, page],
    queryFn: () => getQueryResults(query, page),
    retry: false,
    enabled: !!query,
  });

  return { queryResults, isQueryResultsLoading, queryResultsError, page, setPage };
};
