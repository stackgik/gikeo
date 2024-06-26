import BookmarkedMovies from "../features/bookmark/BookmarkedMovies";
import BookmarkedTVs from "../features/bookmark/BookmarkedTVs";

const Bookmark = () => {
  return (
    <main className="w-custom-min-width mx-auto flex flex-col gap-12 py-8">
      <BookmarkedTVs />
      <BookmarkedMovies />
    </main>
  );
};

export default Bookmark;
