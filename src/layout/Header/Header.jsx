import React from "react";

import Navbar from "../../components/navBar/Navbar";
import SearchBar from "../../components/searchBar/SearchBar";
import SubNavbar from "../../components/subNavbar/SubNavbar";
import UserDetails from "../../components/userDetails/UserDetails";
import WatchList from "../../components/watchList/WatchList";
import "./header.css";

const Header = ({ genres }) => {
  return (
    <>
      <div className="header">
        <div className="navbar">
          <Navbar />
          <WatchList />
          <SearchBar />
        </div>
      </div>
      <div className="subNavbar-container">
        {genres && <SubNavbar genres={genres} />}
      </div>
    </>
  );
};

export default Header;
