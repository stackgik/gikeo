import { formatLongText } from "../utils/formatLongText";
import { FilmRating } from "./FilmRating";
import { MAXWORDCOUNT } from "../constant/wordCount";

type ReviewProps = {
  rating: number;
  review: string;
  author: string;
};

const Review = ({ rating, review, author }: ReviewProps) => {
  return (
    <article className="w-full overflow-hidden rounded-md border border-grey-100 p-8 text-grey-800 shadow-sm dark:border-dark-grey-100 dark:bg-dark-grey-50 dark:text-dark-grey-800">
      <header className="mb-8 flex items-center justify-between">
        <span className="text-[1.6rem] font-semibold">{author}</span>
        <FilmRating rating={rating} />
      </header>

      <div>
        <p className="text-[1.4rem] leading-[1.9] text-grey-800 dark:text-dark-grey-800">
          {formatLongText(review, MAXWORDCOUNT)}
        </p>
      </div>
    </article>
  );
};

export default Review;
