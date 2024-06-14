import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import { Navigation } from "swiper/modules";

import Cast from "./Cast";
import Tag from "./Tag";
import useMovieDetails from "../features/movies/useMovieDetails";
import FallbackAvatar from "../../public/assets/avatar.png";

const Casts = () => {
  // prettier-ignore
  const { movieDetails, isMovieDetailsLoading, movieDetailsError } = useMovieDetails();

  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";

  const result = movieDetails?.creditsData;
  const casts = result?.cast.slice(0, 20);

  return (
    <section className="swiper-container relative">
      <Tag>Top Billed Casts</Tag>
      <Swiper
        loop={false}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={4.3}
        navigation={{
          nextEl: "#next1",
          prevEl: "#prev1",
        }}
        modules={[Navigation]}
        className="mt-24 w-full"
      >
        {casts?.map((cast) => {
          return (
            <SwiperSlide key={cast.name}>
              <Cast
                imgSrc={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                    : FallbackAvatar
                }
                name={cast.name || cast.original_name}
                character={cast.character}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {casts !== undefined && casts?.length > 5 && (
        <div className="slider-controller absolute right-[5rem] top-[6rem] flex items-center justify-center gap-6">
          <div className="swiper-button" role="button" id="prev1">
            <HiOutlineChevronLeft />
          </div>
          <div className="swiper-button" role="button" id="next1">
            <HiOutlineChevronRight />
          </div>
        </div>
      )}
    </section>
  );
};

export default Casts;
