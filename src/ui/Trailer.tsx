import Img from './Img';
import PlayButton from './PlayButton';

type TrailerProps = {
  thumbnail: string;
  teaserName: string;
  onClick?: () => void;
};

const Trailer = ({ thumbnail, teaserName, onClick }: TrailerProps) => {
  return (
    <article className="thumbnail relative h-[20rem]" onClick={onClick}>
      <Img
        src={`https://img.youtube.com/vi/${thumbnail}/mqdefault.jpg`}
        alt={teaserName}
      />
      <div className="playIconContainer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <PlayButton />
      </div>
    </article>
  );
};

export default Trailer;
