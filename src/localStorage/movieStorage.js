export const setUpComingMoviesLocal = (movies) => {
  window.localStorage.setItem("popularMovies", JSON.stringify(movies));
};
export const getUpComingMoviesLocal = () => {
  return window.localStorage.getItem("popularMovies");
};

export const setPopularMoviesLocal = (movies) => {
  window.localStorage.setItem("popularMovies", JSON.stringify(movies));
};
export const getPopularMoviesLocal = () => {
  return window.localStorage.getItem("popularMovies");
};

export const setSelectedMovieStorage = (movie) => {
  window.localStorage.setItem("selectedMovie", JSON.stringify(movie));
};
export const getSelectedMovieStorage = () => {
  return JSON.parse(window.localStorage.getItem("selectedMovie"));
};
