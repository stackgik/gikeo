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
export const getAllMovies = async (sortByValue: string | null, page: number): Promise<AllMoviesProps> => {
  const params = {
    sort_by: sortByValue || 'popularity.desc',
    page,
  };

  try {
    const { data } = await axios.get<ApiResponse>(`${BASE_URL}/discover/movie`, {
      ...options,
      params,
    });

    if (!data) throw new Error('No movies found');

    const refinedData: Movie[] = data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path,
      averageRating: movie.vote_average,
      releaseDate: movie.release_date,
      language: movie.original_language,
    }));

    return { movies: refinedData, totalPages: data.total_pages };
  } catch (err) {
    throw new Error('Failed to fetch movies');
  }
};

// prettier-ignore
export const getMovieDetails = async ({id, mediaType}: MovieDetailsProps) : Promise<MovieDetailsResponse> => {
    const basicDetailsURL= axios.get<BasicDetailsResponse >(`${BASE_URL}/${mediaType}/${id}`, options);
    const creditsURL = axios.get<CreditsResponse>(`${BASE_URL}/${mediaType}/${id}/credits`, options);
    const reviewsURL = axios.get<ReviewsResponse>(`${BASE_URL}/${mediaType}/${id}/reviews`, options);
    const imagesURL = axios.get<ImagesResponse>(`${BASE_URL}/${mediaType}/${id}/images`, options);
    const similarMoviesURL = axios.get<SimilarMoviesResponse>(`${BASE_URL}/${mediaType}/${id}/similar`, options);

    try{
      const allData = await Promise.all([basicDetailsURL, similarMoviesURL, creditsURL, reviewsURL, imagesURL]);
      if (!allData) throw new Error('There was an error while fetching the data');

      const basicDetailsData = allData[0].data;
      const similarMoviesData = allData[1].data;
      const creditsData = allData[2].data;
      const reviewsData = allData[3].data;
      const imagesData = allData[4].data

      return {basicDetailsData, creditsData, reviewsData, imagesData, similarMoviesData}
    }catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch movie details');
      } else {
        throw new Error('An unknown error occurred');
      }
    }
};

// prettier-ignore
export const getMovieTrailers = async ({ id, mediaType}: MovieDetailsProps): Promise<TrailerResponse> => {
  try {
    const { data } = await axios.get<TrailerResponse>(
      `${BASE_URL}/${mediaType}/${id}/videos`,
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

export const getBannerData = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/now_playing`, options);
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
