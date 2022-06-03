import React, { useEffect, useState } from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/footer/Footer";
import {
  getPopularMovies,
  getUpComingMovies,
  getMovieGenres,
  // searchMovie,
} from "../api/movieDb/movieDb";
import Main from "../layout/main/Main";
// import SearchBar from "../components/searchBar/SearchBar";
// import SubNavbar from "../components/subNavbar/SubNavbar";

export default function HomePage() {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState();
  const [upComingMovie, setUpComingMovie] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const data = await getPopularMovies();
      setMovies(data.results);
    };
    const getGenres = async () => {
      const data = await getMovieGenres();
      setGenres(data);
    };
    const getUpComing = async () => {
      const data = await getUpComingMovies();
      console.log(data);
      setUpComingMovie(data.results);
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
