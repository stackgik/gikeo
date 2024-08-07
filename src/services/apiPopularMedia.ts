import axios from "axios";
import { config } from "../config";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = config.tmdbToken;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

export const getPopularMedia = async (
  mediaType: string,
): Promise<SimilarMoviesResponse> => {
  try {
    const { data } = await axios.get<SimilarMoviesResponse>(
      `${BASE_URL}/${mediaType}/popular`,
      options,
    );
    if (!data) throw new Error("There was an error while fetching the data");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
