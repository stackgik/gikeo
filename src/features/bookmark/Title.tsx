type TitleProp = {
  value: "TV shows" | "Movies";
};

const Title = ({ value }: TitleProp) => {
  return (
    <p className="text-4xl font-bold text-grey-800 dark:text-dark-grey-800">{`Bookmarked ${value}`}</p>
  );
};

export default Title;
