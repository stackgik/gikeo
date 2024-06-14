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

  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return <Spinner />;

  return (
    <>
      <DetailsOverviewContainer>
        <div className="flex w-[1300px] items-center gap-8">
          <DetailsTumbnail />
          <QuickOverview />
        </div>
      </DetailsOverviewContainer>

      <section className="mx-auto my-32 grid w-[1300px] grid-cols-[1fr_1fr_1fr] gap-6">
        <Casts />
        <div className="col-start-3 row-start-1 row-end-4 flex h-max flex-col gap-16">
          <OtherFilmDetails />
          <PhotoGallery />
        </div>
        <Reviews />
        <TrailerSection />
      </section>

      <SimilarMedia />
    </>
  );
};

export default MovieDetails;
