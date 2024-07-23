import { useBookmarks } from "../../context/BookmarksContext";
import MediaCard from "../../ui/MediaCard";
import Title from "./Title";

const BookmarkedTVs = () => {
  const { bookmarks } = useBookmarks();
  const bookmarkedTVs = bookmarks?.filter(
    (bookmark) => bookmark.mediaType === "tv",
  );

  return (
    <div className="flex flex-col gap-8">
      <Title value={"TV shows"} />
      {bookmarkedTVs && bookmarkedTVs.length > 0 ? (
        <div className="grid grid-cols-6 gap-x-6 gap-y-8 miniDesktop:grid-cols-5 PC:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2">
          {bookmarkedTVs.map((bookmark, index) => (
            <MediaCard
              mediaData={bookmark.mediaData}
              mediaType={bookmark.mediaType}
              key={index}
            />
          ))}
        </div>
      ) : (
        <p className="text-xl font-medium text-grey-800 dark:text-dark-grey-800">
          No bookmarks available for TV shows, try exploring
        </p>
      )}
    </div>
  );
};

export default BookmarkedTVs;
