interface IGalleryImage {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: IGalleryImage) => {
  return (
    <div className="overflow-hidden rounded-md">
      <img
        src={src}
        alt={alt}
        className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-105"
      />
    </div>
  );
};

export default GalleryImage;
