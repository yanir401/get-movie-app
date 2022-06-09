import React from "react";
import "./navbar.css";
import { RiMovie2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate("/")}>
      <RiMovie2Fill size="2.15rem" />
      <h2>GETMOVIE</h2>
    </div>
  );
};

export default Navbar;
