import { createContext, useState } from "react";

export const SelectedMovieContext = createContext();

const SelectedMovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [contextMovies, setContextMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();
  return (
    <SelectedMovieContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        contextMovies,
        setContextMovies,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {children}
    </SelectedMovieContext.Provider>
  );
};

export default SelectedMovieProvider;
