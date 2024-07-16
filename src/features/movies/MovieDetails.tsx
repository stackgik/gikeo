import Casts from "../../ui/Casts";
import DetailsOverviewContainer from "../../ui/DetailsOverviewContainer";
import DetailsTumbnail from "../../ui/DetailsTumbnail";
import OtherFilmDetails from "../../ui/OtherFilmDetails";
import PhotoGallery from "../../ui/PhotoGallery";
import QuickOverview from "../../ui/QuickOverview";
import Reviews from "../../ui/Reviews";
import SimilarMedia from "../../ui/SimilarMedia";
import Spinner from "../../ui/Spinner";
import TrailerSection from "../../ui/TrailerSection";
import useMovieDetails from "./useMovieDetails";

const MovieDetails = () => {
  // prettier-ignore
  const { isMovieDetailsLoading, movieDetailsError } = useMovieDetails();

  if (movieDetailsError)
    return (
      <p className="mt-12 text-center text-[1.3rem] font-medium dark:text-dark-grey-500">
        {movieDetailsError.message}
      </p>
    );

  if (isMovieDetailsLoading)
    return (
      <div className="mx-auto flex w-fit flex-col">
        <Spinner />{" "}
        <span className="text-[1.3rem] font-medium dark:text-dark-grey-500">
          Loading media details...
        </span>
      </div>
    );

  return (
    <div className="pb-28">
      <DetailsOverviewContainer>
        <div className="flex w-custom-min-width gap-8">
          <DetailsTumbnail />
          <QuickOverview />
        </div>
      </DetailsOverviewContainer>

      <section className="mx-auto my-32 grid w-custom-min-width grid-cols-[70%_30%] gap-6">
        <div className="grid h-fit grid-cols-1 gap-8">
          <Casts />
          <Reviews />
          <TrailerSection />
        </div>

        <div className="grid h-fit grid-cols-1 gap-24">
          <OtherFilmDetails />
          <PhotoGallery />
        </div>
      </section>

      <SimilarMedia />
    </div>
  );
};

export default MovieDetails;
