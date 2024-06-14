import { ReactNode } from 'react';

type GenreProps = {
  children: ReactNode;
  type?: string;
};

const Genre = ({ children, type }: GenreProps) => {
  return (
    <span
      className={`${
        type === 'others'
          ? 'text-grey-600 dark:text-dark-grey-600'
          : 'text-grey-400'
      } py-1 px-4 border border-grey-600 uppercase text-[1rem] tracking-widest font-bold`}
    >
      {children}
    </span>
  );
};

export default Genre;
