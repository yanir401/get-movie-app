import React from "react";
import RenderList from "../../components/list/RenderList";
import "./main.css";
const Main = ({ movies, title }) => {
  return (
    <div className="main">
      <h2 className="movie-list-title">{title.toUpperCase()}</h2>
      {movies ? (
        <RenderList movies={movies} />
      ) : (
        <h2 style={{ color: "white" }}>Loading</h2>
      )}
    </div>
  );
};

export default Main;
