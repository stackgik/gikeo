import { useBookmarks } from "../../context/BookmarksContext";
import MediaCard from "../../ui/MediaCard";
import Title from "./Title";

const BookmarkedMovies = () => {
  const { bookmarks } = useBookmarks();
  const bookmarkedMovies =
    bookmarks?.length > 0
      ? bookmarks.filter((bookmark) => bookmark.mediaType === "movie")
      : undefined;

  return (
    <div className="flex flex-col gap-8">
      <Title value={"Movies"} />

      <div className="grid grid-cols-5 gap-x-6 gap-y-8">
        {bookmarkedMovies ? (
          bookmarkedMovies.map((bookmark) => (
            <MediaCard
              mediaData={bookmark.mediaData}
              mediaType={bookmark.mediaType}
            />
          ))
        ) : (
          <p className="text-2xl font-bold text-grey-800 dark:text-dark-grey-800">
            No bookmarks available for movies, try exploring
          </p>
        )}
      </div>
    </div>
  );
};

export default BookmarkedMovies;
