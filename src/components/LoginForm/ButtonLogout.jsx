import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/context/JwtContext";

export const ButtonLogout = () => {
  let navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setJwt(null);
    navigate("/");
    window.location.reload();
  };
  return <button onClick={logOut}>LOG OUT</button>;
};
