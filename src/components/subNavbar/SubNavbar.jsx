import React from "react";
import "./subNavbar.css";
const SubNavbar = ({ genres }) => {
  return (
    <ul className="subNavbar">
      {genres.map((genre) => {
        return (
          <li>
            <button className="btn" key={genre.id} href="#">
              {genre.name}
            </button>
          </li>
        ); // Add fetch movies by genre
      })}
    </ul>
  );
};

export default SubNavbar;
