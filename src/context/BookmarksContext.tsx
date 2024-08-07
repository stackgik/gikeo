import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IBookmarksContext {
  bookmarks: MediaDataProps[];
  addBookmark: (media: MediaDataProps) => void;
  removeBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
}
const BookmarksContext = createContext<IBookmarksContext | undefined>(
  undefined,
);

const BookmarksProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<MediaDataProps[]>(() => {
    const storedBookmarks: MediaDataProps[] = JSON.parse(
      localStorage.getItem("bookmarks") || "[]",
    );
    return storedBookmarks;
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = ({ mediaData, mediaType }: MediaDataProps) => {
    setBookmarks((prev) => [...prev, { mediaData, mediaType }]);
  };

  const removeBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.filter((bookmark) => bookmark.mediaData.id !== id),
    );
  };

  const isBookmarked = (id: number) => {
    return bookmarks.some((bookmark) => bookmark.mediaData.id === id);
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};

const useBookmarks = () => {
  const context = useContext(BookmarksContext);

  if (context === undefined)
    throw new Error("BookmarkContext was used outside the BookmarkProvider");

  return context;
};

export { useBookmarks, BookmarksProvider };
