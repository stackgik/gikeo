import { Link } from "react-router-dom";
import Img from "./Img";
import CircularRating from "./CircularRating";
import { TbMovie } from "react-icons/tb";
import PosterFallback from "/assets/no-poster.png";
import Bookmark from "../features/bookmark/Bookmark";

// prettier-ignore
const MediaCard = ({mediaData, mediaType}:MediaDataProps) => {
  const {title,averageRating, releaseDate, image, language, id} = mediaData;
  const posterUrl = image === null ? PosterFallback: `https://image.tmdb.org/t/p/original/${image}`;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
  const rating = averageRating? +averageRating.toFixed(1) : 0;
  

  return (
    <article className="h-fit w-[150px] shrink-0">

      {/* Image Container */}
      <div className="image-container relative">
        <Link to={`/${mediaType}/${id}-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <Img src={posterUrl} alt={'working on it'} />
        </Link>
        <Bookmark mediaData={mediaData} mediaType={mediaType}/>
      </div>
      
      <div className="content relative py-10">
        <ul className="flex text-lg gap-4 items-center text-grey-700 dark:text-dark-grey-700">
          <li>{releaseYear}</li>
          <li className="h-[2px] aspect-square bg-grey-700 dark:bg-dark-grey-700 rounded-full"></li>
          <li className="flex gap-1 items-center justify-center">
            <TbMovie />
            {mediaType}
          </li>
          <li className="h-[2px] aspect-square bg-grey-700 dark:bg-dark-grey-700 rounded-full"></li>
          <li className="uppercase">{language}</li>
        </ul>

        {/*Media Title */}
        <Link
          to={`/${mediaType}/${id}-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-[15px] mt-4 block font-bold text-grey-700 dark:text-dark-grey-700 hover:text-brand-500 transition-all duration-300 ease-in-out"
        >
          {title}
        </Link>

        {/*Circular Rating */}
        <div className="rating h-[4.5rem] aspect-square rounded-full absolute top-0 left-2 -translate-y-2/3">
          <CircularRating rating={rating} />
        </div>
      </div>
    </article>
  );
};

export default MediaCard;
