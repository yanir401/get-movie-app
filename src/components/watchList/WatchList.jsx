import React, { useContext, useEffect, useState } from "react";
import { RiFilmFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { WatchListContext } from "../../context/watchListContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./watchList.css";

const WatchList = () => {
  const state = useLocalStorage("watchList");
  const [watchListLength, setWatchListLength] = useState("");
  const { watchList } = useContext(WatchListContext);
  const [NumOfWatchList, setNumOfWatchList] = useState("");

  useEffect(() => {
    setNumOfWatchList(watchList);
  }, [watchList]);

  return (
    watchList.length > 0 && (
      <Link to="/watch-list">
        <div className="watch-list ">
          My Watch List
          <div className="num-of-watchList-container">
            <RiFilmFill size={"2.25rem"} />
            {NumOfWatchList && (
              <span className="num-of-watchList">{NumOfWatchList.length}</span>
            )}
          </div>
        </div>
      </Link>
    )
  );
};

export default WatchList;
