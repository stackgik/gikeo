import { Link } from "react-router-dom";
import { formatLongText } from "../utils/formatLongText";
import { FilmRating } from "./FilmRating";
import { MAXWORDCOUNT } from "../constant/wordCount";

type ReviewProps = {
  rating: number;
  review: string;
  author: string;
};

const Review = ({ rating, review, author }: ReviewProps) => {
  const wordCount = review.split(" ").length;
  return (
    <article className="w-full overflow-hidden p-8 dark:bg-dark-grey-50 rounded-md border border-grey-100 dark:border-dark-grey-100 text-grey-800 dark:text-dark-grey-800 shadow-sm">
      <header className="flex items-center justify-between mb-8">
        <span className="text-[1.6rem] font-semibold">{author}</span>
        <FilmRating rating={rating} />
      </header>

      <div>
        <p className="leading-[1.9] text-[1.4rem] text-grey-800 dark:text-dark-grey-800">
          {formatLongText(review, MAXWORDCOUNT)}
          {wordCount > MAXWORDCOUNT && (
            <Link to="" className="text-brand-500 underline">
              read more
            </Link>
          )}
        </p>
      </div>
    </article>
  );
};

export default Review;
