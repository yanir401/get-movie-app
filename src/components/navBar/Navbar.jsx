import React from "react";
import "./navbar.css";
import { RiMovie2Fill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="logo">
      <RiMovie2Fill size="2rem" />
      <h2>GETMOVIE</h2>
    </div>
  );
};

export default Navbar;
