import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import "./style/queries.css";
import reportWebVitals from "./reportWebVitals";
import SelectedMovieProvider from "./context/moviesContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SelectedMovieProvider>
    <App />
  </SelectedMovieProvider>
);

reportWebVitals();
