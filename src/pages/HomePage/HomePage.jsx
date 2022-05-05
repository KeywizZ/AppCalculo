import React, { useState }  from "react";
import { NavLink } from "react-router-dom";
//import { JwtContext } from "../../shared/context/JwtContext";

export const HomePage = () => {
  const [jwt] = useState(sessionStorage.getItem("token"));
  const user = JSON.parse(sessionStorage.getItem("user"));
  
  return (
    <>
      {!jwt && (
        <div className="homepage">
          <h1 className="bienvenida">Bienvenido a AppCálculo</h1>
          <NavLink to="/login">
            <button className="login">Iniciar Sesión</button>
          </NavLink>
          <span>
            ¿No tienes acceso? Pide a tu centro educativo que te de credenciales
            de acceso
          </span>
        </div>
      )}
      {jwt && (
        <div className="homepage">
          <h1 className="bienvenida">Bienvenido a AppCálculo {user.name}</h1>
          <NavLink to="/dashboard">
            <button className="login">Dashboard</button>
          </NavLink>
        </div>
      )}
    </>
  );
};
