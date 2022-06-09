import React, { useContext } from "react";
import { SelectedMovieContext } from "../../context/moviesContext";
import "./subNavbar.css";
const SubNavbar = ({ genres }) => {
  const { selectedGenre, setSelectedGenre } = useContext(SelectedMovieContext);
  return (
    <ul className="subNavbar">
      {genres.map((genre) => {
        return (
          <li key={genre.id}>
            <a className="btn" onClick={() => setSelectedGenre(genre)}>
              {genre.name}
            </a>
          </li>
        ); // Add fetch movies by genre
      })}
    </ul>
  );
};

export default SubNavbar;
