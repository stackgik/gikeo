import axios from "axios";
import { config } from "../config";
import { SimilarMoviesResponse } from "../types";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = config.tmdbToken;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

export const getAllTrendingMedia = async (
  timeWindow: string,
): Promise<SimilarMoviesResponse> => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const { data } = await axios.get<SimilarMoviesResponse>(
      `${BASE_URL}/trending/all/${timeWindow}`,
      options,
    );
    if (!data) throw new Error("There was an error while fetching the data");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch movie details",
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
