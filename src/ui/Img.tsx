import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type ImgProps = {
  alt: string;
  src: string;
};

const Img = ({ alt, src }: ImgProps) => (
  <LazyLoadImage alt={alt} effect="blur" src={src} />
);

export default Img;
