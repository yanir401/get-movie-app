import React, { useContext } from "react";
import ListItem from "./ListItem";
import "./renderList.css";

import { SelectedMovieContext } from "../../context/moviesContext";
import { setMainMovies } from "../../localStorage/movieStorage";
const RenderList = ({ movies }) => {
  const { setSelectedMovie, contextMovies } = useContext(SelectedMovieContext);

  return (
    <div className="movies-list">
      {movies.map((movie) => {
        return <ListItem movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default RenderList;
