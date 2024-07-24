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
          <div className="tablet:hidden">
            <QuickOverview />
          </div>
        </div>
      </DetailsOverviewContainer>

      <div className="bg-grey-50 px-8 py-16 dark:bg-dark-grey-50">
        <QuickOverview />
      </div>

      <section className="mx-auto my-32 grid w-custom-min-width grid-cols-[70%_30%] gap-6 desktop:grid-cols-1 desktop:gap-y-12">
        {/* One for the tablet and mobile screens */}
        <div className="hidden desktop:grid desktop:h-fit desktop:grid-cols-2 desktop:items-center desktop:gap-24 tablet:gap-8 mobile:grid-cols-1 mobile:gap-12">
          <OtherFilmDetails />
          <PhotoGallery />
        </div>

        <div className="grid h-fit grid-cols-1 gap-8">
          <Casts />
          <Reviews />
          <TrailerSection />
        </div>

        {/* One for big screen */}
        <div className="grid h-fit grid-cols-1 gap-24 desktop:hidden desktop:grid-cols-2">
          <OtherFilmDetails />
          <PhotoGallery />
        </div>
      </section>

      <SimilarMedia />
    </div>
  );
};

export default MovieDetails;
