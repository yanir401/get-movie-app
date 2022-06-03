import React from "react";
import RenderList from "../../components/list/RenderList";
import "./main.css";
const Main = ({ movies, title }) => {
  return (
    <div className="main">
      <h2 className="movie-list-title">{title.toUpperCase()}</h2>
      <RenderList movies={movies} />
    </div>
  );
};

export default Main;
