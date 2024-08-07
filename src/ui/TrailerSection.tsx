import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Trailer from "./Trailer";
import Tag from "./Tag";
import useMovieDetails from "../features/movies/useMovieDetails";
import VideoPopup from "./VideoPopup";
import { useState } from "react";

const TrailerSection = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  const { trailers, trailerError, isTrailersLoading } = useMovieDetails();
  if (trailerError) return <p>{trailerError.message}</p>;
  if (isTrailersLoading) return "loading...";

  const teasers = trailers?.results?.slice(0, 15);

  function handleVideo(videoId: string) {
    setVideoId(videoId);
    setShow(true);
  }

  function resetVideoState() {
    setShow(false);
    setVideoId(null);
  }

  if (teasers === undefined) return;

  return (
    <section className="swiper-container mobile:p-12">
      <Tag>Official Trailers</Tag>
      {teasers.length > 0 ? (
        <Swiper
          loop={false}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={2.3}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            401: {
              slidesPerView: 1.8,
            },
            701: {
              slidesPerView: 2.5,
            },
            1025: {
              slidesPerView: 2.2,
            },
            1201: {
              slidesPerView: 3.5,
            },
            // Add more breakpoints as needed.
          }}
          className="mb-8 mt-16 w-full"
        >
          {teasers?.map((teaser) => {
            return (
              <SwiperSlide key={teaser.key}>
                <Trailer
                  thumbnail={teaser.key}
                  teaserName={teaser.name}
                  onClick={() => handleVideo(teaser.key)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <p className="mt-6 text-[1.5rem] font-medium dark:text-dark-grey-500">
          Oh oh! There is no trailers to display
        </p>
      )}
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        resetVideoState={resetVideoState}
      />
    </section>
  );
};

export default TrailerSection;
