import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ICircularRating {
  rating: number;
}

const CircularRating = ({ rating }: ICircularRating) => {
  return (
    <div className="circleRating bg-grey-900 rounded-full p-[2px]">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={`${rating}`}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
        })}
      />
    </div>
  );
};

export default CircularRating;
