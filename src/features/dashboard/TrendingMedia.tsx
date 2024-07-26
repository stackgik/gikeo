import { Swiper, SwiperSlide } from "swiper/react";
// import SpinnerMini from "../../ui/SpinnerMini";

import Switch from "../../ui/Switch";
import Tag from "../../ui/Tag";
import useTrendingMedia from "./useTrendingMedia";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MediaCard from "../../ui/MediaCard";
import { SkeletonCard } from "../../ui/SkeletonCard";

const TrendingMedia = () => {
  // prettier-ignore
  const { active, setActive, trendingData, isTrendingDataLoading, trendingError } = useTrendingMedia();

  if (trendingError)
    return (
      <p className="text-center text-[1.4rem] font-medium dark:text-dark-grey-500">
        {trendingError.message}
      </p>
    );

  const trending = trendingData?.results?.map((el) => ({
    id: el.id,
    title: el.title || el.name || el.original_name,
    image: el.poster_path,
    averageRating: el.vote_average,
    releaseDate: el.release_date || el.first_air_date || el.last_air_date,
    language: el.original_language,
    mediaType: el.media_type,
  }));

  return (
    <>
      <div className="mx-auto mt-24 flex w-custom-min-width items-center justify-between">
        <Tag>trending</Tag>
        <Switch
          setActive={setActive}
          active={active}
          value1={"day"}
          value2={"week"}
        />
      </div>

      <section className="mx-auto my-16 w-custom-min-width">
        <Swiper
          loop={false}
          grabCursor={true}
          spaceBetween={15}
          slidesPerView={6.6}
          breakpoints={{
            0: {
              slidesPerView: 1.6,
            },
            401: {
              slidesPerView: 2.3,
            },
            701: {
              slidesPerView: 4.3,
            },
            1025: {
              slidesPerView: 4.2,
            },
            1201: {
              slidesPerView: 5.3,
            },
            1441: {
              slidesPerView: 6.6,
            },
          }}
          className="w-full"
        >
          {isTrendingDataLoading
            ? ["a", "b", "c", "d", "e", "f"].map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonCard />
                </SwiperSlide>
              ))
            : trending?.map((el) => (
                <SwiperSlide key={el.id}>
                  <MediaCard mediaData={el} mediaType={el.mediaType} />
                </SwiperSlide>
              ))}
        </Swiper>
      </section>
    </>
  );
};

export default TrendingMedia;
