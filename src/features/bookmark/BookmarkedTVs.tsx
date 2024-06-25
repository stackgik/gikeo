import { useBookmarks } from "../../context/BookmarksContext";
import MediaCard from "../../ui/MediaCard";
import Title from "./Title";

const BookmarkedTVs = () => {
  const { bookmarks } = useBookmarks();
  const bookmarkedTVs =
    bookmarks?.length > 0
      ? bookmarks.filter((bookmark) => bookmark.mediaType === "tv")
      : undefined;

  return (
    <div className="flex flex-col gap-8">
      <Title value={"TV shows"} />
      <div className="grid grid-cols-5 gap-x-6 gap-y-8">
        {bookmarkedTVs ? (
          bookmarkedTVs.map((bookmark) => (
            <MediaCard
              mediaData={bookmark.mediaData}
              mediaType={bookmark.mediaType}
            />
          ))
        ) : (
          <p className="text-2xl font-bold text-grey-800 dark:text-dark-grey-800">
            No bookmarks available for TV shows, try exploring
          </p>
        )}
      </div>
    </div>
  );
};

export default BookmarkedTVs;
