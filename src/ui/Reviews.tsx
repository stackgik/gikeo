import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Review from "./Review";
import Tag from "./Tag";
import useMovieDetails from "../features/movies/useMovieDetails";
// import Spinner from "./Spinner";

const Reviews = () => {
  // prettier-ignore
  const { movieDetails, isMovieDetailsLoading, movieDetailsError } = useMovieDetails();

  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";
  if (!movieDetails) return "blah blah blah";

  const { reviewsData } = movieDetails;
  const reviews = reviewsData.results;

  return (
    <section className="swiper-container">
      <Tag>Reviews</Tag>

      {reviews.length > 0 ? (
        <Swiper
          loop={false}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1.3}
          pagination={{ el: ".swiper-pagination1", clickable: true }}
          navigation={{
            nextEl: "#next2",
            prevEl: "#prev2",
          }}
          modules={[Navigation, Pagination]}
          className="mb-8 mt-16 w-full"
        >
          {reviews.length > 0 &&
            reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Review
                  author={
                    review.author_details.name ||
                    review.author_details.username ||
                    "Anonymous"
                  }
                  review={review.content}
                  rating={review.author_details.rating}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <p className="mt-6 text-[1.5rem] font-medium dark:text-dark-grey-500">
          Oh oh! There is no reviews to display
        </p>
      )}

      {reviews.length > 1 && (
        <div className="slider-controller mx-auto flex w-max items-center justify-center gap-8">
          <div className="swiper-button" role="button" id="prev2">
            <HiOutlineChevronLeft />
          </div>
          <div className="swiper-pagination1 flex gap-3"></div>
          <div className="swiper-button" role="button" id="next2">
            <HiOutlineChevronRight />
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
