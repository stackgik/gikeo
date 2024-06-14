import { createContext } from 'react';

const MovieDetailsProvider = () => {
  const movieDetailsContext = createContext();
  return <div>MovieDetailsContext</div>;
};

export default MovieDetailsProvider;
