import axios from "axios";

const url = process.env.REACT_APP_MOCK_API_URL;
export const mockApi = axios.create({
  baseURL: url,
});

export const fetchAllUsers = async () => {
  try {
    const response = await mockApi.get("/movieAppUsers");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id, email) => {
  try {
    const response = await mockApi.get(`/movieAppUsers/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (user) => {
  user["watchList"] = [];

  try {
    const response = await mockApi.post(`/movieAppUsers`, user);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addToUserWatchList = async (email, movie) => {
  //edit first get userMovies that already declared
  try {
    const users = await fetchAllUsers();
    const user = users.find((user) => user.email === email);
    const userWatchList = user.watchList;
    const isMovieExists = userWatchList.find((userMovie) => {
      return userMovie.id === movie.id;
    });
    if (!isMovieExists) userWatchList.push(movie);
    const response = await mockApi.put(`/movieAppUsers/${user.id}`, {
      watchList: userWatchList,
    });
    // return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeMovieFromWatchList = async (email, movie) => {
  //edit first get userMovies that already declared
  try {
    const users = await fetchAllUsers();
    const user = users.find((user) => user.email === email);
    const userWatchList = user.watchList;
    const newWatchListArray = userWatchList.filter((userMovie) => {
      return userMovie.id !== movie.id;
    });
    const response = await mockApi.put(`/movieAppUsers/${user.id}`, {
      watchList: newWatchListArray,
    });

    return response.data.watchList;
  } catch (error) {
    console.log(error);
  }
};
