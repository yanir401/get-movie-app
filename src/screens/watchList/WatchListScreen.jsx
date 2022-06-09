import React, { useEffect, useState } from "react";
import {
  fetchAllUsers,
  removeMovieFromWatchList,
} from "../../api/mockApi/mockApi";
import { fetchSelectedMovie } from "../../api/movieDb/movieDb";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { FiTrash2 } from "react-icons/fi";

import "./watchList.css";
import { useNavigate } from "react-router-dom";
const WatchListScreen = () => {
  const [watchList] = useLocalStorage("watchList");
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();
  const [moviesWatchList, setMoviesWatchList] = useState();
  const [user] = useLocalStorage("userAuth");
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchMovie();
  //   console.log("change");
  // }, []);

  useEffect(() => {
    const getUser = async () => {
      const users = await fetchAllUsers();
      const foundUser = users.find(
        (userFromApi) => userFromApi.email === user.email
      );
      setMoviesWatchList(foundUser.watchList);
      setSelectedMovie(foundUser.watchList[0]);
      fetchMovie(foundUser.watchList[0]);
      // console.log(foundUser.watchList);
    };
    getUser();
  }, []);

  const fetchMovie = async (movie) => {
    if (movie) {
      const response = await fetchSelectedMovie(movie.id);
      if (response.videos.results.length !== 0)
        setShowTrailer(response.videos.results[0].key);
    }
  };

  const handleMovieSelected = (movie) => {
    setSelectedMovie(movie);
    fetchMovie(movie);
  };

  const handleRemoveMovie = async (movie) => {
    const newWatchListArray = await removeMovieFromWatchList(user.email, movie);
    setMoviesWatchList(newWatchListArray);
    setSelectedMovie(newWatchListArray[0]);
    fetchMovie(newWatchListArray[0]);
  };
  const playList = () => {
    if (moviesWatchList)
      return moviesWatchList.map((movie) => {
        return (
          <div className="movie-item" key={movie.id}>
            <a
              className="play-list-item"
              onClick={() => handleMovieSelected(movie)}
            >
              <img
                src={` https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={`${movie.title}`}
              />
              <h3>{movie.title}</h3>
            </a>
            <FiTrash2
              className="icon"
              onClick={() => handleRemoveMovie(movie)}
            />
          </div>
        );
      });
  };
  return (
    selectedMovie && (
      <div
        className="play-list-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path})`,
          transition: "all 0.7s",
        }}
      >
        <div className="play-list">{playList()}</div>
        {showTrailer && (
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${showTrailer}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        )}
        <button className="btn back-btn " onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    )
  );
};

export default WatchListScreen;
