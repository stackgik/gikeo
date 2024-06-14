import { useBanner } from "./useBanner";
import SkeletonBanner from "../../ui/SkeletonBanner";

const Banner = () => {
  const { bannerData, isBannerDataLoading, isBannerError } = useBanner();

  if (isBannerError) return <p>Failed to load banner data</p>;

  const bannerBackdrops = bannerData?.results;
  const randomNumber = bannerBackdrops
    ? Math.floor(Math.random() * bannerBackdrops.length)
    : 0;
  const selectedBackdrop = bannerBackdrops
    ? bannerBackdrops[randomNumber]
    : null;

  return isBannerDataLoading ? (
    <SkeletonBanner />
  ) : (
    <div
      className="flex h-[50rem] w-full items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(
            rgba(17, 24, 39, 0.85),
            rgba(17, 24, 39, 0.85)
          ), url(https://image.tmdb.org/t/p/original/${selectedBackdrop?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <h1 className="flex flex-col gap-16 text-grey-0">
        <p className="text-center text-[6rem]">Welcome.</p>
        <p className="text-center text-[2rem]">
          Millions of movies and TV shows to discover. Start exploring...
        </p>
      </h1>
    </div>
  );
};

export default Banner;
