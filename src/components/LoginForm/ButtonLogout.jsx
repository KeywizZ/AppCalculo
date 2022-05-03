import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";

export const ButtonLogout = () => {
  let navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const logOut = () => {
    localStorage.removeItem("token");
    setJwt(null);
    navigate("/login");
  };
  return <button onClick={logOut}>Log Out</button>;
};
