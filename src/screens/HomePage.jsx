import React, { useContext, useEffect, useState } from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/footer/Footer";
import {
  getPopularMovies,
  getUpComingMovies,
  getMovieGenres,
  // searchMovie,
} from "../api/movieDb/movieDb";
import Main from "../layout/main/Main";
import { SelectedMovieContext } from "../context/moviesContext";
import {
  setMainMovies,
  setPopularMovies,
  setPopularMoviesLocal,
  setUpComingMoviesLocal,
} from "../localStorage/movieStorage";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function HomePage() {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();
  const [upComingMovie, setUpComingMovie] = useState([]);
  const { contextMovies, setContextMovies } = useContext(SelectedMovieContext);
  const [popularMoviesLocalStorage, setPopularMoviesLocalStorage] =
    useLocalStorage("popularMovies");
  const [upComingMovieLocal, setUpComingMovieLocal] =
    useLocalStorage("upComingMovies");

  useEffect(() => {
    const getPopular = async () => {
      const data = await getPopularMovies();
      setMovies(data.results);
      setContextMovies((contextMovies) => [...contextMovies, ...data.results]);
      // setPopularMoviesLocal(data.results);
      setPopularMoviesLocalStorage(data.results);
    };
    const getGenres = async () => {
      const data = await getMovieGenres();
      setGenres(data);
    };
    const getUpComing = async () => {
      const data = await getUpComingMovies();
      setUpComingMovie(data.results);
      setContextMovies((contextMovies) => [...contextMovies, ...data.results]);
      // setUpComingMoviesLocal(data.results);
      setUpComingMovieLocal(data.results);
    };

    getUpComing();
    getPopular();
    getGenres();
  }, []);

  return (
    <div>
      {movies && (
        <>
          <Header genres={genres} />
          <div className="container">
            <Main movies={movies} title={"Popular Movies"} />
            <Main movies={upComingMovie} title={"Up Coming Movies"} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
