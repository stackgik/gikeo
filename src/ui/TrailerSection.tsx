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

  return (
    <section className="swiper-container">
      <Tag>Official Trailers</Tag>
      <Swiper
        loop={false}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={2.3}
        className="mb-8 mt-16 w-full"
      >
        {teasers !== undefined && teasers.length > 0 ? (
          teasers?.map((teaser) => (
            <SwiperSlide key={teaser.key}>
              <Trailer
                thumbnail={teaser.key}
                teaserName={teaser.name}
                onClick={() => handleVideo(teaser.key)}
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="mt-6 text-[1.5rem] font-medium dark:text-dark-grey-500">
            Oh oh! There is no trailers to display
          </p>
        )}
      </Swiper>
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
