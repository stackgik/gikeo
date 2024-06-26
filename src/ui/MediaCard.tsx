import { Link } from "react-router-dom";
import Img from "./Img";
import { HiOutlineBookmark } from "react-icons/hi2";
import CircularRating from "./CircularRating";
import { TbMovie } from "react-icons/tb";
import PosterFallback from "../../public/assets/no-poster.png";
import { type Movie } from "../services/apiMovies";

type MediaDataProps = {
  mediaData: Movie;
  mediaType: string;
};

// prettier-ignore
const MediaCard = ({mediaData, mediaType}:MediaDataProps) => {
  const {title,averageRating, releaseDate, image, language, id} = mediaData;
  const posterUrl = image === null ? PosterFallback: `https://image.tmdb.org/t/p/original/${image}`;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
  const rating = averageRating? +averageRating.toFixed(1) : 0;
  

  return (
    <article className="h-fit">
      <div className="image-container relative h-[35rem]">
        <Link to={`/${mediaType}/${id}-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <Img src={posterUrl} alt={'working on it'} />
        </Link>
        <div
          className="h-[2.4rem] aspect-square rounded-full bg-grey-700 flex items-center text-[13px] justify-center absolute top-[15px] right-[20px] cursor-pointer hover:bg-grey-0 transition-all duration-300 group"
          role="button"
        >
          <HiOutlineBookmark className="stroke-grey-0 stroke-2 group-hover:stroke-grey-700" />
        </div>
      </div>
      <div className="content relative px-6 py-10 h-[10rem]">
        <ul className="flex text-lg gap-6 items-center text-grey-700 dark:text-dark-grey-700">
          <li>{releaseYear}</li>
          <li className="h-[2px] aspect-square bg-grey-700 dark:bg-dark-grey-700 rounded-full"></li>
          <li className="flex gap-1 items-center justify-center">
            <TbMovie />
            {mediaType}
          </li>
          <li className="h-[2px] aspect-square bg-grey-700 dark:bg-dark-grey-700 rounded-full"></li>
          <li className="uppercase">{language}</li>
        </ul>
        <Link
          to={`/${mediaType}/${id}-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-[1.6rem] mt-4 block font-bold text-grey-700 dark:text-dark-grey-700 hover:text-brand-500 transition-all duration-300 ease-in-out"
        >
          {title}
        </Link>
        <div className="rating h-[4.5rem] aspect-square rounded-full absolute top-0 left-2 -translate-y-2/3">
          <CircularRating rating={rating} />
        </div>
      </div>
    </article>
  );
};

export default MediaCard;
