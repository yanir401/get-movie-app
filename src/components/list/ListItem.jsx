import React, { useContext, useReducer, useState } from "react";
import "./listItem.css";
import { Link } from "react-router-dom";
import { SelectedMovieContext } from "../../context/moviesContext";
import { setSelectedMovieStorage } from "../../localStorage/movieStorage";
import { AiFillStar, AiFillPlusSquare } from "react-icons/ai";
import { WatchListContext } from "../../context/watchListContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addToUserWatchList } from "../../api/mockApi/mockApi";
import { UserContext } from "../../context/userContext";

const buttonState = {
  btnText: "Add To Watchlist",
  color: "#f2652a",
};
const ListItem = ({ movie }) => {
  const { setSelectedMovie, contextMovies } = useContext(SelectedMovieContext);
  const { addMovieToWatchList, watchList } = useContext(WatchListContext);
  const [user] = useLocalStorage("userAuth");
  const [btnState, setBtnState] = useState(buttonState);

  const [addedSuccessfully, setAddedSuccessfully] =
    useState("Add To Watchlist");

  const addToWatchListAPI = async (movie) => {
    const response = await addToUserWatchList(user.email, movie);
  };
  const addToWatchList = () => {
    const isExists = watchList.find(
      (movieElement) => movieElement.id === movie.id
    );
    if (!isExists) {
      addMovieToWatchList(movie);
      setBtnState({ btnText: "Added To Watchlist", color: "green" });
      resetBtnState();
    } else {
      setBtnState({ btnText: "Already in Watchlist", color: "red" });
      resetBtnState();
    }

    addToWatchListAPI(movie);
  };

  const resetBtnState = () => {
    setTimeout(() => {
      setBtnState(buttonState);
    }, 1500);
  };
  return (
    <div className="card-warper">
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
            {movie.vote_average !== 0 && (
              <div className="rating">
                <AiFillStar size={"3.5rem"} />
                <p className="text-rating">{movie.vote_average}</p>
              </div>
            )}
          </div>
        </div>
      </Link>
      <button
        className="add-to btn"
        style={{ backgroundColor: `${btnState.color}` }}
        onClick={addToWatchList}
      >
        {/* Add To Watchlist */}
        {btnState.btnText}
      </button>
    </div>
  );
};

export default ListItem;
