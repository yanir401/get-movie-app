import React from "react";
import "./subNavbar.css";
const SubNavbar = ({ genres }) => {
  return (
    <ul className="subNavbar">
      {genres.map((genre) => {
        return (
          <li key={genre.id}>
            <a className="btn" href="https://www.google.com/">
              {genre.name}
            </a>
          </li>
        ); // Add fetch movies by genre
      })}
    </ul>
  );
};

export default SubNavbar;
