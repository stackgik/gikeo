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

export type Movie = {
  id: number;
  title: string;
  image: string;
  averageRating: number;
  releaseDate: string;
  language: string;
};

export type AllMoviesProps = {
  movies: Movie[];
  totalPages: number;
};

type ApiMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  popularity: string;
  overview: string;
  vote_count: number;
  id: number;
  title: string;
  name: string;
  original_name: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  first_air_date: string;
};

export type ApiResponse = {
  page: number;
  results: ApiMovie[];
  total_results: number;
  total_pages: number;
};

// prettier-ignore
export const getAllMovies = async (sortByValue: string | null, page: number): Promise<AllMoviesProps> => {
  const params = {
    sort_by: sortByValue || 'popularity.desc',
    page,
  };

  try {
    // await new Promise ((resolve) => setTimeout(resolve, 5000))
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

export type MovieDetailsProps = {
  id: string | undefined;
  mediaType: string | undefined;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type BasicDetailsResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  first_air_date: string;
  last_air_date: string;
  revenue: number;
  runtime: number;
  episode_run_time: number[];
  status: string;
  tagline: string;
  title: string;
  name: string;
  original_name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Cast = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  id: number;
  name: string;
  original_name: string;
  order: number;
  profile_path: string;
  popularity: number;
  known_for_department: string;
  gender: number;
};

export type Crew = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type CreditsResponse = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

type Review = {
  id: number;
  author: string;
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
};

type ReviewsResponse = {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};

type Image = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

type ImagesResponse = {
  id: number;
  backdrops: Image[];
  posters: Image[];
  logos: Image[];
};

export type SimilarMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  last_air_date: string;
  title: string;
  name: string;
  original_name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: string;
};

export type SimilarMoviesResponse = {
  page: number;
  results: SimilarMovie[];
  total_pages: number;
  total_results: number;
};

export type MovieDetailsResponse = {
  basicDetailsData: BasicDetailsResponse;
  creditsData: CreditsResponse;
  reviewsData: ReviewsResponse;
  imagesData: ImagesResponse;
  similarMoviesData: SimilarMoviesResponse;
};

type Trailer = {
  id: string;
  iso_3166_1: string;
  iso_639_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  published_at: Date;
  official: boolean;
};

export type TrailerResponse = {
  id: number;
  results: Trailer[];
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
