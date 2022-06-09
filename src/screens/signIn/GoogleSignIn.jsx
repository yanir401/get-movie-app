import React, { useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../context/userContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { createUser, fetchAllUsers } from "../../api/mockApi/mockApi";
import "./googleSignIn.css";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleSignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [userAuth, setUserAuth] = useLocalStorage("userAuth", "");
  const handleCallBackResponse = async (response) => {
    const userObj = jwt_decode(response.credential);
    // console.log("Login success current user: ", userObj);
    setUserAuth(userObj);
    setUser(userObj);
    const users = await fetchAllUsers();
    let isUser;
    if (users.length > 0) {
      isUser = users.find((userDetails) => userDetails.email === userObj.email);
    }
    if (!isUser) await createUser(userObj);
  };

  useEffect(() => {
    setTimeout(() => {
      window.google.accounts.id.initialize({
        client_id: clientId,
        auto_select: true,

        callback: handleCallBackResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }
      );
      window.google.accounts.id.prompt();
    }, 1000);
  }, []);

  return (
    <div className="logIn">
      <div id="buttonDiv"></div>
    </div>
  );
};

export default GoogleSignIn;
