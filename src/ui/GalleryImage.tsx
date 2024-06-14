interface IGalleryImage {
  src: string;
  alt: string;
  className: string;
}

const GalleryImage = ({ src, alt, className }: IGalleryImage) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className} object-top`}
    />
  );
};

export default GalleryImage;
