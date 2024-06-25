import BookmarkedMovies from "../features/bookmark/BookmarkedMovies";
import BookmarkedTVs from "../features/bookmark/BookmarkedTVs";

const Bookmark = () => {
  return (
    <main className="mx-auto flex w-[130rem] flex-col gap-12 py-8">
      <BookmarkedTVs />
      <BookmarkedMovies />
    </main>
  );
};

export default Bookmark;
