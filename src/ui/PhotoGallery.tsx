import useMovieDetails from "../features/movies/useMovieDetails";
import GalleryImage from "./GalleryImage";
import Tag from "./Tag";

const PhotoGallery = () => {
  const { movieDetails } = useMovieDetails();

  const { imagesData } = movieDetails || {};
  const imageURLs = imagesData?.posters?.flat().slice(0, 4);
  const imageCount = imageURLs?.length ?? 0;

  return (
    <section className="flex flex-col gap-16">
      <Tag>Photogallery</Tag>

      {!imageCount ? (
        <p className="mx-6 mt-6 text-[1.5rem] font-medium dark:text-dark-grey-500">
          Oh oh! There is no photos to display
        </p>
      ) : (
        <div
          className={`grid desktop:gap-8 ${imageCount <= 2 ? "h-[250px]" : "h-[500px]"} grid-cols-2 gap-2 grid-rows-${imageCount <= 2 ? "1" : "2"}`}
        >
          {imageURLs?.map((el, index) => (
            <GalleryImage
              src={`https://image.tmdb.org/t/p/original/${el.file_path}`}
              alt={"hold on a minute"}
              key={index}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
