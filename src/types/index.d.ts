import { MouseEvent, ReactNode } from "react";

declare global {
  declare interface LoginProps {
    email: string;
    password: string;
  }

  declare interface SignUpProps {
    username: string;
    email: string;
    password: string;
    avatar?: string;
  }

  declare interface IButton {
    children: ReactNode;
    width?: "full";
    size: "small" | "medium" | "large";
    variation: "primary" | "secondary" | "danger";
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "reset";
    extraClass?: string;
  }

  declare interface Movie {
    id: number;
    title: string;
    image: string;
    averageRating: number;
    releaseDate: string;
    language: string;
  }

  declare interface AllMoviesProps {
    movies: Movie[];
    totalPages: number;
  }

  declare interface ApiMovie {
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
  }

  declare interface ApiResponse {
    page: number;
    results: ApiMovie[];
    total_results: number;
    total_pages: number;
  }

  declare interface MediaDataProps {
    mediaData: Movie;
    mediaType: string;
  }

  declare interface IAllMedia {
    allMediaData: Movie[];
    isAllMediaLoading: boolean;
    allMediaError: Error | null;
    pageNum: number;
    totalPages: number;
    setPageNum: Dispatch<SetStateAction<number>>;
    mediaType: string;
  }

  declare interface MovieDetailsProps {
    id?: string;
    mediaType?: string;
    [key: string]: string | undefined;
  }

  declare interface Genre {
    id: number;
    name: string;
  }

  declare interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }

  declare interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }

  declare interface BasicDetailsResponse {
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
  }

  declare interface Cast {
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
  }

  declare interface Crew {
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
  }

  declare interface CreditsResponse {
    id: number;
    cast: Cast[];
    crew: Crew[];
  }

  declare interface Review {
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
  }

  declare interface ReviewsResponse {
    id: number;
    page: number;
    results: Review[];
    total_pages: number;
    total_results: number;
  }

  declare interface Image {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }

  declare interface ImagesResponse {
    id: number;
    backdrops: Image[];
    posters: Image[];
    logos: Image[];
  }

  declare interface SimilarMovie {
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
  }

  declare interface SimilarMoviesResponse {
    page: number;
    results: SimilarMovie[];
    total_pages: number;
    total_results: number;
  }

  declare interface MovieDetailsResponse {
    basicDetailsData: BasicDetailsResponse;
    creditsData: CreditsResponse;
    reviewsData: ReviewsResponse;
    imagesData: ImagesResponse;
    similarMoviesData: SimilarMoviesResponse;
  }

  declare interface Trailer {
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
  }

  declare interface TrailerResponse {
    id: number;
    results: Trailer[];
  }
}
