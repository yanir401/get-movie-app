import React from "react";
import ListItem from "./ListItem";
import "./renderList.css";

const RenderList = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => {
        return <ListItem movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default RenderList;
