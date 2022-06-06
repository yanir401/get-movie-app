import React, { useContext } from "react";
import "./listItem.css";
import { Link } from "react-router-dom";
import { SelectedMovieContext } from "../../context/moviesContext";
import { setSelectedMovieStorage } from "../../localStorage/movieStorage";
import { AiOutlineStar } from "react-icons/ai";

const ListItem = ({ movie }) => {
  const { setSelectedMovie, contextMovies } = useContext(SelectedMovieContext);
  // console.log(contextMovies.length);
  return (
    <Link
      onClick={() => {
        setSelectedMovieStorage(movie);
      }}
      to={{
        pathname: `/movie/${movie.id}`,
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
          <AiOutlineStar />

          <p>{movie.vote_average !== 0 ? movie.vote_average : null}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
