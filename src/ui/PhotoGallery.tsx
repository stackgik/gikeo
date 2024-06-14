import useMovieDetails from "../features/movies/useMovieDetails";
import GalleryImage from "./GalleryImage";
import Tag from "./Tag";

const PhotoGallery = () => {
  const tracks = [
    "row-start-1 col-start-1 col-span-2",
    "row-start-1 col-start-3 row-span-2",
    "row-start-2 col-start-1",
    "row-start-2 col-start-2",
    "row-start-3 col-start-1 col-span-3",
  ];

  // prettier-ignore
  const {movieDetails, isMovieDetailsLoading, movieDetailsError} = useMovieDetails();
  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";

  const { imagesData } = movieDetails || {};
  const imageURLs = imagesData?.posters.flat().slice(0, 5);

  return (
    <section>
      <Tag>Photogallery</Tag>

      <div className="mt-16 grid grid-cols-[150px_120px_180px] grid-rows-[130px_170px_200px] gap-2">
        {imageURLs?.map((el, index) => (
          <GalleryImage
            src={`https://image.tmdb.org/t/p/original/${el.file_path}`}
            alt={"hold on a minute"}
            className={tracks[index]}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
