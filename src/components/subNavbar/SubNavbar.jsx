import React from "react";
import "./subNavbar.css";
const SubNavbar = ({ genres }) => {
  return (
    <ul className="subNavbar">
      {genres.map((genre) => {
        return (
          <li>
            <a className="btn" key={genre.id} href="#">
              {genre.name}
            </a>
          </li>
        ); // Add fetch movies by genre
      })}
    </ul>
  );
};

export default SubNavbar;
