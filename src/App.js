import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import MovieDetails from "./screens/movieDetails/MovieDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path={"/"} component={HomePage}></Route>
        <Route path={"/movie:id"} component={MovieDetails}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
