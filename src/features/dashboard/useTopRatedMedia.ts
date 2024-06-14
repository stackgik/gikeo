import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTopRatedMedia } from "../../services/apiTopRatedMedia";

const useTopRatedMedia = () => {
  const [active, setActive] = useState("tv");
  const {
    data: topRatedData,
    isLoading: isTopRatedDataLoading,
    error: topRatedError,
  } = useQuery({
    queryKey: ["top_rated", active],
    queryFn: () => getTopRatedMedia(active),
    retry: false,
  });

  return {
    topRatedData,
    isTopRatedDataLoading,
    topRatedError,
    active,
    setActive,
  };
};

export default useTopRatedMedia;
