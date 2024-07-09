import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

// prettier-ignore
const useDiscoverMedia = (mediaApi, key: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByValue = searchParams.get('sortBy');
  const [pageNum, setPageNum] = useState(1);
  searchParams.set('page', String(pageNum));
  setSearchParams(searchParams);

  const { data, isLoading: isAllMediaLoading, error:allMediaError } = useQuery({
    queryKey: [key, sortByValue, pageNum],
    queryFn: () => mediaApi(sortByValue, pageNum),
    retry: false,
  });

  const allMediaData = data?.movies ?? [];
  const totalPages = data?.totalPages ?? 1;

  return { allMediaData, isAllMediaLoading, allMediaError, pageNum, setPageNum, totalPages };
};

export default useDiscoverMedia;
