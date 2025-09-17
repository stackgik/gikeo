import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ICircularRating {
  rating: number;
}

const CircularRating = ({ rating }: ICircularRating) => {
  return (
    <div className="circleRating rounded-full bg-grey-900 p-0.5">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={`${rating}`}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: "30px",
        })}
      />
    </div>
  );
};

export default CircularRating;
