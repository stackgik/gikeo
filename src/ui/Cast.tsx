type CastProps = {
  imgSrc: string;
  name: string;
  character: string;
};
const Cast = ({ imgSrc, name, character }: CastProps) => {
  return (
    <article className="w-full overflow-hidden rounded-md border border-grey-100 dark:border-dark-grey-100 text-grey-800 dark:text-dark-grey-800 shadow-sm">
      <img src={imgSrc} alt="" className="w-full h-[15rem] object-cover" />
      <div className="flex flex-col gap-4 p-6 bg-transparent">
        <h3 className="text-[1.3rem] font-semibold">{name}</h3>
        <span className="text-[1.3rem]">{character}</span>
      </div>
    </article>
  );
};

export default Cast;
