import { createContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import watchListReducer, { initialState } from "../reducers/watchListReducer";

export const WatchListContext = createContext(initialState);

const WatchListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(watchListReducer, initialState);
  const [storageWatchList, setStorageWatchList] = useLocalStorage("watchList");

  const addMovieToWatchList = (movie) => {
    const watchList = [...state.watchList, movie];
    if (!storageWatchList) setStorageWatchList([movie]);
    else {
      const isExists = storageWatchList.find(
        (movieElement) => movieElement.id === movie.id
      );
      if (!isExists) {
        setStorageWatchList([...storageWatchList, movie]);
      }
      console.log(storageWatchList.length);
    }
    dispatch({
      type: "ADD_TO_WATCH_LIST",
      payload: {
        watchList,
      },
    });
  };
  const removeMovieFromWatchList = (movieToRemove) => {
    const watchList = state.watchList.filter(
      (movie) => movie.id !== movieToRemove.id
    );

    dispatch({
      type: "REMOVE_FROM_WATCH_LIST",
      payload: {
        watchList,
      },
    });
  };

  const value = {
    watchList: state.watchList,
    total: state.total,
    addMovieToWatchList,
    removeMovieFromWatchList,
  };
  return (
    <WatchListContext.Provider value={value}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider;
