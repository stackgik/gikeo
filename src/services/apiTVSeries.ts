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

// prettier-ignore
export const getAllTVSeries = async ( sortByValue: string | null, page: number ): Promise<AllMoviesProps> => {
  const params = {
    sort_by: sortByValue || "popularity.desc",
    page,
  };

  try {
    const { data } = await axios.get<ApiResponse>(
      `${BASE_URL}/discover/tv`,
      {
        ...options,
        params,
      },
    );

    if (!data) throw new Error("No tv found");

    const refinedData: Movie[] = data.results.map((tv) => ({
      id: tv.id,
      title: tv.original_name || tv.name,
      image: tv.poster_path,
      averageRating: tv.vote_average,
      releaseDate: tv.first_air_date,
      language: tv.original_language,
    }));

    return { movies: refinedData, totalPages: data.total_pages };
  } catch (err) {
    throw new Error("Failed to fetch movies");
  }
};
