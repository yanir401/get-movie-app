import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import "./style/queries.css";
import reportWebVitals from "./reportWebVitals";
import SelectedMovieProvider from "./context/moviesContext";
import UserContextProvider from "./context/userContext";
import WatchListProvider from "./context/watchListContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <WatchListProvider>
      <SelectedMovieProvider>
        <App />
      </SelectedMovieProvider>
    </WatchListProvider>
  </UserContextProvider>
);

reportWebVitals();
