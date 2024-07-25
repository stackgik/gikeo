type CastProps = {
  imgSrc: string;
  name: string;
  character: string;
};
const Cast = ({ imgSrc, name, character }: CastProps) => {
  return (
    <article className="w-full overflow-hidden rounded-md border border-grey-100 text-grey-800 shadow-sm dark:border-dark-grey-100 dark:text-dark-grey-800">
      <img
        src={imgSrc}
        alt=""
        className="h-[20rem] w-full object-cover object-top"
      />
      <div className="flex flex-col gap-4 bg-transparent p-6">
        <h3 className="text-[1.4rem] font-semibold">{name}</h3>
        <span className="text-[1.3rem]">{character}</span>
      </div>
    </article>
  );
};

export default Cast;
