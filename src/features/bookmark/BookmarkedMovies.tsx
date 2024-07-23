import { useBookmarks } from "../../context/BookmarksContext";
import MediaCard from "../../ui/MediaCard";
import Title from "./Title";

const BookmarkedMovies = () => {
  const { bookmarks } = useBookmarks();
  const bookmarkedMovies = bookmarks?.filter(
    (bookmark) => bookmark.mediaType === "movie",
  );

  return (
    <div className="flex flex-col gap-8">
      <Title value={"Movies"} />
      {bookmarkedMovies && bookmarkedMovies.length > 0 ? (
        <div className="grid grid-cols-6 gap-x-6 gap-y-8 miniDesktop:grid-cols-5 PC:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2">
          {bookmarkedMovies.map((bookmark, index) => (
            <MediaCard
              mediaData={bookmark.mediaData}
              mediaType={bookmark.mediaType}
              key={index}
            />
          ))}
        </div>
      ) : (
        <p className="text-xl font-medium text-grey-800 dark:text-dark-grey-800">
          No bookmarks available for movies, try exploring
        </p>
      )}
    </div>
  );
};

export default BookmarkedMovies;
