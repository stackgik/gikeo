import { HiBookmark, HiOutlineBookmark } from "react-icons/hi2";
import { useBookmarks } from "../../context/BookmarksContext";

const Bookmark = ({ mediaData, mediaType }: MediaDataProps) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const handleBookmark = () => {
    if (isBookmarked(mediaData.id)) {
      removeBookmark(mediaData.id);
    } else {
      addBookmark({ mediaData, mediaType });
    }
  };

  return (
    <div
      className="group absolute right-[20px] top-[15px] flex aspect-square h-[2.4rem] cursor-pointer items-center justify-center rounded-full bg-grey-700 text-[13px] transition-all duration-300"
      role="button"
    >
      {isBookmarked(mediaData.id) ? (
        <HiBookmark className="fill-grey-0" onClick={handleBookmark} />
      ) : (
        <HiOutlineBookmark
          className="stroke-grey-0 stroke-2"
          onClick={handleBookmark}
        />
      )}
    </div>
  );
};

export default Bookmark;
