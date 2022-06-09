// import React, { useContext, useEffect, useState } from "react";
import {
  Navigate,
  Outlet,
  Redirect,
  Route,
  useLocation,
} from "react-router-dom";
// import { UserContext } from "../context/userContext";
// import { useLocalStorage } from "../hooks/useLocalStorage";
// import GoogleSignIn from "../screens/signIn/GoogleSignIn";

import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
// import { UserContext } from "../../context/userContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createUser, fetchAllUsers } from "../api/mockApi/mockApi";
// import "./googleSignIn.css";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// const useAuth = () => {
//   const [userAuth, setUserAuth] = useLocalStorage("userAuth");
//   return userAuth;
// };
// const PrivateRoute = (props) => {
//   const location = useLocation();
//   console.log(props);
//   const { user } = useContext(UserContext);
//   const [userAuth, setUserAuth] = useLocalStorage("userAuth");

//   // const isAuth = useAuth();

//   console.log("props.userAuth", userAuth);
//   // if (!isAuth) return "loading...";

//   useEffect(() => {
//     console.log("something");
//   }, [user]);

//   {
//     return userAuth ? (
//       <Outlet />
//     ) : (
//       <Navigate to="/sign-in" replace state={{ from: location }} />
//     );
//   }
// };

// export default PrivateRoute;

const PrivateRoute = () => {
  const [userAuth, setUserAuth] = useLocalStorage("userAuth");
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();

  const handleCallBackResponse = async (response) => {
    const userObj = jwt_decode(response.credential);
    setUserAuth(userObj);
    // setUser(userObj);
    if (userObj) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    const users = await fetchAllUsers();
    let isUser;
    if (users.length > 0) {
      isUser = users.find((userDetails) => userDetails.email === userObj.email);
    }
    if (!isUser) await createUser(userObj);
  };

  useEffect(() => {
    if (!isAuth && !userAuth) {
      setTimeout(() => {
        window.google.accounts.id.initialize({
          client_id: clientId,
          // auto_select: true,

          callback: handleCallBackResponse,
        });
        window.google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }
        );
        window.google.accounts.id.prompt();
      }, 1000);
    } else if (userAuth && !isAuth) {
      setIsAuth(true);
    }
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsAuth(false);
  //     localStorage.clear();
  //   }, 5000);
  // });

  return isAuth ? <Outlet /> : <div id="buttonDiv"></div>;
};

export default PrivateRoute;
