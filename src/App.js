import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import { mockApi } from "./api/mockApi/mockApi";
import UserContextProvider, { UserContext } from "./context/userContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import PrivateRoute from "./privateRoute/PrivateRoute";
import HomePage from "./screens/HomePage";
import MovieDetails from "./screens/movieDetails/MovieDetails";
import GoogleSignIn from "./screens/signIn/GoogleSignIn";
import SignIn from "./screens/signIn/SignIn";
import WatchListScreen from "./screens/watchList/WatchListScreen";

function App() {
  const { user } = useContext(UserContext);
  const [userAuth, setUserAuth] = useLocalStorage("userAuth");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/watch-list" element={<WatchListScreen />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
