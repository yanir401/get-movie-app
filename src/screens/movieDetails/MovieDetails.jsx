import React from "react";
// import { Link } from "react-router-dom";
// import ListItem from "../components/list/ListItem";
import "./movieDetails.css";

const MovieDetails = ({ history, location: { movie } }) => {
  console.log(history, movie);

  return (
    <div className="movie-details">
      <img
        src={` https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        alt=""
      />
      <div className="movie-content">
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
        <h4>{movie.vote_average}</h4>
        <button className="btn" onClick={() => history.goBack()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
