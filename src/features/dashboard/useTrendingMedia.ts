import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllTrendingMedia } from "../../services/apiTrendingMedia";

const useTrendingMedia = () => {
  const [active, setActive] = useState("day");
  const {
    data: trendingData,
    isLoading: isTrendingDataLoading,
    error: trendingError,
  } = useQuery({
    queryKey: ["trending", active],
    queryFn: () => getAllTrendingMedia(active),
    retry: false,
  });

  return {
    trendingData,
    isTrendingDataLoading,
    trendingError,
    active,
    setActive,
  };
};

export default useTrendingMedia;
