import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const UserDetails = () => {
  const [{ given_name }] = useLocalStorage("userAuth");
  return (
    <div className="current-user">
      <FaUserCircle />
      <span className="user-name">Hello {given_name}</span>
    </div>
  );
};

export default UserDetails;
