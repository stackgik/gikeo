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

// prettier-ignore
export const getQueryResults = async (query: string, page: number): Promise<SimilarMoviesResponse> => {
  const params ={
    query,
    page,
  }
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const { data } = await axios.get<SimilarMoviesResponse>(`${BASE_URL}/search/multi`, {...options, params});
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
