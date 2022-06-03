import React from "react";
import Navbar from "../../components/navBar/Navbar";
import SearchBar from "../../components/searchBar/SearchBar";
import SubNavbar from "../../components/subNavbar/SubNavbar";
import "./header.css";

const Header = ({ genres }) => {
  return (
    <>
      <div className="header">
        <div className="navbar">
          <Navbar />

          <SearchBar />
        </div>
      </div>
      {genres && <SubNavbar genres={genres} />}
    </>
  );
};

export default Header;
