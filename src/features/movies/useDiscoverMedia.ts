import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const useDiscoverMedia = (mediaApi, key: string) => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByValue = searchParams.get("sortBy");
  const [pageNum, setPageNum] = useState(
    () => Number(searchParams.get("page")) || 1,
  );

  useEffect(() => {
    searchParams.set("page", String(pageNum));
    setSearchParams(searchParams);
  }, [pageNum, searchParams, setSearchParams]);

  const {
    data,
    isLoading: isAllMediaLoading,
    error: allMediaError,
  } = useQuery({
    queryKey: [key, sortByValue, pageNum],
    queryFn: () => mediaApi(sortByValue, pageNum),
    retry: false,
  });

  const allMediaData = data?.movies ?? [];
  const totalPages = data?.totalPages ?? 1;

  useEffect(() => {
    if (pageNum < totalPages) {
      queryClient.prefetchQuery({
        queryKey: [key, sortByValue, pageNum + 1],
        queryFn: () => mediaApi(sortByValue, pageNum + 1),
      });
    }

    if (pageNum > 1) {
      queryClient.prefetchQuery({
        queryKey: [key, sortByValue, pageNum - 1],
        queryFn: () => mediaApi(sortByValue, pageNum - 1),
      });
    }
  }, [pageNum, sortByValue, totalPages, queryClient, mediaApi, key]);

  return {
    allMediaData,
    isAllMediaLoading,
    allMediaError,
    pageNum,
    setPageNum,
    totalPages,
  };
};

export default useDiscoverMedia;
