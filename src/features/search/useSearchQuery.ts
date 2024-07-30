import { useQuery } from "@tanstack/react-query";
import { getQueryResults } from "../../services/apiSearch";
import { type SimilarMoviesResponse } from "../../services/apiMovies";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const useSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") as string;
  const [page, setPage] = useState(1);
  const [dataLen, setDataLen] = useState<number | null>(null);

  const {
    data: queryResults,
    isLoading: isQueryResultsLoading,
    error: queryResultsError,
  } = useQuery<SimilarMoviesResponse, Error>({
    queryKey: ["search", query, page],
    queryFn: () => getQueryResults(query, page),
    retry: false,
    enabled: !!query,
  });

  useEffect(() => {
    if (queryResults) {
      setDataLen(queryResults.results.length);
    }
  }, [queryResults]);

  useEffect(() => {
    if (dataLen !== null && dataLen !== 0) {
      searchParams.set("page", String(page));
      setSearchParams(searchParams);
      window.scrollTo(0, 0);
    }
  }, [page, searchParams, setSearchParams, dataLen]);

  return {
    queryResults,
    isQueryResultsLoading,
    queryResultsError,
    page,
    setPage,
    query,
  };
};
