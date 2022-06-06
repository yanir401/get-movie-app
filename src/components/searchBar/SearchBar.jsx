import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchMovie } from "../../api/movieDb/movieDb";
import { setSelectedMovieStorage } from "../../localStorage/movieStorage";

import "./searchBar.css";
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState();

  const searchForMovie = async () => {
    const results = await searchMovie(inputValue);
    setSearchResults(results);
  };

  useEffect(() => {
    if (inputValue.length >= 1) {
      const timeOutId = setTimeout(() => {
        searchForMovie();
      }, 600);
      return () => {
        clearTimeout(timeOutId);
      };
    } else setSearchResults();
  }, [inputValue]);

  const renderResults = () => {
    return searchResults.map((movie) => {
      return (
        <>
          <Link
            onClick={() => {
              setSelectedMovieStorage(movie);
            }}
            className="scroll-item"
            to={{
              pathname: `/movie/${movie.id}`,
              movie: movie,
            }}
          >
            <p className="movie-result-title"> {movie.original_title}</p>
            <img
              src={` https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt=""
            />
          </Link>
        </>
      );
    });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input-search"
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <div className="result-scroll">{searchResults && renderResults()}</div>
    </div>
  );
};

export default SearchBar;
