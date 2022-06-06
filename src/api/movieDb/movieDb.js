import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

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
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSelectedMovie = async (id) => {
  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}${API_KEY}&append_to_response=videos,images`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
