import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineLanguage,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi2";

import Tag from "./Tag";
import Genre from "./Genre";
import useMovieDetails from "../features/movies/useMovieDetails";
import { formatTime } from "../utils/formatTime";
import { formatLanguageCode } from "../utils/formatLanguageCode";

// prettier-ignore
const OtherFilmDetails = () => {
  const {movieDetails, isMovieDetailsLoading, movieDetailsError} = useMovieDetails()
  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";
  const {creditsData, basicDetailsData} = movieDetails || {};

  const otherDetails = {
    runtime: basicDetailsData?.runtime || basicDetailsData?.episode_run_time?.[0] ,
    releaseDate: basicDetailsData?.release_date || basicDetailsData?.first_air_date || basicDetailsData?.last_air_date,
    lang: basicDetailsData?.original_language || ''
  }

  const {runtime, lang, releaseDate} = otherDetails
  
  const crews = creditsData?.crew || [];
  const producers = [...crews].filter(crew => crew.job === 'Producer')
  const directors = [...crews].filter(crew => crew.job === 'Director');



const mediaLanguage = formatLanguageCode(lang);

  
  return (
    <section className="text-[1.5rem] text-grey-400 py-24 px-20 bg-grey-0 dark:bg-dark-grey-0 border border-grey-100 dark:border-dark-grey-100 rounded-lg tablet:py-20 mobile:p-12">
      <Tag>movie details</Tag>
      <ul className="mt-24 flex flex-col gap-16">
        <li className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <HiOutlineCalendarDays />
            <span>Realease Date</span>
          </span>
          <span className="text-grey-600 dark:text-dark-grey-600">
            {releaseDate}
          </span>
        </li>

        <li className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <HiOutlineLanguage />
            <span>Available Language(s)</span>
          </span>

          <span className="flex gap-4 items-center">
            <Genre type={'others'}>
            {mediaLanguage}
            </Genre>
          </span>
        </li>

        <li className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <HiOutlineClock />
            <span>Runtime</span>
          </span>
          <div className="flex items-center gap-12">
            <span className="text-grey-600 dark:text-dark-grey-600">
            {runtime ? formatTime(runtime) : 'Not available'}
            </span>
          </div>
        </li>

        <li className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <HiOutlineUser />
            <span>Directors</span>
          </span>
          <span className="text-grey-600 dark:text-dark-grey-600 leading-10">
            {directors.length !== 0 ? directors.map(director => director.name || director.original_name).join(', '): 'None specified'}
          </span>
        </li>

        <li className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <HiOutlineUsers />
            <span>Producers</span>
          </span>
          <span className="text-grey-600 dark:text-dark-grey-600 leading-10">
            {producers.length !== 0? producers.map(producer => producer.name || producer.original_name).join(', ') : 'None specified'} 
          </span>
        </li>
      </ul>
    </section>
  );
};

export default OtherFilmDetails;
