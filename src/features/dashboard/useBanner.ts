import { useQuery } from "@tanstack/react-query";
import { getBannerData } from "../../services/apiMovies";

export const useBanner = () => {
  const {
    data: bannerData,
    isLoading: isBannerDataLoading,
    error: isBannerError,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: () => getBannerData(),
  });
  return { bannerData, isBannerDataLoading, isBannerError };
};
