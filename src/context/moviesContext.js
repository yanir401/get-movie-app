import { createContext, useState } from "react";

export const SelectedMovieContext = createContext();

const SelectedMovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [contextMovies, setContextMovies] = useState([]);
  return (
    <SelectedMovieContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        contextMovies,
        setContextMovies,
      }}
    >
      {children}
    </SelectedMovieContext.Provider>
  );
};

export default SelectedMovieProvider;
