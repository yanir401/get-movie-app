import axios from "axios";

const API_KEY = "?api_key=9347d37f128e9d7f9f301986f52e323b";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getUpComingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming${API_KEY}&page=2`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieGenres = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/list${API_KEY}`
    );

    return response.data.genres;
  } catch (error) {
    console.log(error);
  }
};
export const searchMovie = async (query) => {
  console.log("searching");
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

// export { getPopularMovies, getMovieGenres };
// export default getMovieGenres;