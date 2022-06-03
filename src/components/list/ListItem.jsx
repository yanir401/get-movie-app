import React from "react";
import "./listItem.css";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ListItem = ({ movie }) => {
  // console.log(parseInt(movie.vote_average));
  return (
    <Link
      to={{
        pathname: `/movie:${movie.id}`,
        movie: movie,
      }}
    >
      <div className="card">
        <img
          src={` https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt=""
        />
        <div className="card-overlay">
          <h4>{movie.original_title}</h4>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average !== 0 ? movie.vote_average : null}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
