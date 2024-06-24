import { useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi2";
import { type MediaDataProps } from "../../ui/MediaCard";

const Bookmark = ({ mediaData, mediaType }: MediaDataProps) => {
  const [bookmarks, setBookmarks] = useState<MediaDataProps[]>([]);

  const handleBookmark = () => {
    setBookmarks((prev) => [...prev, { mediaData, mediaType }]);
  };

  console.log(bookmarks);

  return (
    <div
      className="group absolute right-[20px] top-[15px] flex aspect-square h-[2.4rem] cursor-pointer items-center justify-center rounded-full bg-grey-700 text-[13px] transition-all duration-300 hover:bg-grey-0"
      role="button"
    >
      <HiOutlineBookmark
        className="stroke-grey-0 stroke-2 group-hover:stroke-grey-700"
        onClick={handleBookmark}
      />
    </div>
  );
};

export default Bookmark;
